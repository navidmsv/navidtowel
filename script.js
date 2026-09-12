/* =========================================================
   NAVIDTOWEL — CART SYSTEM
========================================================= */
let cart = JSON.parse(localStorage.getItem("navidTowelCart")) || [];
/* =========================================================
   ELEMENTS
========================================================= */
const productsContainer = document.querySelector(".products");
let cartCount = document.querySelector(".cartCount");
let cartModal = document.querySelector(".cartModal");
let cartItems = document.querySelector(".cartItems");
let cartTotal = document.querySelector(".cartTotal");
const bottomCart = document.getElementById("bottomCart");
const bottomCartCount = document.getElementById("bottomCartCount");
const bottomCartTotal = document.getElementById("bottomCartTotal");
/* =========================================================
   PRICE
========================================================= */
function formatPrice(price) {
    return Number(price || 0).toLocaleString("fa-IR") + " تومان";
}
/* =========================================================
   CREATE CART MODAL ON PAGES THAT DON'T HAVE IT
========================================================= */
function createCartModal() {
    if (document.querySelector(".cartModal")) {
        refreshCartElements();
        return;
    }
    const modal = document.createElement("div");
    modal.className = "cartModal cart-modal";
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
    document.body.appendChild(modal);
    refreshCartElements();
}
/* =========================================================
   REFRESH CART ELEMENT REFERENCES
========================================================= */
function refreshCartElements() {
    cartModal = document.querySelector(".cartModal");
    cartItems = document.querySelector(".cartItems");
    cartTotal = document.querySelector(".cartTotal");
    cartCount = document.querySelector(".cartCount");
}
/* =========================================================
   PRODUCT LIST
========================================================= */
function renderProducts() {
    if (!productsContainer) return;
    if (typeof products === "undefined") return;
    productsContainer.innerHTML = products.map(product => `
        <article
            class="product-card"
            onclick="openProduct(${product.id})">
            <div class="product-image">
                ${
                    product.badge
                    ? `<span class="badge">${product.badge}</span>`
                    : ""
                }
                ${
                    product.image
                    ? `
                    <img
                        src="${product.image}"
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
                        ${formatPrice(product.price)}
                    </div>
                    <button
                        type="button"
                        class="add-cart"
                        onclick="
                            event.stopPropagation();
                            addToCart(${product.id});
                        ">
                        افزودن به سبد
                    </button>
                </div>
            </div>
        </article>
    `).join("");
}
/* =========================================================
   OPEN PRODUCT
========================================================= */
function openProduct(id) {
    window.location.href =
        "product.html?id=" + id;
}
/* =========================================================
   TOAST NOTIFICATION
========================================================= */
function showCartNotification(message, type = "success") {
    let toast = document.querySelector(".cart-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.className = "cart-toast";
        document.body.appendChild(toast);
    }
    toast.classList.remove("show");
    toast.innerHTML = `
        <span class="cart-toast-icon">
            ${type === "remove" ? "−" : "✓"}
        </span>
        <span class="cart-toast-text">
            ${message}
        </span>
    `;
    /* force animation restart */
    void toast.offsetWidth;
    toast.classList.add("show");
    clearTimeout(window.cartToastTimer);
    window.cartToastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}
/* =========================================================
   ADD TO CART
========================================================= */
function addToCart(id) {
    if (typeof products === "undefined") return;
    const product =
        products.find(item => item.id === id);
    if (!product) return;
    const existing =
        cart.find(item => item.id === id);
    if (existing) {
        existing.quantity++;
        showCartNotification(
            `${product.name} به سبد اضافه شد`
        );
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image || "",
            quantity: 1
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
function changeQuantity(id, amount) {
    const item =
        cart.find(product => product.id === id);
    if (!item) return;
    const oldQuantity = item.quantity;
    item.quantity += amount;
    /* ADD */
    if (amount > 0) {
        showCartNotification(
            `تعداد ${item.name} افزایش یافت`
        );
    }
    /* REMOVE */
    if (amount < 0 && item.quantity > 0) {
        showCartNotification(
            `تعداد ${item.name} کاهش یافت`,
            "remove"
        );
    }
    /* DELETE */
    if (item.quantity <= 0) {
        cart =
            cart.filter(
                product => product.id !== id
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
        document.querySelectorAll(".cartCount");
    const quantity =
        cart.reduce(
            (sum, item) =>
                sum + Number(item.quantity || 0),
            0
        );
    headerCounts.forEach(counter => {
        counter.textContent =
            quantity.toLocaleString("fa-IR");
    });
}
/* =========================================================
   CALCULATE TOTAL
========================================================= */
function getCartTotal() {
    return cart.reduce(
        (sum, item) =>
            sum +
            Number(item.price || 0) *
            Number(item.quantity || 0),
        0
    );
}
/* =========================================================
   RENDER CART
========================================================= */
function renderCart() {
    updateHeaderCart();
    if (!cartItems || !cartTotal) return;
    if (cart.length === 0) {
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
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            ${
                item.image
                ? `
                <div class="cart-item-image">
                    <img
                        src="${item.image}"
                        alt="${item.name}">
                </div>
                `
                : ""
            }
            <div class="cart-item-info">
                <strong>
                    ${item.name}
                </strong>
                <span>
                    ${formatPrice(item.price)}
                </span>
            </div>
            <div class="qty-controls">
                <button
                    type="button"
                    onclick="changeQuantity(${item.id}, 1)"
                    aria-label="افزایش">
                    +
                </button>
                <span>
                    ${Number(item.quantity).toLocaleString("fa-IR")}
                </span>
                <button
                    type="button"
                    onclick="changeQuantity(${item.id}, -1)"
                    aria-label="کاهش">
                    −
                </button>
            </div>
        </div>
    `).join("");
    cartTotal.textContent =
        formatPrice(getCartTotal());
}
/* =========================================================
   BOTTOM CART
========================================================= */
function updateBottomCart() {
    if (!bottomCart) return;
    if (cart.length === 0) {
        bottomCart.classList.remove("active");
        return;
    }
    const quantity =
        cart.reduce(
            (sum, item) =>
                sum + Number(item.quantity || 0),
            0
        );
    const total =
        getCartTotal();
    if (bottomCartCount) {
        bottomCartCount.textContent =
            quantity.toLocaleString("fa-IR");
    }
    if (bottomCartTotal) {
        bottomCartTotal.textContent =
            Number(total).toLocaleString("fa-IR")
            + " تومان";
    }
    bottomCart.classList.add("active");
}
/* =========================================================
   OPEN CART
========================================================= */
function openCart() {
    createCartModal();
    if (!cartModal) return;
    renderCart();
    cartModal.classList.add("active");
    document.body.classList.add("cart-open");
}
/* =========================================================
   CLOSE CART
========================================================= */
function closeCart() {
    if (!cartModal) return;
    cartModal.classList.remove("active");
    document.body.classList.remove("cart-open");
}
/* =========================================================
   GO TO CHECKOUT / CART PAGE
========================================================= */
function goToCartPage() {
    if (cart.length === 0) {
        showCartNotification(
            "سبد خرید شما خالی است",
            "remove"
        );
        return;
    }
    window.location.href = "cart.html";
}
/* =========================================================
   CART EVENTS
========================================================= */
function setupCartEvents() {
    createCartModal();
    if (!cartModal) return;
    /* OPEN CART — ALL BUTTONS */
    document.querySelectorAll(".openCart").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            openCart();
        });
    });
    /* CLOSE */
    document.addEventListener("click", function (event) {
        const closeButton =
            event.target.closest(".closeCart");
        if (closeButton) {
            closeCart();
        }
    });
    /* CLICK OUTSIDE */
    cartModal.addEventListener("click", function (event) {
        if (event.target === cartModal) {
            closeCart();
        }
    });
    /* CHECKOUT */
    document.addEventListener("click", function (event) {
        const checkoutButton =
            event.target.closest(
                ".checkout, .bottom-cart-checkout"
            );
        if (!checkoutButton) return;
        event.preventDefault();
        goToCartPage();
    });
    /* ESC */
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeCart();
        }
    });
}
/* =========================================================
   SYNC CART BETWEEN PAGES / TABS
========================================================= */
window.addEventListener("storage", function (event) {
    if (event.key !== "navidTowelCart") return;
    try {
        cart =
            JSON.parse(event.newValue) || [];
    } catch {
        cart = [];
    }
    renderCart();
    updateBottomCart();
});
/* =========================================================
   MOBILE SIDE MENU
========================================================= */
function setupMobileMenu() {
    const menu =
        document.getElementById("mobileSideMenu");
    const overlay =
        document.getElementById("mobileMenuOverlay");
    const closeBtn =
        document.getElementById("mobileMenuClose");
    const openBtn =
        document.getElementById("mobileMenuButton") ||
        document.querySelector(".mobile-menu-button") ||
        document.querySelector(".mobile-menu-btn");
    const category =
        document.querySelector(".mobile-side-category");
    const categoryButton =
        document.getElementById("mobileCategoryButton");
    function openSideMenu() {
        if (!menu) return;
        menu.classList.add("active");
        if (overlay) {
            overlay.classList.add("active");
        }
        document.body.style.overflow = "hidden";
    }
    function closeSideMenu() {
        if (!menu) return;
        menu.classList.remove("active");
        if (overlay) {
            overlay.classList.remove("active");
        }
        document.body.style.overflow = "";
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
            if (event.key === "Escape") {
                closeSideMenu();
            }
        }
    );
    if (categoryButton && category) {
        categoryButton.addEventListener(
            "click",
            function () {
                category.classList.toggle("open");
            }
        );
    }
    if (menu) {
        menu.querySelectorAll("a").forEach(
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
        createCartModal();
        renderProducts();
        renderCart();
        updateBottomCart();
        setupCartEvents();
        setupMobileMenu();
    }
);