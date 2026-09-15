/* =========================================================
   NAVIDTOWEL — CART SYSTEM
   Product + Color + Size
========================================================= */
/* =========================================================
   LOAD CART
========================================================= */
let cart = [];
try {
    cart =
        JSON.parse(
            localStorage.getItem("navidTowelCart")
        ) || [];
} catch (error) {
    cart = [];
}
/* =========================================================
   ELEMENTS
========================================================= */
let productsContainer =
    document.querySelector(".products");
let cartCount =
    document.querySelector(".cartCount");
let cartModal =
    document.querySelector(".cartModal");
let cartItems =
    document.querySelector(".cartItems");
let cartTotal =
    document.querySelector(".cartTotal");
const bottomCart =
    document.getElementById("bottomCart");
const bottomCartCount =
    document.getElementById("bottomCartCount");
const bottomCartTotal =
    document.getElementById("bottomCartTotal");
/* =========================================================
   PRICE
========================================================= */
function formatPrice(price) {
    return (
        Number(price || 0)
            .toLocaleString("fa-IR") +
        " تومان"
    );
}
/* =========================================================
   NORMALIZE TEXT
========================================================= */
function normalizeCartText(value) {
    return String(value || "")
        .trim()
        .toLowerCase()
        .replace(/ي/g, "ی")
        .replace(/ى/g, "ی")
        .replace(/ك/g, "ک")
        .replace(/\s+/g, "")
        .replace(/[-_]/g, "");
}
/* =========================================================
   GET PRODUCT
========================================================= */
function getProductById(id) {
    if (
        typeof products === "undefined" ||
        !Array.isArray(products)
    ) {
        return null;
    }
    return products.find(
        product =>
            Number(product.id) === Number(id)
    ) || null;
}
/* =========================================================
   GET PRODUCT IMAGE
========================================================= */
function getProductImage(product) {
    if (!product) {
        return "";
    }
    if (
        Array.isArray(product.images) &&
        product.images.length
    ) {
        const validImage =
            product.images.find(
                image =>
                    image &&
                    String(image).trim() !== ""
            );
        if (validImage) {
            return validImage;
        }
    }
    if (
        product.image &&
        String(product.image) !== "0"
    ) {
        return product.image;
    }
    return "";
}
/* =========================================================
   GET TOTAL PRODUCT STOCK
========================================================= */
function getProductTotalStock(product) {
    if (!product) {
        return 0;
    }
    if (
        Array.isArray(product.colors) &&
        product.colors.length
    ) {
        return product.colors.reduce(
            (total, color) => {
                return (
                    total +
                    Math.max(
                        0,
                        Number(
                            color.stock || 0
                        )
                    )
                );
            },
            0
        );
    }
    /*
       اگر محصول رنگ ندارد،
       اگر stock مستقیم داشته باشد استفاده می‌شود.
    */
    if (
        product.stock !== undefined &&
        product.stock !== null
    ) {
        return Math.max(
            0,
            Number(product.stock || 0)
        );
    }
    /*
       اگر هیچ موجودی تعریف نشده،
       برای سازگاری قدیمی نامحدود در نظر گرفته می‌شود.
    */
    return Infinity;
}
/* =========================================================
   GET COLOR STOCK
========================================================= */
function getColorStock(product, colorName) {
    if (!product) {
        return 0;
    }
    if (!colorName) {
        return getProductTotalStock(product);
    }
    if (
        !Array.isArray(product.colors)
    ) {
        return Infinity;
    }
    const color =
        product.colors.find(
            item =>
                normalizeCartText(item.name) ===
                normalizeCartText(colorName)
        );
    if (!color) {
        return 0;
    }
    return Math.max(
        0,
        Number(color.stock || 0)
    );
}
/* =========================================================
   CREATE CART KEY
========================================================= */
function getCartItemKey(
    id,
    color = null,
    size = "Free Size"
) {
    return [
        Number(id),
        normalizeCartText(color || ""),
        normalizeCartText(size || "Free Size")
    ].join("|");
}
/* =========================================================
   NORMALIZE OLD CART
========================================================= */
function normalizeCartItem(item) {
    if (!item) {
        return null;
    }
    const product =
        getProductById(item.id);
    if (!product) {
        return null;
    }
    const color =
        item.color !== undefined
            ? item.color
            : null;
    const size =
        item.size !== undefined &&
        item.size !== null &&
        String(item.size).trim() !== ""
            ? String(item.size)
            : "Free Size";
    return {
        id: product.id,
        name: product.name,
        color: color,
        size: size,
        quantity: Math.max(
            1,
            Number(item.quantity || 1)
        ),
        key:
            getCartItemKey(
                product.id,
                color,
                size
            )
    };
}
/* =========================================================
   CLEAN / MIGRATE CART
========================================================= */
function normalizeCart() {
    const normalized = [];
    cart.forEach(item => {
        const newItem =
            normalizeCartItem(item);
        if (!newItem) {
            return;
        }
        const existing =
            normalized.find(
                current =>
                    current.key ===
                    newItem.key
            );
        if (existing) {
            existing.quantity +=
                newItem.quantity;
        } else {
            normalized.push(
                newItem
            );
        }
    });
    cart = normalized;
}
/* =========================================================
   CREATE CART MODAL
========================================================= */
function createCartModal() {
    if (
        document.querySelector(
            ".cartModal"
        )
    ) {
        refreshCartElements();
        return;
    }
    const modal =
        document.createElement(
            "div"
        );
    modal.className =
        "cartModal cart-modal";
    modal.innerHTML = `
        <div class="cart-box">
            <div class="cart-header">
                <h2>
                    سبد خرید
                </h2>
                <button
                    type="button"
                    class="closeCart"
                    aria-label="بستن">
                    ×
                </button>
            </div>
            <div class="cartItems"></div>
            <div class="cart-total">
                <span>
                    مبلغ کل
                </span>
                <strong class="cartTotal">
                    ۰ تومان
                </strong>
            </div>
            <button
                type="button"
                class="checkout">
                تکمیل سفارش
            </button>
        </div>
    `;
    document.body.appendChild(
        modal
    );
    refreshCartElements();
}
/* =========================================================
   REFRESH CART ELEMENTS
========================================================= */
function refreshCartElements() {
    cartModal =
        document.querySelector(
            ".cartModal"
        );
    cartItems =
        document.querySelector(
            ".cartItems"
        );
    cartTotal =
        document.querySelector(
            ".cartTotal"
        );
    cartCount =
        document.querySelector(
            ".cartCount"
        );
}
/* =========================================================
   PRODUCT LIST
========================================================= */
function renderProducts() {
    if (!productsContainer) {
        return;
    }
    if (
        typeof products === "undefined"
    ) {
        return;
    }
    productsContainer.innerHTML =
        products.map(
            product => {
                const image =
                    getProductImage(
                        product
                    );
                return `
                    <article
                        class="product-card"
                        onclick="openProduct(${product.id})">
                        <div class="product-image">
                            ${
                                product.badge
                                    ? `
                                        <span class="badge">
                                            ${product.badge}
                                        </span>
                                      `
                                    : ""
                            }
                            ${
                                image
                                    ? `
                                        <img
                                            src="${image}"
                                            alt="${product.name}"
                                            style="width:100%;height:100%;object-fit:cover;">
                                      `
                                    : ""
                            }
                        </div>
                        <div class="product-info">
                            <h3>
                                ${product.name}
                            </h3>
                            <p class="product-desc">
                                ${product.description || ""}
                            </p>
                            <div class="product-bottom">
                                <div class="price">
                                    ${formatPrice(
                                        product.price
                                    )}
                                </div>
                                <button
                                    type="button"
                                    class="add-cart"
                                    onclick="
                                        event.stopPropagation();
                                        addToCart(
                                            ${product.id},
                                            null,
                                            'Free Size'
                                        );
                                    ">
                                    افزودن به سبد
                                </button>
                            </div>
                        </div>
                    </article>
                `;
            }
        ).join("");
}
/* =========================================================
   OPEN PRODUCT
========================================================= */
function openProduct(id) {
    window.location.href =
        "product.html?id=" +
        id;
}
/* =========================================================
   TOAST
========================================================= */
function showCartNotification(
    message,
    type = "success"
) {
    let toast =
        document.querySelector(
            ".cart-toast"
        );
    if (!toast) {
        toast =
            document.createElement(
                "div"
            );
        toast.className =
            "cart-toast";
        document.body.appendChild(
            toast
        );
    }
    toast.classList.remove(
        "show"
    );
    toast.innerHTML = `
        <span class="cart-toast-icon">
            ${
                type === "remove"
                    ? "−"
                    : "✓"
            }
        </span>
        <span class="cart-toast-text">
            ${message}
        </span>
    `;
    void toast.offsetWidth;
    toast.classList.add(
        "show"
    );
    clearTimeout(
        window.cartToastTimer
    );
    window.cartToastTimer =
        setTimeout(
            () => {
                toast.classList.remove(
                    "show"
                );
            },
            2200
        );
}
/* =========================================================
   ADD TO CART
========================================================= */
function addToCart(
    id,
    color = null,
    size = "Free Size"
) {
    const product =
        getProductById(id);
    if (!product) {
        return;
    }
    color =
        color
            ? String(color)
            : null;
    size =
        size !== undefined &&
        size !== null &&
        String(size).trim() !== ""
            ? String(size)
            : "Free Size";
    /*
       اگر محصول رنگ دارد،
       حتماً باید رنگ معتبر باشد.
    */
    if (
        Array.isArray(product.colors) &&
        product.colors.length
    ) {
        if (!color) {
            showCartNotification(
                "لطفاً رنگ محصول را انتخاب کنید.",
                "remove"
            );
            return;
        }
        const colorExists =
            product.colors.some(
                item =>
                    normalizeCartText(
                        item.name
                    ) ===
                    normalizeCartText(
                        color
                    )
            );
        if (!colorExists) {
            showCartNotification(
                "رنگ انتخاب‌شده معتبر نیست.",
                "remove"
            );
            return;
        }
    }
    const key =
        getCartItemKey(
            product.id,
            color,
            size
        );
    const stock =
        getColorStock(
            product,
            color
        );
    const existing =
        cart.find(
            item =>
                item.key === key
        );
    const currentQuantity =
        existing
            ? Number(
                existing.quantity || 0
              )
            : 0;
    /*
       کنترل موجودی
    */
    if (
        stock !== Infinity &&
        currentQuantity >= stock
    ) {
        showCartNotification(
            "موجودی این رنگ به پایان رسیده است.",
            "remove"
        );
        return;
    }
    if (existing) {
        existing.quantity++;
        showCartNotification(
            `${product.name} به سبد اضافه شد`
        );
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            color: color,
            size: size,
            quantity: 1,
            key: key
        });
        showCartNotification(
            `${product.name} به سبد اضافه شد`
        );
    }
    saveCart();
    renderCart();
    updateBottomCart();
}
/* =========================================================
   CHANGE QUANTITY
========================================================= */
function changeQuantity(
    id,
    amount,
    color = null,
    size = "Free Size"
) {
    const key =
        getCartItemKey(
            id,
            color,
            size
        );
    const item =
        cart.find(
            product =>
                product.key === key
        );
    if (!item) {
        return;
    }
    const product =
        getProductById(
            item.id
        );
    if (!product) {
        return;
    }
    const oldQuantity =
        Number(
            item.quantity || 1
        );
    const newQuantity =
        oldQuantity +
        Number(amount || 0);
    /*
       کاهش تعداد
    */
    if (
        amount < 0 &&
        newQuantity > 0
    ) {
        item.quantity =
            newQuantity;
        showCartNotification(
            `تعداد ${item.name} کاهش یافت`,
            "remove"
        );
    }
    /*
       افزایش تعداد
    */
    else if (
        amount > 0
    ) {
        const stock =
            getColorStock(
                product,
                item.color
            );
        if (
            stock !== Infinity &&
            oldQuantity >= stock
        ) {
            showCartNotification(
                "بیشتر از موجودی نمی‌توانید اضافه کنید.",
                "remove"
            );
            return;
        }
        item.quantity =
            newQuantity;
        showCartNotification(
            `تعداد ${item.name} افزایش یافت`
        );
    }
    /*
       حذف کامل
    */
    if (
        item.quantity <= 0
    ) {
        cart =
            cart.filter(
                productItem =>
                    productItem.key !== key
            );
        showCartNotification(
            `${item.name} از سبد حذف شد`,
            "remove"
        );
    }
    saveCart();
    renderCart();
    updateBottomCart();
}
/* =========================================================
   REMOVE CART ITEM
========================================================= */
function removeCartItem(
    id,
    color = null,
    size = "Free Size"
) {
    const key =
        getCartItemKey(
            id,
            color,
            size
        );
    const item =
        cart.find(
            cartItem =>
                cartItem.key === key
        );
    if (!item) {
        return;
    }
    cart =
        cart.filter(
            cartItem =>
                cartItem.key !== key
        );
    saveCart();
    renderCart();
    updateBottomCart();
    showCartNotification(
        `${item.name} از سبد حذف شد`,
        "remove"
    );
}
/* =========================================================
   SAVE CART
========================================================= */
function saveCart() {
    localStorage.setItem(
        "navidTowelCart",
        JSON.stringify(cart)
    );
    updateHeaderCart();
}
/* =========================================================
   HEADER CART COUNT
========================================================= */
function updateHeaderCart() {
    const headerCounts =
        document.querySelectorAll(
            ".cartCount"
        );
    const quantity =
        cart.reduce(
            (
                sum,
                item
            ) => {
                return (
                    sum +
                    Number(
                        item.quantity || 0
                    )
                );
            },
            0
        );
    headerCounts.forEach(
        counter => {
            counter.textContent =
                quantity.toLocaleString(
                    "fa-IR"
                );
        }
    );
}
/* =========================================================
   CALCULATE TOTAL
   قیمت همیشه از products.js
========================================================= */
function getCartTotal() {
    return cart.reduce(
        (
            sum,
            item
        ) => {
            const product =
                getProductById(
                    item.id
                );
            if (!product) {
                return sum;
            }
            return (
                sum +
                Number(
                    product.price || 0
                ) *
                Number(
                    item.quantity || 0
                )
            );
        },
        0
    );
}
/* =========================================================
   GET CURRENT CART ITEM PRICE
========================================================= */
function getCartItemPrice(item) {
    const product =
        getProductById(
            item.id
        );
    if (!product) {
        return Number(
            item.price || 0
        );
    }
    return Number(
        product.price || 0
    );
}
/* =========================================================
   COLOR VISUAL
========================================================= */
function getCartColorCSS(
    colorName
) {
    const color =
        normalizeCartText(
            colorName
        );
    const map = {
        "ابی": "#2196f3",
        "آبی": "#2196f3",
        "قرمز": "#e53935",
        "سبز": "#43a047",
        "زرد": "#fbc02d",
        "نارنجی": "#fb8c00",
        "صورتی": "#ec407a",
        "صورتیکالباسی": "#d89a9a",
        "بنفش": "#8e44ad",
        "مشکی": "#111",
        "سیاه": "#111",
        "سفید": "#fff",
        "طوسی": "#999",
        "خاکستری": "#777",
        "کرم": "#e8d5b5",
        "قهوهای": "#795548",
        "طلایی": "#d4af37",
        "نقرهای": "#c0c0c0",
        "فیروزهای": "#26a69a"
    };
    return (
        map[color] ||
        "#ccc"
    );
}
/* =========================================================
   RENDER COLOR DOT
========================================================= */
function renderCartColor(
    color
) {
    if (!color) {
        return "";
    }
    return `
        <span
            class="cart-item-color-dot"
            title="${color}"
            style="
                display:inline-block;
                width:12px;
                height:12px;
                border-radius:50%;
                background:${getCartColorCSS(color)};
                border:1px solid rgba(0,0,0,.15);
                vertical-align:middle;
                margin-right:5px;
            ">
        </span>
    `;
}
/* =========================================================
   RENDER CART
========================================================= */
function renderCart() {
    updateHeaderCart();
    if (
        !cartItems ||
        !cartTotal
    ) {
        return;
    }
    if (
        cart.length === 0
    ) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    🛒
                </div>
                <strong>
                    سبد خرید خالی است
                </strong>
                <span>
                    هنوز محصولی به سبد اضافه نکرده‌اید.
                </span>
            </div>
        `;
        cartTotal.textContent =
            "۰ تومان";
        return;
    }
    cartItems.innerHTML =
        cart.map(
            item => {
                const product =
                    getProductById(
                        item.id
                    );
                if (!product) {
                    return "";
                }
                const image =
                    getProductImage(
                        product
                    );
                const currentPrice =
                    getCartItemPrice(
                        item
                    );
                const colorDot =
                    renderCartColor(
                        item.color
                    );
                return `
                    <div
                        class="cart-item"
                        data-cart-key="${item.key}">
                        ${
                            image
                                ? `
                                    <div
                                        class="cart-item-image"
                                        style="cursor:pointer;"
                                        onclick="openProduct(${product.id})">
                                        <img
                                            src="${image}"
                                            alt="${product.name}">
                                    </div>
                                  `
                                : ""
                        }
                        <div
                            class="cart-item-info"
                            style="cursor:pointer;"
                            onclick="openProduct(${product.id})">
                            <strong>
                                ${product.name}
                            </strong>
                            <span>
                                ${formatPrice(
                                    currentPrice
                                )}
                            </span>
                            ${
                                item.color
                                    ? `
                                        <small
                                            style="
                                                display:flex;
                                                align-items:center;
                                                gap:4px;
                                                margin-top:4px;
                                            ">
                                            ${colorDot}
                                        </small>
                                      `
                                    : ""
                            }
                            ${
                                item.size &&
                                item.size !== "Free Size"
                                    ? `
                                        <small
                                            style="
                                                display:block;
                                                margin-top:4px;
                                                color:#777;
                                            ">
                                            سایز:
                                            ${item.size}
                                        </small>
                                      `
                                    : ""
                            }
                        </div>
                        <div
                            class="qty-controls">
                            <button
                                type="button"
                                onclick="
                                    changeQuantity(
                                        ${item.id},
                                        1,
                                        ${JSON.stringify(item.color)},
                                        ${JSON.stringify(item.size)}
                                    )
                                "
                                aria-label="افزایش">
                                +
                            </button>
                            <span>
                                ${Number(
                                    item.quantity
                                ).toLocaleString(
                                    "fa-IR"
                                )}
                            </span>
                            <button
                                type="button"
                                onclick="
                                    changeQuantity(
                                        ${item.id},
                                        -1,
                                        ${JSON.stringify(item.color)},
                                        ${JSON.stringify(item.size)}
                                    )
                                "
                                aria-label="کاهش">
                                −
                            </button>
                            <button
                                type="button"
                                class="cart-remove-button"
                                onclick="
                                    removeCartItem(
                                        ${item.id},
                                        ${JSON.stringify(item.color)},
                                        ${JSON.stringify(item.size)}
                                    )
                                "
                                aria-label="حذف">
                                ×
                            </button>
                        </div>
                    </div>
                `;
            }
        ).join("");
    cartTotal.textContent =
        formatPrice(
            getCartTotal()
        );
}
/* =========================================================
   BOTTOM CART
========================================================= */
function updateBottomCart() {
    if (!bottomCart) {
        return;
    }
    if (
        cart.length === 0
    ) {
        bottomCart.classList.remove(
            "active"
        );
        return;
    }
    const quantity =
        cart.reduce(
            (
                sum,
                item
            ) =>
                sum +
                Number(
                    item.quantity || 0
                ),
            0
        );
    const total =
        getCartTotal();
    if (bottomCartCount) {
        bottomCartCount.textContent =
            quantity.toLocaleString(
                "fa-IR"
            );
    }
    if (bottomCartTotal) {
        bottomCartTotal.textContent =
            Number(total)
                .toLocaleString(
                    "fa-IR"
                ) +
            " تومان";
    }
    bottomCart.classList.add(
        "active"
    );
}
/* =========================================================
   OPEN CART
========================================================= */
function openCart() {
    createCartModal();
    if (!cartModal) {
        return;
    }
    renderCart();
    cartModal.classList.add(
        "active"
    );
    document.body.classList.add(
        "cart-open"
    );
}
/* =========================================================
   CLOSE CART
========================================================= */
function closeCart() {
    if (!cartModal) {
        return;
    }
    cartModal.classList.remove(
        "active"
    );
    document.body.classList.remove(
        "cart-open"
    );
}
/* =========================================================
   GO TO CART PAGE
========================================================= */
function goToCartPage() {
    if (
        cart.length === 0
    ) {
        showCartNotification(
            "سبد خرید شما خالی است",
            "remove"
        );
        return;
    }
    window.location.href =
        "cart.html";
}
/* =========================================================
   CART EVENTS
========================================================= */
function setupCartEvents() {
    createCartModal();
    if (!cartModal) {
        return;
    }
    /* OPEN CART */
    document
        .querySelectorAll(
            ".openCart"
        )
        .forEach(
            button => {
                button.addEventListener(
                    "click",
                    function (event) {
                        event.preventDefault();
                        openCart();
                    }
                );
            }
        );
    /* CLOSE */
    document.addEventListener(
        "click",
        function (event) {
            const closeButton =
                event.target.closest(
                    ".closeCart"
                );
            if (closeButton) {
                closeCart();
            }
        }
    );
    /* CLICK OUTSIDE */
    cartModal.addEventListener(
        "click",
        function (event) {
            if (
                event.target ===
                cartModal
            ) {
                closeCart();
            }
        }
    );
    /* CHECKOUT */
    document.addEventListener(
        "click",
        function (event) {
            const checkoutButton =
                event.target.closest(
                    ".checkout, .bottom-cart-checkout"
                );
            if (!checkoutButton) {
                return;
            }
            event.preventDefault();
            goToCartPage();
        }
    );
    /* ESC */
    document.addEventListener(
        "keydown",
        function (event) {
            if (
                event.key === "Escape"
            ) {
                closeCart();
            }
        }
    );
}
/* =========================================================
   SYNC CART BETWEEN TABS
========================================================= */
window.addEventListener(
    "storage",
    function (event) {
        if (
            event.key !==
            "navidTowelCart"
        ) {
            return;
        }
        try {
            cart =
                JSON.parse(
                    event.newValue
                ) || [];
        } catch {
            cart = [];
        }
        normalizeCart();
        saveCart();
        renderCart();
        updateBottomCart();
    }
);
/* =========================================================
   MOBILE SIDE MENU
========================================================= */
function setupMobileMenu() {
    const menu =
        document.getElementById(
            "mobileSideMenu"
        );
    const overlay =
        document.getElementById(
            "mobileMenuOverlay"
        );
    const closeBtn =
        document.getElementById(
            "mobileMenuClose"
        );
    const openBtn =
        document.getElementById(
            "mobileMenuButton"
        ) ||
        document.querySelector(
            ".mobile-menu-button"
        ) ||
        document.querySelector(
            ".mobile-menu-btn"
        );
    const category =
        document.querySelector(
            ".mobile-side-category"
        );
    const categoryButton =
        document.getElementById(
            "mobileCategoryButton"
        );
    function openSideMenu() {
        if (!menu) {
            return;
        }
        menu.classList.add(
            "active"
        );
        if (overlay) {
            overlay.classList.add(
                "active"
            );
        }
        document.body.style.overflow =
            "hidden";
    }
    function closeSideMenu() {
        if (!menu) {
            return;
        }
        menu.classList.remove(
            "active"
        );
        if (overlay) {
            overlay.classList.remove(
                "active"
            );
        }
        document.body.style.overflow =
            "";
    }
    if (openBtn) {
        openBtn.addEventListener(
            "click",
            function (event) {
                event.preventDefault();
                openSideMenu();
            }
        );
    }
    if (closeBtn) {
        closeBtn.addEventListener(
            "click",
            closeSideMenu
        );
    }
    if (overlay) {
        overlay.addEventListener(
            "click",
            closeSideMenu
        );
    }
    document.addEventListener(
        "keydown",
        function (event) {
            if (
                event.key === "Escape"
            ) {
                closeSideMenu();
            }
        }
    );
    if (
        categoryButton &&
        category
    ) {
        categoryButton.addEventListener(
            "click",
            function () {
                category.classList.toggle(
                    "open"
                );
            }
        );
    }
    if (menu) {
        menu.querySelectorAll(
            "a"
        ).forEach(
            function (link) {
                link.addEventListener(
                    "click",
                    function () {
                        closeSideMenu();
                    }
                );
            }
        );
    }
}
/* =========================================================
   INITIALIZE
========================================================= */
document.addEventListener(
    "DOMContentLoaded",
    function () {
        /*
           سبد قدیمی را به ساختار
           جدید رنگ + سایز تبدیل می‌کنیم.
        */
        normalizeCart();
        saveCart();
        createCartModal();
        renderProducts();
        renderCart();
        updateBottomCart();
        setupCartEvents();
        setupMobileMenu();
    }
);