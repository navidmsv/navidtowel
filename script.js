let cart = JSON.parse(localStorage.getItem("navidTowelCart")) || [];

const productsContainer = document.querySelector(".products");
const cartCount = document.querySelector(".cartCount");
const cartModal = document.querySelector(".cartModal");
const cartItems = document.querySelector(".cartItems");
const cartTotal = document.querySelector(".cartTotal");


function formatPrice(price) {
    return Number(price).toLocaleString("fa-IR") + " تومان";
}


/* نمایش محصولات */

function renderProducts() {

    if (!productsContainer) return;

    productsContainer.innerHTML = products.map(product => `

        <article
            class="product-card"
            onclick="openProduct(${product.id})"
        >

            <div class="product-image">

                <span class="badge">
                    ${product.badge || ""}
                </span>

                ${
                    product.image
                    ? `<img
                        src="${product.image}"
                        alt="${product.name}"
                        style="width:100%;height:100%;object-fit:cover;"
                    >`
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
                        class="add-cart"
                        onclick="event.stopPropagation(); addToCart(${product.id})"
                    >
                        افزودن به سبد
                    </button>

                </div>

            </div>

        </article>

    `).join("");
}


/* باز کردن صفحه اختصاصی محصول */

function openProduct(id) {

    window.location.href =
        "product.html?id=" + id;

}


/* اضافه کردن محصول به سبد */

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


    if (cartModal) {

        cartModal.classList.add("active");

    }

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

}


/* ذخیره سبد */

function saveCart() {

    localStorage.setItem(
        "navidTowelCart",
        JSON.stringify(cart)
    );

}


/* نمایش سبد */

function renderCart() {

    if (
        !cartItems ||
        !cartCount ||
        !cartTotal
    ) return;


    const totalQuantity =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    cartCount.textContent =
        totalQuantity;


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
if (typeof updateBottomCart === "function") {
    updateBottomCart();
}

/* باز کردن سبد */

function openCart() {

    if (cartModal) {

        cartModal.classList.add("active");

    }

    renderCart();

}


/* بستن سبد */

function closeCart() {

    if (cartModal) {

        cartModal.classList.remove("active");

    }

}


/* اجرای اولیه */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProducts();

        renderCart();


        const openCartButton =
            document.querySelector(
                ".openCart"
            );


        const closeCartButton =
            document.querySelector(
                ".closeCart"
            );


        const checkoutButton =
            document.querySelector(
                ".checkout"
            );


        if (openCartButton) {

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
                (event) => {

                    if (
                        event.target === cartModal
                    ) {

                        closeCart();

                    }

                }
            );

        }


        if (checkoutButton) {

            checkoutButton.addEventListener(
                "click",
                () => {

                    if (cart.length === 0) {

                        alert(
                            "سبد خرید شما خالی است."
                        );

                        return;

                    }


                    alert(
                        "ثبت سفارش در مرحله بعدی سایت فعال می‌شود."
                    );

                }
            );

        }

    }
);
