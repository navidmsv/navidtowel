/* =========================================================
   NAVIDTOWEL — CART SYSTEM
   Product + Color + Size
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

    return (
        products.find(
            product =>
                Number(product.id) === Number(id)
        ) || null
    );
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
   TOTAL STOCK
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
            (total, color) =>
                total +
                Math.max(
                    0,
                    Number(color.stock || 0)
                ),
            0
        );
    }

    if (
        product.stock !== undefined &&
        product.stock !== null
    ) {
        return Math.max(
            0,
            Number(product.stock || 0)
        );
    }

    return Infinity;
}

/* =========================================================
   COLOR STOCK
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
   CART KEY
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
   NORMALIZE CART
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
   CART MODAL
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

                <div class="cart-title-wrap">
                    <span class="cart-title-icon">🛒</span>

                    <div>
                        <h2>سبد خرید</h2>
                        <small>
                            محصولات انتخاب‌شده
                        </small>
                    </div>
                </div>

                <button
                    type="button"
                    class="closeCart"
                    aria-label="بستن">
                    ×
                </button>

            </div>

            <div class="cartItems"></div>

            <div class="cart-footer">

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

        </div>
    `;

    document.body.appendChild(
        modal
    );

    refreshCartElements();

    injectCartModalStyles();
}

/* =========================================================
   CART MODAL STYLE
========================================================= */

function injectCartModalStyles() {

    if (
        document.getElementById(
            "navid-cart-modal-style"
        )
    ) {
        return;
    }

    const style =
        document.createElement(
            "style"
        );

    style.id =
        "navid-cart-modal-style";

    style.textContent = `

        .cartModal.cart-modal{
            position:fixed;
            inset:0;
            background:rgba(0,0,0,.48);
            backdrop-filter:blur(5px);
            -webkit-backdrop-filter:blur(5px);
            display:flex;
            align-items:flex-start;
            justify-content:center;
            padding:85px 16px 25px;
            opacity:0;
            visibility:hidden;
            pointer-events:none;
            transition:.25s ease;
            z-index:99999;
            box-sizing:border-box;
        }

        .cartModal.cart-modal.active{
            opacity:1;
            visibility:visible;
            pointer-events:auto;
        }

        .cartModal .cart-box{
            width:min(430px,100%);
            max-height:min(620px,calc(100vh - 105px));
            background:#fff;
            border-radius:18px;
            overflow:hidden;
            box-shadow:0 18px 55px rgba(0,0,0,.20);
            transform:translateY(-12px) scale(.98);
            transition:.25s ease;
            display:flex;
            flex-direction:column;
        }

        .cartModal.active .cart-box{
            transform:translateY(0) scale(1);
        }

        .cartModal .cart-header{
            min-height:64px;
            padding:12px 15px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            border-bottom:1px solid #eee;
            box-sizing:border-box;
            flex-shrink:0;
        }

        .cart-title-wrap{
            display:flex;
            align-items:center;
            gap:9px;
        }

        .cart-title-icon{
            width:35px;
            height:35px;
            border-radius:10px;
            display:flex;
            align-items:center;
            justify-content:center;
            background:#f5f1eb;
            font-size:17px;
        }

        .cartModal .cart-header h2{
            margin:0;
            font-size:15px;
            font-weight:800;
            color:#252525;
            line-height:1.3;
        }

        .cartModal .cart-header small{
            display:block;
            margin-top:2px;
            color:#999;
            font-size:9px;
            font-weight:500;
        }

        .cartModal .closeCart{
            width:31px;
            height:31px;
            border:0;
            border-radius:9px;
            background:#f5f5f5;
            color:#666;
            font-size:21px;
            line-height:1;
            cursor:pointer;
            transition:.2s ease;
        }

        .cartModal .closeCart:hover{
            background:#eee;
            color:#222;
        }

        .cartModal .cartItems{
            overflow-y:auto;
            padding:2px 14px;
            flex:1;
        }

        .cartModal .cart-item{
            min-height:78px;
            padding:11px 0;
            display:grid;
            grid-template-columns:58px minmax(0,1fr) auto;
            gap:10px;
            align-items:center;
            border-bottom:1px solid #eeeeee;
            box-sizing:border-box;
        }

        .cartModal .cart-item:last-child{
            border-bottom:0;
        }

        .cartModal .cart-item-image{
            width:58px;
            height:58px;
            border-radius:10px;
            overflow:hidden;
            background:#f5f5f5;
            border:1px solid #eee;
            flex-shrink:0;
        }

        .cartModal .cart-item-image img{
            width:100%;
            height:100%;
            display:block;
            object-fit:cover;
        }

        .cartModal .cart-item-info{
            min-width:0;
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            gap:3px;
        }

        .cartModal .cart-item-info strong{
            width:100%;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            color:#292929;
            font-size:11px;
            font-weight:800;
            line-height:1.5;
        }

        .cartModal .cart-item-info > span{
            color:#8b735b;
            font-size:10px;
            font-weight:700;
        }

        .cartModal .cart-item-meta{
            display:flex;
            align-items:center;
            flex-wrap:wrap;
            gap:5px;
            margin-top:1px;
        }

        .cartModal .cart-meta-chip{
            display:inline-flex;
            align-items:center;
            gap:4px;
            min-height:20px;
            padding:2px 7px;
            border-radius:6px;
            background:#f7f7f7;
            color:#777;
            font-size:8.5px;
            line-height:1;
            box-sizing:border-box;
        }

        .cartModal .cart-meta-chip.color-chip{
            color:#555;
        }

        .cartModal .cart-item-color-dot{
            width:10px !important;
            height:10px !important;
            margin:0 !important;
            flex-shrink:0;
        }

        .cartModal .qty-controls{
            display:flex;
            align-items:center;
            gap:3px;
            padding:3px;
            background:#f7f7f7;
            border:1px solid #eee;
            border-radius:8px;
        }

        .cartModal .qty-controls button{
            width:22px;
            height:22px;
            padding:0;
            border:0;
            border-radius:6px;
            background:#fff;
            color:#555;
            font-size:14px;
            line-height:22px;
            cursor:pointer;
            box-shadow:0 1px 2px rgba(0,0,0,.04);
        }

        .cartModal .qty-controls button:hover{
            background:#f0f0f0;
        }

        .cartModal .qty-controls > span{
            min-width:17px;
            text-align:center;
            font-size:9px;
            font-weight:800;
            color:#444;
        }

        .cartModal .qty-controls .cart-remove-button{
            color:#d75b5b;
            font-size:16px;
            margin-right:1px;
        }

        .cartModal .cart-footer{
            padding:13px 14px 14px;
            background:#fff;
            border-top:1px solid #eee;
            flex-shrink:0;
        }

        .cartModal .cart-total{
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin-bottom:10px;
        }

        .cartModal .cart-total span{
            color:#777;
            font-size:10px;
        }

        .cartModal .cart-total strong{
            color:#222;
            font-size:14px;
            font-weight:900;
        }

        .cartModal .checkout{
            width:100%;
            height:40px;
            border:0;
            border-radius:10px;
            background:#333;
            color:#fff;
            font-family:inherit;
            font-size:11px;
            font-weight:800;
            cursor:pointer;
            transition:.2s ease;
        }

        .cartModal .checkout:hover{
            background:#222;
        }

        .cartModal .empty-cart{
            min-height:230px;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            gap:7px;
            text-align:center;
            color:#777;
        }

        .cartModal .empty-cart-icon{
            width:48px;
            height:48px;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:14px;
            background:#f6f6f6;
            font-size:23px;
            margin-bottom:4px;
        }

        .cartModal .empty-cart strong{
            font-size:12px;
            color:#444;
        }

        .cartModal .empty-cart span{
            font-size:9px;
            color:#999;
        }

        @media(max-width:500px){

            .cartModal.cart-modal{
                padding:74px 10px 14px;
            }

            .cartModal .cart-box{
                max-height:calc(100vh - 88px);
                border-radius:15px;
            }

            .cartModal .cart-item{
                grid-template-columns:52px minmax(0,1fr) auto;
                gap:8px;
                min-height:72px;
                padding:9px 0;
            }

            .cartModal .cart-item-image{
                width:52px;
                height:52px;
            }

            .cartModal .cart-item-info strong{
                font-size:10px;
            }

            .cartModal .cart-item-info > span{
                font-size:9px;
            }

            .cartModal .cart-meta-chip{
                font-size:8px;
                padding:2px 6px;
            }

            .cartModal .qty-controls button{
                width:20px;
                height:20px;
                line-height:20px;
            }

            .cartModal .qty-controls > span{
                min-width:15px;
                font-size:8px;
            }

            .cartModal .cart-total strong{
                font-size:13px;
            }
        }

    `;

    document.head.appendChild(style);
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

    } else if (
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
   REMOVE ITEM
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
            ) =>
                sum +
                Number(
                    item.quantity || 0
                ),
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
   CART TOTAL
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
   CURRENT PRICE
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
        "صورتیکالباسی": "#d88f8f",
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
                width:10px;
                height:10px;
                border-radius:50%;
                background:${getCartColorCSS(color)};
                border:1px solid rgba(0,0,0,.16);
                vertical-align:middle;
                margin:0;
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

                return `
                    <div
                        class="cart-item"
                        data-cart-key="${item.key}">

                        ${
                            image
                                ? `
                                    <div
                                        class="cart-item-image"
                                        onclick="openProduct(${product.id})">

                                        <img
                                            src="${image}"
                                            alt="${product.name}">
                                    </div>
                                  `
                                : `
                                    <div
                                        class="cart-item-image">
                                    </div>
                                  `
                        }

                        <div
                            class="cart-item-info"
                            onclick="openProduct(${product.id})">

                            <strong>
                                ${product.name}
                            </strong>

                            <span>
                                ${formatPrice(
                                    currentPrice
                                )}
                            </span>

                            <div class="cart-item-meta">

                                ${
                                    item.color
                                        ? `
                                            <span class="cart-meta-chip color-chip">
                                                ${renderCartColor(item.color)}
                                                <span>
                                                    ${item.color}
                                                </span>
                                            </span>
                                          `
                                        : ""
                                }

                                ${
                                    item.size &&
                                    item.size !== "Free Size"
                                        ? `
                                            <span class="cart-meta-chip">
                                                سایز ${item.size}
                                            </span>
                                          `
                                        : `
                                            <span class="cart-meta-chip">
                                                سایز آزاد
                                            </span>
                                          `
                                }

                            </div>

                        </div>

                        <div class="qty-controls">

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
   STORAGE SYNC
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
   MOBILE SIDE MENU — iPhone Safari FIX
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


    /* =====================================================
       OPEN
    ===================================================== */

    function openSideMenu() {

        if (!menu) {
            return;
        }

        /* باز کردن منو */
        menu.classList.add("active");

        if (overlay) {
            overlay.classList.add("active");
        }

        /*
         * خیلی مهم:
         * این کلاس قبلاً وجود نداشت.
         * با اضافه شدنش CSS می‌تواند bottom-cart
         * را هنگام باز بودن منو کاملاً مخفی کند.
         */
        document.body.classList.add("menu-open");

        /*
         * جلوگیری از اسکرول صفحه
         */
        document.body.style.overflow = "hidden";

        document.documentElement.classList.add(
            "menu-open"
        );
    }


    /* =====================================================
       CLOSE
    ===================================================== */

    function closeSideMenu() {

        if (!menu) {
            return;
        }

        menu.classList.remove("active");

        if (overlay) {
            overlay.classList.remove("active");
        }

        /*
         * بستن وضعیت menu-open
         */
        document.body.classList.remove(
            "menu-open"
        );

        document.documentElement.classList.remove(
            "menu-open"
        );

        /*
         * برگرداندن اسکرول
         */
        document.body.style.overflow = "";
    }


    /* =====================================================
       OPEN BUTTON
    ===================================================== */

    if (openBtn) {

        openBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                openSideMenu();
            }
        );
    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (closeBtn) {

        closeBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                closeSideMenu();
            }
        );
    }


    /* =====================================================
       OVERLAY
    ===================================================== */

    if (overlay) {

        overlay.addEventListener(
            "click",
            function () {

                closeSideMenu();
            }
        );
    }


    /* =====================================================
       ESC
    ===================================================== */

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


    /* =====================================================
       CATEGORY
    ===================================================== */

    if (
        categoryButton &&
        category
    ) {

        categoryButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                category.classList.toggle(
                    "open"
                );
            }
        );
    }


    /* =====================================================
       MENU LINKS
    ===================================================== */

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