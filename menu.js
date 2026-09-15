/* =========================================================
   NAVIDTOWEL — SHARED HEADER + MOBILE MENU
   FINAL COMPACT / LUXURY VERSION
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

                <!-- MOBILE MENU -->
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
                <!-- عمداً openCart باقی مانده -->
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
            class="mobile-side-menu navid-compact-menu"
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


            <!-- =================================================
                 TOP 3 BUTTONS
            ================================================= -->

            <div class="navid-top-buttons">

                <a
                    href="index.html"
                    class="navid-mini-button">

                    <span>⌂</span>
                    <small>خانه</small>

                </a>


                <a
                    href="shop.html"
                    class="navid-mini-button">

                    <span>◈</span>
                    <small>محصولات</small>

                </a>


                <button
                    type="button"
                    class="navid-mini-button openCart">

                    <span>🛒</span>
                    <small>سبد خرید</small>

                    <b class="cartCount">
                        ۰
                    </b>

                </button>

            </div>


            <!-- =================================================
                 MAIN LINKS
            ================================================= -->

            <nav class="mobile-side-links">


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


                <!-- DISCOUNT -->

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

            </nav>


            <!-- =================================================
                 BOTTOM 3 BUTTONS
            ================================================= -->

            <div class="navid-bottom-buttons">


                <!-- CONTACT -->

                <a
                    href="index.html#contact"
                    class="navid-mini-button">

                    <span>☏</span>
                    <small>تماس</small>

                </a>


                <!-- INSTAGRAM -->

                <a
                    href="https://instagram.com/navidtowel"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="navid-mini-button">

                    <span>◎</span>
                    <small>اینستاگرام</small>

                </a>


                <!-- TELEGRAM -->

                <a
                    href="https://t.me/navidtowel"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="navid-mini-button">

                    <span>➤</span>
                    <small>تلگرام</small>

                </a>

            </div>

        </aside>


        <!-- =================================================
             COMPACT LUXURY STYLE
        ================================================= -->

        <style>

        /* ---------- HEADER CART ---------- */

        .header-actions .cart-btn {

            position: relative;

            display: flex;
            align-items: center;
            gap: 8px;

            border: 0;

            cursor: pointer;

            transition: .22s ease;

        }

        .header-actions .cart-btn:hover {

            transform: translateY(-2px);

        }


        /* ---------- MOBILE MENU ---------- */

        @media (max-width: 800px) {

            .navid-compact-menu {

                width: min(82vw, 330px) !important;

                background:
                    linear-gradient(
                        160deg,
                        rgba(255,254,250,.98),
                        rgba(245,245,238,.97)
                    ) !important;

                border-left:
                    1px solid rgba(255,255,255,.95);

                box-shadow:
                    -15px 0 40px rgba(25,40,29,.15);

                backdrop-filter:
                    blur(25px)
                    saturate(140%);

                -webkit-backdrop-filter:
                    blur(25px)
                    saturate(140%);

            }


            /* HEADER */

            .navid-compact-menu .mobile-side-header {

                padding:
                    17px 15px !important;

            }


            .navid-compact-menu
            .mobile-side-logo {

                width:
                    42px !important;

                height:
                    42px !important;

                border-radius:
                    13px !important;

                font-size:
                    18px;

            }


            .navid-compact-menu
            .mobile-side-brand strong {

                font-size:
                    15px;

            }


            .navid-compact-menu
            .mobile-side-brand span {

                font-size:
                    9px;

            }


            /* TOP BUTTONS */

            .navid-top-buttons {

                display:
                    grid;

                grid-template-columns:
                    repeat(3, 1fr);

                gap:
                    6px;

                padding:
                    10px 12px 7px;

            }


            .navid-mini-button {

                position:
                    relative;

                min-width:
                    0;

                height:
                    55px;

                border:
                    1px solid rgba(52,69,47,.07);

                border-radius:
                    14px;

                background:
                    rgba(255,255,255,.72);

                color:
                    #34452f;

                display:
                    flex;

                flex-direction:
                    column;

                align-items:
                    center;

                justify-content:
                    center;

                gap:
                    3px;

                text-decoration:
                    none;

                cursor:
                    pointer;

                transition:
                    .2s ease;

            }


            .navid-mini-button span {

                font-size:
                    17px;

                line-height:
                    18px;

            }


            .navid-mini-button small {

                font-size:
                    9px;

                font-weight:
                    700;

                white-space:
                    nowrap;

            }


            .navid-mini-button:hover {

                background:
                    rgba(52,69,47,.08);

                transform:
                    translateY(-1px);

            }


            /* CART TOP */

            .navid-top-buttons
            .openCart {

                background:
                    #34452f;

                color:
                    #fff;

                border-color:
                    #34452f;

                box-shadow:
                    0 6px 15px rgba(52,69,47,.17);

            }


            .navid-top-buttons
            .openCart:hover {

                background:
                    #2d3c29;

            }


            .navid-top-buttons
            .cartCount {

                position:
                    absolute;

                top:
                    4px;

                left:
                    5px;

                min-width:
                    17px;

                height:
                    17px;

                padding:
                    0 3px;

                border-radius:
                    50%;

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    center;

                background:
                    #fff;

                color:
                    #34452f;

                font-size:
                    9px;

                font-weight:
                    800;

            }


            /* MAIN LINKS */

            .navid-compact-menu
            .mobile-side-links {

                padding:
                    5px 11px 8px !important;

            }


            .navid-compact-menu
            .mobile-side-link {

                min-height:
                    45px !important;

                margin:
                    3px 0 !important;

                padding:
                    7px 9px !important;

                border-radius:
                    13px !important;

            }


            .navid-compact-menu
            .mobile-side-link
            .side-icon {

                width:
                    32px;

                height:
                    32px;

                border-radius:
                    10px;

                display:
                    inline-flex;

                align-items:
                    center;

                justify-content:
                    center;

                background:
                    rgba(52,69,47,.07);

                color:
                    #34452f;

                font-size:
                    14px;

            }


            .navid-compact-menu
            .mobile-side-link:hover {

                background:
                    rgba(52,69,47,.07) !important;

            }


            /* CATEGORY */

            .navid-compact-menu
            .mobile-side-category-list {

                margin:
                    0 4px 5px;

                border-radius:
                    12px;

                background:
                    rgba(52,69,47,.035);

                overflow:
                    hidden;

            }


            .navid-compact-menu
            .mobile-side-category-list a {

                min-height:
                    34px;

                padding:
                    7px 14px !important;

                font-size:
                    12px;

                border-bottom:
                    1px solid rgba(52,69,47,.05);

            }


            /* DISCOUNT */

            .navid-compact-menu
            .discount-badge {

                margin-right:
                    auto;

                padding:
                    3px 7px;

                border-radius:
                    20px;

                background:
                    #34452f;

                color:
                    #fff;

                font-size:
                    8px;

                font-weight:
                    800;

            }


            /* BOTTOM BUTTONS */

            .navid-bottom-buttons {

                display:
                    grid;

                grid-template-columns:
                    repeat(3, 1fr);

                gap:
                    6px;

                margin:
                    auto 12px 12px;

                padding:
                    7px;

                border:
                    1px solid rgba(255,255,255,.9);

                border-radius:
                    17px;

                background:
                    rgba(255,255,255,.65);

                box-shadow:
                    0 8px 22px rgba(30,50,38,.08);

            }


            .navid-bottom-buttons
            .navid-mini-button {

                height:
                    48px;

                border:
                    0;

                background:
                    transparent;

            }


            .navid-bottom-buttons
            .navid-mini-button span {

                font-size:
                    16px;

            }


            .navid-bottom-buttons
            .navid-mini-button small {

                font-size:
                    8px;

            }

        }

        </style>
        `;

        setupMenu();
        updateCartCount();
    }


    /* =====================================================
       MENU LOGIC
    ===================================================== */

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
                document.getElementById("mobileCategoryArrow");

            if (arrow) {
                arrow.classList.remove("open");
            }
        }


        /* MOBILE OPEN */

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


        /* CLOSE */

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


        /* OVERLAY */

        if (overlay) {
            overlay.addEventListener(
                "click",
                closeMenu
            );
        }


        /* ESC */

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {
                    closeMenu();
                }

            }
        );


        /* MOBILE CATEGORY */

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


        /* MOBILE LINKS */

        if (menu) {

            menu.querySelectorAll("a").forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {
                            closeMenu();
                        }
                    );

                }
            );

        }


        /* DESKTOP CATEGORY */

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


        let count = 0;

        cart.forEach(function (item) {

            count +=
                Number(item.quantity || item.qty || 1);

        });


        document
            .querySelectorAll(".cartCount")
            .forEach(function (element) {

                element.textContent =
                    count.toLocaleString("fa-IR");

            });

    }


    /* STORAGE */

    window.addEventListener(
        "storage",
        function (event) {

            if (
                event.key === "navidTowelCart"
            ) {

                updateCartCount();

            }

        }
    );


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