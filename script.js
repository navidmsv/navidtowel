let cart = JSON.parse(localStorage.getItem("navidTowelCart")) || [];

const productsContainer = document.querySelector(".products");
const cartCount = document.querySelector(".cartCount");

const cartModal = document.querySelector(".cartModal");
const cartItems = document.querySelector(".cartItems");
const cartTotal = document.querySelector(".cartTotal");

const bottomCart = document.getElementById("bottomCart");
const bottomCartCount = document.getElementById("bottomCartCount");
const bottomCartTotal = document.getElementById("bottomCartTotal");


/* تبدیل قیمت */

function formatPrice(price) {
    return Number(price).toLocaleString("fa-IR") + " تومان";
}


/* نمایش محصولات صفحه اصلی */

function renderProducts() {

    if (!productsContainer) return;

    productsContainer.innerHTML = products.map(product => `
        <article
            class="product-card"
            onclick="openProduct(${product.id})"
        >

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
                        style="width:100%;height:100%;object-fit:cover;"
                    >
                    `
                    : ""
                }

            </div>


            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="product-desc">
                    ${product.description || ""}
                </p>


                <div class="product-bottom">

                    <div class="price">
                        ${formatPrice(product.price)}
                    </div>


                    <button
                        class="add-cart"
                        onclick="
                            event.stopPropagation();
                            addToCart(${product.id});
                        "
                    >
                        افزودن به سبد
                    </button>

                </div>

            </div>

        </article>
    `).join("");
}


/* رفتن به صفحه محصول */

function openProduct(id) {

    window.location.href =
        "product.html?id=" + id;

}


/* اضافه کردن محصول */

function addToCart(id) {

    const product =
        products.find(item => item.id === id);

    if (!product) return;


    const existing =
        cart.find(item => item.id === id);


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

    updateBottomCart();

}


/* تغییر تعداد */

function changeQuantity(id, amount) {

    const item =
        cart.find(product => product.id === id);

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product => product.id !== id
            );

    }


    saveCart();

    renderCart();

    updateBottomCart();

}


/* ذخیره سبد */

function saveCart() {

    localStorage.setItem(
        "navidTowelCart",
        JSON.stringify(cart)
    );

}


/* آپدیت تعداد سبد بالای سایت */

function updateHeaderCart() {

    if (!cartCount) return;


    const quantity =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    cartCount.textContent =
        quantity.toLocaleString("fa-IR");

}


/* نمایش سبد قدیمی، اگر در صفحه وجود داشته باشد */

function renderCart() {

    updateHeaderCart();


    if (!cartItems || !cartTotal) {
        return;
    }


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                سبد خرید شما خالی است.
            </div>
        `;

        cartTotal.textContent =
            "۰ تومان";

        return;
    }


    cartItems.innerHTML =
        cart.map(item => `

            <div class="cart-item">

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
                        onclick="changeQuantity(${item.id}, 1)"
                    >
                        +
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${item.id}, -1)"
                    >
                        −
                    </button>

                </div>

            </div>

        `).join("");


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price *
                item.quantity,
            0
        );


    cartTotal.textContent =
        formatPrice(total);

}


/* نوار سبد خرید پایین */

function updateBottomCart() {

    if (!bottomCart) return;


    if (cart.length === 0) {

        bottomCart.classList.remove("active");

        return;
    }


    const quantity =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price *
                item.quantity,
            0
        );


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


/* باز کردن سبد قدیمی */

function openCart() {

    if (!cartModal) return;

    cartModal.classList.add("active");

    renderCart();

}


/* بستن سبد قدیمی */

function closeCart() {

    if (!cartModal) return;

    cartModal.classList.remove("active");

}


/* اجرای اولیه */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProducts();

        renderCart();

        updateBottomCart();


        const openCartButton =
            document.querySelector(".openCart");


        const closeCartButton =
            document.querySelector(".closeCart");


        if (openCartButton && cartModal) {

            openCartButton.addEventListener(
                "click",
                openCart
            );

        }


        if (closeCartButton) {

            closeCartButton.addEventListener(
                "click",
                closeCart
            );

        }


        if (cartModal) {

            cartModal.addEventListener(
                "click",
                event => {

                    if (
                        event.target === cartModal
                    ) {

                        closeCart();

                    }

                }
            );

        }


        /* تکمیل سفارش */

        const checkoutButton =
            document.querySelector(
                ".bottom-cart-checkout"
            );


        if (checkoutButton) {

            checkoutButton.addEventListener(
                "click",
                () => {

                    if (cart.length === 0) {

                        return;

                    }


                    alert(
                        "صفحه تکمیل سفارش در مرحله بعدی فعال می‌شود."
                    );

                }
            );

        }

    }
);