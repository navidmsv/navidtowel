/* =========================================================
   NAVIDTOWEL — SHARED LUXURY HEADER + MOBILE MENU
   نسخه کامل
========================================================= */
(function () {
    "use strict";
    /* =====================================================
       CREATE MENU
    ===================================================== */
    function createMenu() {
        const mount = document.getElementById("siteMenu");
        if (!mount) return;
        mount.innerHTML = `
        <!-- =================================================
             DESKTOP / MOBILE HEADER
        ================================================= -->
        <header class="header navid-luxury-header">
            <div class="container header-inner">
                <!-- MOBILE MENU -->
                <button
                    type="button"
                    class="mobile-menu-button navid-menu-button"
                    id="mobileMenuButton"
                    aria-label="باز کردن منو">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <!-- LOGO -->
                <a
                    href="index.html"
                    class="logo navid-logo">
                    Navid<span>Towel</span>
                </a>
                <!-- DESKTOP NAV -->
                <nav class="nav navid-main-nav">
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
                            <span>
                                دسته‌بندی‌ها
                            </span>
                            <span class="nav-category-arrow">
                               ⌄
                            </span>
                        </button>
                        <div class="category-dropdown">
                            <a href="shop.html?category=men">
                                <span>حوله مردانه</span>
                            </a>
                            <a href="shop.html?category=women">
                                <span>حوله زنانه</span>
                            </a>
                            <a href="shop.html?category=kids">
                                <span>حوله بچگانه</span>
                            </a>
                            <a href="shop.html?category=bath">
                                <span>حوله حمامی</span>
                            </a>
                            <a href="shop.html?category=pool">
                                <span>حوله استخری</span>
                            </a>
                            <a href="shop.html?category=meter">
                                <span>حوله متری</span>
                            </a>
                            <a href="shop.html?category=robe">
                                <span>تن‌پوش</span>
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
                    <a
                        href="cart.html"
                        class="cart-btn navid-cart-button">
                        <span class="navid-cart-icon">
                            🛒
                        </span>
                        <span class="navid-cart-label">
                            سبد خرید
                        </span>
                        <b class="cartCount">
                            ۰
                        </b>
                    </a>
                </div>
            </div>
        </header>
        <!-- =================================================
             MOBILE OVERLAY
        ================================================= -->
        <div
            class="mobile-menu-overlay navid-menu-overlay"
            id="mobileMenuOverlay">
        </div>
        <!-- =================================================
             MOBILE SIDE MENU
        ================================================= -->
        <aside
            class="mobile-side-menu navid-mobile-menu"
            id="mobileSideMenu">
            <!-- MENU TOP -->
            <div class="mobile-side-header navid-mobile-header">
                <div class="mobile-side-brand">
                    <div class="mobile-side-logo navid-mobile-logo">
                        N
                    </div>
                    <div class="navid-mobile-brand-text">
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
                    class="mobile-side-close navid-close-button"
                    id="mobileMenuClose"
                    aria-label="بستن منو">
                    ×
                </button>
            </div>
            <!-- MENU LINKS -->
            <nav class="mobile-side-links navid-mobile-links">
                <!-- HOME -->
                <a
                    href="index.html"
                    class="mobile-side-link navid-mobile-link">
                    <span class="side-icon">
                        ⌂
                    </span>
                    <span>
                        صفحه اصلی
                    </span>
                </a>
                <!-- SHOP -->
                <a
                    href="shop.html"
                    class="mobile-side-link navid-mobile-link">
                    <span class="side-icon">
                        ◈
                    </span>
                    <span>
                        فروشگاه
                    </span>
                </a>
                <!-- CATEGORIES -->
                <div class="mobile-side-category">
                    <button
                        type="button"
                        class="mobile-side-link mobile-side-category-button navid-mobile-link"
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
                <!-- DISCOUNT -->
                <a
                    href="discount.html"
                    class="mobile-side-link navid-mobile-link navid-discount-link">
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
                    class="mobile-side-link navid-mobile-link">
                    <span class="side-icon">
                        ◉
                    </span>
                    <span>
                        پیگیری سفارش
                    </span>
                </a>
                <!-- ABOUT -->
                <a
                    href="index.html#about"
                    class="mobile-side-link navid-mobile-link">
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
                    class="mobile-side-link navid-mobile-link">
                    <span class="side-icon">
                        ☏
                    </span>
                    <span>
                        تماس با ما
                    </span>
                </a>
            </nav>
            <!-- =================================================
                 MOBILE BOTTOM
            ================================================= -->
            <div class="mobile-side-bottom navid-mobile-bottom">
                <a
                    href="shop.html"
                    class="mobile-bottom-button navid-bottom-button">
                    <span>
                        ◈
                    </span>
                    <small>
                        محصولات
                    </small>
                </a>
                <a
                    href="cart.html"
                    class="mobile-bottom-button navid-bottom-button navid-bottom-cart">
                    <span>
                        🛒
                    </span>
                    <small>
                        سبد خرید
                    </small>
                    <b class="mobile-bottom-cart-count cartCount">
                        ۰
                    </b>
                </a>
                <a
                    href="https://instagram.com/navidtowel"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mobile-bottom-button navid-bottom-button">
                    <span>
                        ◎
                    </span>
                    <small>
                        اینستاگرام
                    </small>
                </a>
            </div>
        </aside>
        <!-- =================================================
             LUXURY MENU STYLE
        ================================================= -->
        <style>
        /* =====================================================
           HEADER
        ===================================================== */
        .navid-luxury-header {
            background:
                linear-gradient(
                    180deg,
                    rgba(255,255,255,.88),
                    rgba(250,248,242,.72)
                ) !important;
            backdrop-filter:
                blur(24px)
                saturate(150%) !important;
            -webkit-backdrop-filter:
                blur(24px)
                saturate(150%) !important;
            border-bottom:
                1px solid rgba(255,255,255,.85) !important;
            box-shadow:
                0 10px 35px rgba(39,56,43,.08),
                inset 0 1px 0 rgba(255,255,255,.95) !important;
        }
        /* =====================================================
           LOGO
        ===================================================== */
        .navid-logo {
            letter-spacing:
                -.7px;
            font-weight:
                800 !important;
            transition:
                .25s ease;
        }
        .navid-logo:hover {
            transform:
                translateY(-1px);
        }
        .navid-logo span {
            background:
                linear-gradient(
                    135deg,
                    #64765d,
                    #34452f
                );
            -webkit-background-clip:
                text;
            background-clip:
                text;
            color:
                transparent;
        }
        /* =====================================================
           DESKTOP NAV
        ===================================================== */
        .navid-main-nav {
            gap:
                8px !important;
        }
        .navid-main-nav > a,
        .navid-main-nav .nav-category-btn {
            position:
                relative;
            border:
                0;
            background:
                transparent;
            color:
                #263228;
            font-weight:
                600;
            padding:
                10px 14px;
            border-radius:
                13px;
            transition:
                .25s ease;
            cursor:
                pointer;
        }
        .navid-main-nav > a::after,
        .navid-main-nav .nav-category-btn::after {
            content:
                "";
            position:
                absolute;
            left:
                14px;
            right:
                14px;
            bottom:
                4px;
            height:
                2px;
            border-radius:
                20px;
            background:
                #52664c;
            transform:
                scaleX(0);
            transform-origin:
                center;
            transition:
                .25s ease;
        }
        .navid-main-nav > a:hover,
        .navid-main-nav .nav-category-btn:hover {
            background:
                rgba(82,102,76,.08);
            color:
                #34452f;
        }
        .navid-main-nav > a:hover::after,
        .navid-main-nav .nav-category-btn:hover::after {
            transform:
                scaleX(1);
        }
        .nav-category-arrow {
            display:
                inline-block;
            margin-right:
                5px;
            transition:
                transform .25s ease;
        }
        .nav-category.open
        .nav-category-arrow {
            transform:
                rotate(180deg);
        }
        /* =====================================================
           DESKTOP DROPDOWN
        ===================================================== */
        .navid-main-nav .category-dropdown {
            top:
                calc(100% + 12px) !important;
            padding:
                10px !important;
            min-width:
                215px;
            border-radius:
                18px !important;
            background:
                rgba(255,253,248,.94) !important;
            border:
                1px solid rgba(255,255,255,.95) !important;
            box-shadow:
                0 18px 45px rgba(30,50,38,.14),
                inset 0 1px 0 rgba(255,255,255,.95) !important;
            backdrop-filter:
                blur(25px);
            -webkit-backdrop-filter:
                blur(25px);
        }
        .navid-main-nav
        .category-dropdown a {
            border-radius:
                12px !important;
            padding:
                11px 13px !important;
            transition:
                .2s ease;
        }
        .navid-main-nav
        .category-dropdown a:hover {
            background:
                rgba(82,102,76,.09) !important;
            transform:
                translateX(-3px);
        }
        /* =====================================================
           CART BUTTON
        ===================================================== */
        .navid-cart-button {
            position:
                relative;
            display:
                flex;
            align-items:
                center;
            gap:
                8px;
            text-decoration:
                none !important;
            color:
                #263228 !important;
            background:
                rgba(255,255,255,.72) !important;
            border:
                1px solid rgba(255,255,255,.95) !important;
            border-radius:
                16px !important;
            padding:
                9px 13px !important;
            box-shadow:
                0 7px 20px rgba(30,50,38,.07),
                inset 0 1px 0 rgba(255,255,255,.95);
            transition:
                .25s ease;
        }
        .navid-cart-button:hover {
            transform:
                translateY(-2px);
            background:
                rgba(255,255,255,.95) !important;
            box-shadow:
                0 11px 28px rgba(30,50,38,.12),
                inset 0 1px 0 #fff;
        }
        .navid-cart-icon {
            font-size:
                18px;
        }
        .navid-cart-label {
            font-size:
                13px;
            font-weight:
                700;
        }
        .navid-cart-button .cartCount {
            min-width:
                21px;
            height:
                21px;
            padding:
                0 5px;
            display:
                inline-flex;
            align-items:
                center;
            justify-content:
                center;
            border-radius:
                50%;
            background:
                #34452f;
            color:
                #fff;
            font-size:
                11px;
            box-shadow:
                0 3px 8px rgba(52,69,47,.25);
        }
        /* =====================================================
           MOBILE MENU BUTTON
        ===================================================== */
        .navid-menu-button {
            width:
                44px !important;
            height:
                44px !important;
            border-radius:
                14px !important;
            background:
                rgba(255,255,255,.72) !important;
            border:
                1px solid rgba(255,255,255,.9) !important;
            box-shadow:
                0 6px 18px rgba(30,50,38,.07);
        }
        .navid-menu-button span {
            width:
                20px;
            height:
                2px;
            margin:
                3px auto;
            border-radius:
                10px;
            background:
                #34452f;
        }
        /* =====================================================
           MOBILE OVERLAY
        ===================================================== */
        .navid-menu-overlay {
            background:
                rgba(18,27,21,.38) !important;
            backdrop-filter:
                blur(5px);
            -webkit-backdrop-filter:
                blur(5px);
            opacity:
                0;
            transition:
                opacity .3s ease;
        }
        .navid-menu-overlay.active {
            opacity:
                1;
        }
        /* =====================================================
           MOBILE SIDE MENU
        ===================================================== */
        .navid-mobile-menu {
            width:
                min(88vw, 390px) !important;
            background:
                linear-gradient(
                    155deg,
                    rgba(255,254,250,.98),
                    rgba(244,244,236,.96)
                ) !important;
            border-left:
                1px solid rgba(255,255,255,.95);
            box-shadow:
                -20px 0 55px rgba(24,38,28,.18),
                inset 1px 0 0 rgba(255,255,255,.8);
            backdrop-filter:
                blur(28px)
                saturate(140%);
            -webkit-backdrop-filter:
                blur(28px)
                saturate(140%);
        }
        /* =====================================================
           MOBILE HEADER
        ===================================================== */
        .navid-mobile-header {
            padding:
                22px 18px !important;
            border-bottom:
                1px solid rgba(52,69,47,.08);
        }
        .navid-mobile-logo {
            width:
                48px !important;
            height:
                48px !important;
            border-radius:
                16px !important;
            background:
                linear-gradient(
                    145deg,
                    #506249,
                    #2f402b
                ) !important;
            color:
                #fff;
            box-shadow:
                0 10px 24px rgba(52,69,47,.22);
        }
        .navid-mobile-brand-text strong {
            color:
                #263228;
            font-size:
                17px;
        }
        .navid-mobile-brand-text span {
            color:
                #7b8279;
        }
        .navid-close-button {
            width:
                40px !important;
            height:
                40px !important;
            border-radius:
                13px !important;
            background:
                rgba(52,69,47,.07) !important;
            color:
                #34452f !important;
            font-size:
                27px !important;
            transition:
                .2s ease;
        }
        .navid-close-button:hover {
            background:
                rgba(52,69,47,.13) !important;
            transform:
                rotate(90deg);
        }
        /* =====================================================
           MOBILE LINKS
        ===================================================== */
        .navid-mobile-links {
            padding:
                14px 13px 10px !important;
        }
        .navid-mobile-link {
            margin:
                4px 0;
            border-radius:
                15px !important;
            transition:
                .22s ease;
        }
        .navid-mobile-link:hover {
            background:
                rgba(52,69,47,.07) !important;
            transform:
                translateX(-3px);
        }
        .navid-mobile-link .side-icon {
            width:
                38px;
            height:
                38px;
            display:
                inline-flex;
            align-items:
                center;
            justify-content:
                center;
            border-radius:
                12px;
            background:
                rgba(52,69,47,.07);
            color:
                #34452f;
            font-weight:
                800;
        }
        .navid-discount-link {
            background:
                linear-gradient(
                    90deg,
                    rgba(120,91,47,.07),
                    rgba(255,255,255,.35)
                );
        }
        .discount-badge {
            margin-right:
                auto;
            padding:
                4px 9px;
            border-radius:
                20px;
            background:
                #34452f;
            color:
                white;
            font-size:
                10px;
            font-weight:
                800;
        }
        /* =====================================================
           MOBILE CATEGORY
        ===================================================== */
        .mobile-side-category-list {
            margin:
                3px 0 7px;
            padding:
                0 0 0 0;
            border-radius:
                15px;
            background:
                rgba(52,69,47,.035);
            overflow:
                hidden;
        }
        .mobile-side-category-list a {
            padding:
                10px 22px 10px 17px !important;
            border-bottom:
                1px solid rgba(52,69,47,.055);
            transition:
                .2s ease;
        }
        .mobile-side-category-list a:hover {
            background:
                rgba(52,69,47,.07);
            padding-right:
                27px !important;
        }
        .side-arrow {
            transition:
                transform .25s ease;
        }
        .side-arrow.open {
            transform:
                rotate(180deg);
        }
        /* =====================================================
           MOBILE BOTTOM
        ===================================================== */
        .navid-mobile-bottom {
            margin:
                auto 13px 14px !important;
            padding:
                8px !important;
            gap:
                7px !important;
            border-radius:
                20px !important;
            background:
                rgba(255,255,255,.72) !important;
            border:
                1px solid rgba(255,255,255,.95) !important;
            box-shadow:
                0 10px 28px rgba(30,50,38,.10),
                inset 0 1px 0 #fff;
        }
        .navid-bottom-button {
            position:
                relative;
            min-height:
                62px;
            border-radius:
                15px !important;
            color:
                #34452f !important;
            transition:
                .22s ease;
        }
        .navid-bottom-button:hover {
            background:
                rgba(52,69,47,.07) !important;
            transform:
                translateY(-2px);
        }
        .navid-bottom-button > span {
            font-size:
                20px;
        }
        .navid-bottom-button small {
            font-weight:
                700;
            font-size:
                10px;
        }
        .navid-bottom-cart {
            background:
                #34452f !important;
            color:
                #fff !important;
            box-shadow:
                0 8px 20px rgba(52,69,47,.22);
        }
        .navid-bottom-cart:hover {
            background:
                #2d3c29 !important;
        }
        .navid-bottom-cart .cartCount {
            position:
                absolute;
            top:
                5px;
            left:
                7px;
            min-width:
                19px;
            height:
                19px;
            padding:
                0 4px;
            display:
                flex;
            align-items:
                center;
            justify-content:
                center;
            border-radius:
                50%;
            background:
                #fff;
            color:
                #34452f;
            font-size:
                10px;
            font-weight:
                800;
        }
        /* =====================================================
           MOBILE
        ===================================================== */
        @media (max-width: 800px) {
            .navid-main-nav {
                display:
                    none !important;
            }
            .navid-cart-label {
                display:
                    none;
            }
            .navid-cart-button {
                width:
                    44px;
                height:
                    44px;
                padding:
                    0 !important;
                justify-content:
                    center;
                border-radius:
                    14px !important;
            }
            .navid-cart-icon {
                font-size:
                    18px;
            }
        }
        </style>
        `;
        setupMenu();
    }
    /* =====================================================
       SETUP
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
        /* =================================================
           OPEN
        ================================================= */
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
        /* =================================================
           CLOSE
        ================================================= */
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
        /* =================================================
           MOBILE OPEN
        ================================================= */
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
        /* =================================================
           CLOSE
        ================================================= */
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
        /* =================================================
           OVERLAY
        ================================================= */
        if (overlay) {
            overlay.addEventListener(
                "click",
                closeMenu
            );
        }
        /* =================================================
           ESC
        ================================================= */
        document.addEventListener(
            "keydown",
            function (event) {
                if (event.key === "Escape") {
                    closeMenu();
                }
            }
        );
        /* =================================================
           MOBILE CATEGORY
        ================================================= */
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
        /* =================================================
           MOBILE LINKS
        ================================================= */
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
        /* =================================================
           DESKTOP CATEGORY
        ================================================= */
        if (
            desktopCategoryButton &&
            desktopCategory
        ) {
            desktopCategoryButton.addEventListener(
                "click",
                function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    desktopCategory.classList.toggle("open");
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
    /*
       عمداً منو را همین لحظه می‌سازیم.
       این باعث می‌شود script.js هم بتواند
       دکمه‌های سبد خرید و cartCount را ببیند.
    */
    createMenu();
})();