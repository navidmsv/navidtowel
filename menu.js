/* =========================================================
   NAVIDTOWEL — SHARED HEADER + MOBILE MENU
========================================================= */

(function () {
    "use strict";

    function createMenu() {
        const mount = document.getElementById("siteMenu");
        if (!mount) return;

        mount.innerHTML = `
            <!-- HEADER -->
            <header class="header">

                <div class="container header-inner">

                    <!-- MOBILE MENU BUTTON -->
                    <button
                        type="button"
                        class="mobile-menu-button"
                        id="mobileMenuButton"
                        aria-label="باز کردن منو">

                        <span></span>
                        <span></span>
                        <span></span>

                    </button>


                    <!-- LOGO -->
                    <a href="index.html" class="logo">
                        Navid<span>Towel</span>
                    </a>


                    <!-- DESKTOP NAV -->
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


                    <!-- CART -->
                    <div class="header-actions">

                        <button
                            type="button"
                            class="cart-btn openCart">

                            🛒

                            <span>
                                سبد خرید
                            </span>

                            <b class="cartCount">
                                ۰
                            </b>

                        </button>

                    </div>

                </div>

            </header>


            <!-- MOBILE OVERLAY -->
            <div
                class="mobile-menu-overlay"
                id="mobileMenuOverlay">
            </div>


            <!-- MOBILE SIDE MENU -->
            <aside
                class="mobile-side-menu"
                id="mobileSideMenu">


                <!-- MENU HEADER -->
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


                <!-- MENU LINKS -->
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


                    <!-- CATEGORIES -->
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
                                <span>مردانه</span>
                            </a>

                            <a href="shop.html?category=women">
                                <span>زنانه</span>
                            </a>

                            <a href="shop.html?category=kids">
                                <span>بچگانه</span>
                            </a>

                            <a href="shop.html?category=bath">
                                <span>حمامی</span>
                            </a>

                            <a href="shop.html?category=pool">
                                <span>استخری</span>
                            </a>

                            <a href="shop.html?category=meter">
                                <span>متری</span>
                            </a>

                            <a href="shop.html?category=robe">
                                <span>تن‌پوش</span>
                            </a>

                        </div>

                    </div>


                    <!-- DISCOUNTS -->
                    <a
                        href="discount.html"
                        class="mobile-side-link mobile-side-discount">

                        <span class="side-icon">
                            %
                        </span>

                        <span>
                            تخفیفات ویژه
                        </span>

                        <span class="discount-badge">
                            ویژه
                        </span>

                    </a>


                    <!-- TRACKING -->
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


                    <!-- ABOUT -->
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


                    <!-- CONTACT -->
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


                <!-- MENU BOTTOM -->
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


                    <button
                        type="button"
                        class="mobile-bottom-button openCart">

                        <span>
                            🛒
                        </span>

                        <small>
                            سبد خرید
                        </small>

                        <b class="mobile-bottom-cart-count cartCount">
                            ۰
                        </b>

                    </button>


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

        setupMenu();
    }


    function setupMenu() {

        const menu =
            document.getElementById("mobileSideMenu");

        const overlay =
            document.getElementById("mobileMenuOverlay");

        const openButton =
            document.getElementById("mobileMenuButton");

        const closeButton =
            document.getElementById("mobileMenuClose");

        const categoryButton =
            document.getElementById("mobileCategoryButton");

        const category =
            document.querySelector(".mobile-side-category");

        const desktopCategory =
            document.querySelector(".nav-category");

        const desktopCategoryButton =
            document.querySelector(".nav-category-btn");


        /* ================================================
           OPEN MOBILE MENU
        ================================================ */

        function openMenu() {

            if (!menu) return;

            menu.classList.add("active");

            if (overlay) {
                overlay.classList.add("active");
            }

            document.body.classList.add("menu-open");
            document.documentElement.classList.add("menu-open");

            document.body.style.overflow = "hidden";
        }


        /* ================================================
           CLOSE MOBILE MENU
        ================================================ */

        function closeMenu() {

            if (!menu) return;

            menu.classList.remove("active");

            if (overlay) {
                overlay.classList.remove("active");
            }

            document.body.classList.remove("menu-open");
            document.documentElement.classList.remove("menu-open");

            document.body.style.overflow = "";

            if (category) {
                category.classList.remove("open");
            }

            const arrow =
                document.getElementById(
                    "mobileCategoryArrow"
                );

            if (arrow) {
                arrow.classList.remove("open");
            }
        }


        /* ================================================
           MOBILE OPEN BUTTON
        ================================================ */

        if (openButton) {

            openButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    openMenu();

                }
            );

        }


        /* ================================================
           CLOSE BUTTON
        ================================================ */

        if (closeButton) {

            closeButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    closeMenu();

                }
            );

        }


        /* ================================================
           OVERLAY
        ================================================ */

        if (overlay) {

            overlay.addEventListener(
                "click",
                function () {

                    closeMenu();

                }
            );

        }


        /* ================================================
           ESC
        ================================================ */

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {
                    closeMenu();
                }

            }
        );


        /* ================================================
           MOBILE CATEGORIES
        ================================================ */

        if (
            categoryButton &&
            category
        ) {

            categoryButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    const isOpen =
                        category.classList.toggle("open");

                    const arrow =
                        document.getElementById(
                            "mobileCategoryArrow"
                        );

                    if (arrow) {

                        arrow.classList.toggle(
                            "open",
                            isOpen
                        );

                    }

                }
            );

        }


        /* ================================================
           MOBILE LINKS
        ================================================ */

        if (menu) {

            menu.querySelectorAll(
                "a:not(.mobile-side-category-list a)"
            ).forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {
                        closeMenu();
                    }
                );

            });


            menu.querySelectorAll(
                ".mobile-side-category-list a"
            ).forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {
                        closeMenu();
                    }
                );

            });

        }


        /* ================================================
           DESKTOP CATEGORY
        ================================================ */

        if (
            desktopCategoryButton &&
            desktopCategory
        ) {

            desktopCategoryButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    desktopCategory.classList.toggle(
                        "open"
                    );

                }
            );


            document.addEventListener(
                "click",
                function (event) {

                    if (
                        !desktopCategory.contains(
                            event.target
                        )
                    ) {

                        desktopCategory.classList.remove(
                            "open"
                        );

                    }

                }
            );

        }

    }


    /* =====================================================
       START
    ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            createMenu
        );

    } else {

        createMenu();

    }

})();