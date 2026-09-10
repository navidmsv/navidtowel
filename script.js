const products = [
    {
        id: 1,
        name: "حوله حمام کلاسیک",
        description: "نرم، ضخیم و مناسب استفاده روزمره",
        price: 890000,
        badge: "پرفروش"
    },
    {
        id: 2,
        name: "حوله دست و صورت",
        description: "لطیف و سبک برای استفاده روزانه",
        price: 390000,
        badge: "جدید"
    },
    {
        id: 3,
        name: "حوله استخری",
        description: "جذب آب بالا و مناسب استخر و سفر",
        price: 690000,
        badge: "محبوب"
    },
    {
        id: 4,
        name: "ست حوله دو نفره",
        description: "ست کامل و شیک برای دو نفر",
        price: 1490000,
        badge: "ویژه"
    }
];

let cart = JSON.parse(localStorage.getItem("navidTowelCart")) || [];

const productsContainer = document.querySelector(".products");
const cartCount = document.querySelector(".cartCount");
const cartModal = document.querySelector(".cartModal");
const cartItems = document.querySelector(".cartItems");
const cartTotal = document.querySelector(".cartTotal");

function formatPrice(price) {
    return price.toLocaleString("fa-IR") + " تومان";
}

function renderProducts() {
    if (!productsContainer) return;

    productsContainer.innerHTML = products.map(product => `
        <article class="product-card">
            <div class="product-image">
                <span class="badge">${product.badge}</span>
            </div>

            <div class="product-info">
                <h3>${product.name}</h3>

                <p class="product-desc">
                    ${product.description}
                </p>

                <div class="product-bottom">
                    <div class="price">
                        ${formatPrice(product.price)}
                    </div>

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                    >
                        افزودن به سبد
                    </button>
                </div>
            </div>
        </article>
    `).join("");
}

function addToCart(id) {
    const product = products.find(item => item.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    saveCart();
    renderCart();

    if (cartModal) {
        cartModal.classList.add("active");
    }
}

function changeQuantity(id, amount) {
    const item = cart.find(product => product.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== id);
    }

    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem(
        "navidTowelCart",
        JSON.stringify(cart)
    );
}

function renderCart() {
    if (!cartItems || !cartCount || !cartTotal) return;

    const totalQuantity = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    cartCount.textContent = totalQuantity;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                سبد خرید شما خالی است.
            </div>
        `;

        cartTotal.textContent = "۰ تومان";
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">

            <div class="cart-item-info">
                <strong>${item.name}</strong>
                <span>${formatPrice(item.price)}</span>
            </div>

            <div class="qty-controls">
                <button onclick="changeQuantity(${item.id}, 1)">
                    +
                </button>

                <span>${item.quantity}</span>

                <button onclick="changeQuantity(${item.id}, -1)">
                    −
                </button>
            </div>

        </div>
    `).join("");

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    cartTotal.textContent = formatPrice(total);
}

function openCart() {
    if (cartModal) {
        cartModal.classList.add("active");
    }

    renderCart();
}

function closeCart() {
    if (cartModal) {
        cartModal.classList.remove("active");
    }
}

document.addEventListener("DOMContentLoaded", () => {

    renderProducts();
    renderCart();

    const openCartButton = document.querySelector(".openCart");
    const closeCartButton = document.querySelector(".closeCart");
    const checkoutButton = document.querySelector(".checkout");

    if (openCartButton) {
        openCartButton.addEventListener("click", openCart);
    }

    if (closeCartButton) {
        closeCartButton.addEventListener("click", closeCart);
    }

    if (cartModal) {
        cartModal.addEventListener("click", (event) => {
            if (event.target === cartModal) {
                closeCart();
            }
        });
    }

    if (checkoutButton) {
        checkoutButton.addEventListener("click", () => {

            if (cart.length === 0) {
                alert("سبد خرید شما خالی است.");
                return;
            }

            alert(
                "ثبت سفارش در مرحله بعدی سایت فعال می‌شود."
            );
        });
    }
});
