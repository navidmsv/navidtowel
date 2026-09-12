/* =========================================================
   NAVIDTOWEL — SHARED SITE COMPONENTS
   Header + Mobile Menu + Footer
========================================================= */

(function () {
    "use strict";

    /* =====================================================
       HTML — HEADER
    ===================================================== */

    const headerHTML = `
        <header class="header">
            <div class="container header-inner">

                <button
                    type="button"
                    class="mobile-menu-button"
                    id="mobileMenuButton"
                    aria-label="باز کردن منو">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <a href="index.html" class="logo">
                    Navid<span>Towel</span>
                </a>

                <nav class="nav">

                    <a href="index.html">
                        خانه
                    </a>

                    <a href="shop.html">
                        فروشگاه
                    </a>

                    <div class="nav-category">

                        <button
                            type="button"
                            class="nav-category-btn">
                            دسته‌بندی‌ها
                            <span>⌄</span>
                        </button>

                        <div class="category-dropdown">

                            <a href="shop.html?category=men">
                                حوله مردانه
                            </a>

                            <a href="shop.html?category=women">
                                حوله زنانه
                            </a>

                            <a href="shop.html?category=kids">
                                حوله بچگانه
                            </a>

                            <a href="shop.html?category=bath">
                                حوله حمامی
                            </a>

                            <a href="shop.html?category=pool">
                                حوله استخری
                            </a>

                            <a href="shop.html?category=meter">
                                حوله متری
                            </a>

                            <a href="shop.html?category=robe">
                                تن‌پوش
                            </a>

                        </div>

                    </div>

                    <a href="index.html#about">
                        درباره ما
                    </a>

                    <a href="index.html#contact">
                        تماس با ما
                    </a>

                </nav>

                <div class="header-actions">

                    <a
                        href="cart.html"
                        class="cart-btn">

                        🛒
                        <span>
                            سبد خرید
                        </span>

                        <b
                            class="cartCount"
                            id="headerCartCount">
                            ۰
                        </b>

                    </a>

                </div>

            </div>
        </header>
    `;


    /* =====================================================
       HTML — MOBILE SIDE MENU
    ===================================================== */

    const mobileMenuHTML = `
        <div
            class="mobile-menu-overlay"
            id="mobileMenuOverlay">
        </div>

        <aside
            class="mobile-side-menu"
            id="mobileSideMenu">

            <div class="mobile-side-header">

                <div class="mobile-side-brand">

                    <div class="mobile-side-logo">
                        N
                    </div>

                    <div>
                        <strong>
                            NavidTowel
                        </strong>

                        <span>
                            فروشگاه حوله و کالای خواب
                        </span>
                    </div>

                </div>

                <button
                    type="button"
                    class="mobile-side-close"
                    id="mobileMenuClose"
                    aria-label="بستن منو">
                    ×
                </button>

            </div>


            <nav class="mobile-side-links">

                <a
                    href="index.html"
                    class="mobile-side-link">

                    <span class="side-icon">
                        ⌂
                    </span>

                    <span>
                        صفحه اصلی
                    </span>

                </a>


                <div class="mobile-side-category">

                    <button
                        type="button"
                        class="mobile-side-link mobile-side-category-button"
                        id="mobileCategoryButton">

                        <span class="side-icon">
                            ☰
                        </span>

                        <span>
                            دسته‌بندی‌ها
                        </span>

                        <span
                            class="side-arrow"
                            id="mobileCategoryArrow">
                            ⌄
                        </span>

                    </button>


                    <div
                        class="mobile-side-category-list"
                        id="mobileCategoryList">

                        <a href="shop.html?category=men">
                            مردانه
                        </a>

                        <a href="shop.html?category=women">
                            زنانه
                        </a>

                        <a href="shop.html?category=kids">
                            بچگانه
                        </a>

                        <a href="shop.html?category=bath">
                            حمامی
                        </a>

                        <a href="shop.html?category=pool">
                            استخری
                        </a>

                        <a href="shop.html?category=meter">
                            متری
                        </a>

                        <a href="shop.html?category=robe">
                            تن‌پوش
                        </a>

                    </div>

                </div>


                <a
                    href="discount.html"
                    class="mobile-side-link mobile-side-discount">

                    <span class="side-icon">
                        %
                    </span>

                    <span>
                        تخفیفات
                    </span>

                    <span class="discount-badge">
                        ویژه
                    </span>

                </a>


                <a
                    href="tracking.html"
                    class="mobile-side-link">

                    <span class="side-icon">
                        ⌕
                    </span>

                    <span>
                        پیگیری سفارش
                    </span>

                </a>


                <a
                    href="index.html#about"
                    class="mobile-side-link">

                    <span class="side-icon">
                        i
                    </span>

                    <span>
                        درباره ما
                    </span>

                </a>


                <a
                    href="index.html#contact"
                    class="mobile-side-link">

                    <span class="side-icon">
                        ☏
                    </span>

                    <span>
                        تماس با ما
                    </span>

                </a>

            </nav>


            <div class="mobile-side-bottom">

                <a
                    href="shop.html"
                    class="mobile-bottom-button">

                    <span>
                        ▦
                    </span>

                    <small>
                        همه محصولات
                    </small>

                </a>


                <a
                    href="cart.html"
                    class="mobile-bottom-button">

                    <span>
                        🛒
                    </span>

                    <small>
                        سبد خرید
                    </small>

                </a>


                <a
                    href="https://instagram.com/navidtowel"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mobile-bottom-button">

                    <span>
                        ◎
                    </span>

                    <small>
                        اینستاگرام
                    </small>

                </a>

            </div>

        </aside>
    `;


    /* =====================================================
       HTML — FOOTER
    ===================================================== */

    const footerHTML = `
        <footer
            class="footer"
            id="contact">

            <div class="container">

                <div class="footer-grid">

                    <div class="footer-brand">

                        <a
                            href="index.html"
                            class="logo">

                            Navid<span>Towel</span>

                        </a>

                        <p>
                            حوله‌های باکیفیت برای زندگی روزمره.
                        </p>

                    </div>


                    <div>

                        <h3>
                            فروشگاه
                        </h3>

                        <a href="shop.html">
                            همه محصولات
                        </a>

                        <a href="index.html#categories">
                            دسته‌بندی‌ها
                        </a>

                        <a href="index.html#shop">
                            محصولات منتخب
                        </a>

                    </div>


                    <div>

                        <h3>
                            راهنما
                        </h3>

                        <a href="index.html#about">
                            درباره ما
                        </a>

                        <a href="#">
                            قوانین و مقررات
                        </a>

                        <a href="#">
                            روش‌های ارسال
                        </a>

                    </div>


                    <div>

                        <h3>
                            تماس
                        </h3>

                        <p>
                            تلفن: 09121234567
                        </p>

                        <p>
                            Instagram: @navidtowel
                        </p>

                    </div>

                </div>


                <div class="footer-bottom">

                    <span>
                        © 2026 NavidTowel
                    </span>

                    <span>
                        تمامی حقوق محفوظ است.
                    </span>

                </div>

            </div>

        </footer>
    `;


    /* =====================================================
       REMOVE OLD COMPONENTS
    ===================================================== */

    function removeOldComponents() {

        const selectors = [
            "body > header",
            "body > .shop-header",
            "body > .mobile-header",

            "body > .mobile-menu-overlay",
            "body > .mobile-side-menu",
            "body > .menu-overlay",
            "body > .mobile-menu",

            "body > footer"
        ];

        selectors.forEach(selector => {

            document
                .querySelectorAll(selector)
                .forEach(element => {
                    element.remove();
                });

        });

    }


    /* =====================================================
       INSERT COMPONENTS
    ===================================================== */

    function insertComponents() {

        removeOldComponents();

        document.body.classList.add("home-page");

        /*
         * HEADER
         */

        document.body.insertAdjacentHTML(
            "afterbegin",
            headerHTML + mobileMenuHTML
        );


        /*
         * FOOTER
         */

        const firstScript =
            document.body.querySelector(
                "script"
            );

        if (firstScript) {

            firstScript.insertAdjacentHTML(
                "beforebegin",
                footerHTML
            );

        } else {

            document.body.insertAdjacentHTML(
                "beforeend",
                footerHTML
            );

        }

    }


    /* =====================================================
       CART COUNT
    ===================================================== */

    function updateCartCount() {

        let cart = [];

        try {

            cart =
                JSON.parse(
                    localStorage.getItem(
                        "navidTowelCart"
                    )
                ) || [];

        } catch (error) {

            cart = [];

        }


        const quantity =
            cart.reduce(
                (total, item) => {

                    return total +
                        Number(
                            item.quantity
                        );

                },
                0
            );


        document
            .querySelectorAll(
                ".cartCount, #headerCartCount"
            )
            .forEach(element => {

                element.textContent =
                    Number(quantity)
                        .toLocaleString("fa-IR");

            });

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function setupMobileMenu() {

        const button =
            document.getElementById(
                "mobileMenuButton"
            );

        const menu =
            document.getElementById(
                "mobileSideMenu"
            );

        const overlay =
            document.getElementById(
                "mobileMenuOverlay"
            );

        const close =
            document.getElementById(
                "mobileMenuClose"
            );

        const categoryButton =
            document.getElementById(
                "mobileCategoryButton"
            );

        const categoryList =
            document.getElementById(
                "mobileCategoryList"
            );


        function openMenu(event) {

            if (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }

            menu?.classList.add("active");
            overlay?.classList.add("active");

            document.body.classList.add(
                "menu-open"
            );

            document.body.style.overflow =
                "hidden";
        }


        function closeMenu(event) {

            if (event) {
                event.stopImmediatePropagation();
            }

            menu?.classList.remove("active");
            overlay?.classList.remove("active");

            document.body.classList.remove(
                "menu-open"
            );

            document.body.style.overflow =
                "";
        }


        button?.addEventListener(
            "click",
            openMenu,
            true
        );


        close?.addEventListener(
            "click",
            closeMenu,
            true
        );


        overlay?.addEventListener(
            "click",
            closeMenu,
            true
        );


        categoryButton?.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopImmediatePropagation();

                categoryButton.classList.toggle(
                    "active"
                );

                categoryList?.classList.toggle(
                    "active"
                );

            },
            true
        );


        menu
            ?.querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    closeMenu,
                    true
                );

            });


        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {
                    closeMenu();
                }

            }
        );

    }


    /* =====================================================
       RUN
    ===================================================== */

    function init() {

        if (!document.body) {
            return;
        }

        insertComponents();

        setupMobileMenu();

        updateCartCount();

    }


    /*
     * اجرا قبل از اسکریپت‌های قدیمی صفحه
     */

    init();


    /*
     * اگر سبد در یک تب دیگر تغییر کرد
     */

    window.addEventListener(
        "storage",
        function (event) {

            if (
                event.key ===
                "navidTowelCart"
            ) {

                updateCartCount();

            }

        }
    );


    /*
     * امکان آپدیت دستی از سایر اسکریپت‌ها
     */

    window.updateNavidTowelCartCount =
        updateCartCount;

})();