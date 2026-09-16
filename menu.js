/* =========================================================
   NAVID TOWEL - SHARED MENU + CART PREVIEW
   ========================================================= */

(function () {
    "use strict";

    /* =========================================================
       MENU HTML
       ========================================================= */

    function createMenu() {
        const container = document.getElementById("siteMenu");

        if (!container) return;

        container.innerHTML = `
            <!-- HEADER -->
            <header class="header">
                <div class="header-inner">

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
                        <span>Navid</span>Towel
                    </a>

                    <nav class="desktop-nav">

                        <a href="index.html">خانه</a>

                        <a href="shop.html">فروشگاه</a>

                        <div class="nav-category-wrap">
                            <button
                                type="button"
                                class="nav-category-button"
                                id="desktopCategoryButton">
                                دسته‌بندی‌ها
                                <span>⌄</span>
                            </button>

                            <div class="desktop-category-menu" id="desktopCategoryMenu">

                                <a href="shop.html?category=bath">
                                    <span>🛁</span>
                                    حوله حمام
                                </a>

                                <a href="shop.html?category=hand">
                                    <span>🤲</span>
                                    حوله دست
                                </a>

                                <a href="shop.html?category=pool">
                                    <span>🏊</span>
                                    حوله استخری
                                </a>

                                <a href="shop.html?category=set">
                                    <span>🎁</span>
                                    ست حوله
                                </a>

                                <a href="shop.html?category=robe">
                                    <span>🥋</span>
                                    حوله تن‌پوش
                                </a>

                                <a href="shop.html?category=men">
                                    <span>👨</span>
                                    مردانه
                                </a>

                                <a href="shop.html?category=women">
                                    <span>👩</span>
                                    زنانه
                                </a>

                                <a href="shop.html?category=kids">
                                    <span>👶</span>
                                    کودک
                                </a>

                            </div>
                        </div>

                        <a href="about.html">درباره ما</a>

                        <a href="contact.html">تماس با ما</a>

                    </nav>

                    <div class="header-actions">

                        <button
                            type="button"
                            class="cart-btn openCart"
                            aria-label="سبد خرید">

                            <span class="cart-btn-icon">🛒</span>

                            <span class="cart-btn-text">
                                سبد خرید
                            </span>

                            <b class="cartCount">0</b>

                        </button>

                    </div>

                </div>
            </header>


            <!-- MOBILE OVERLAY -->
            <div id="mobileMenuOverlay"></div>


            <!-- MOBILE SIDE MENU -->
            <aside id="mobileSideMenu">

                <div class="mobile-menu-head">

                    <div class="mobile-menu-brand">
                        <strong>Navid<span>Towel</span></strong>
                        <small>حوله سرای نوید</small>
                    </div>

                    <button
                        type="button"
                        id="mobileMenuClose"
                        aria-label="بستن">
                        ×
                    </button>

                </div>


                <!-- TOP 3 BUTTONS -->
                <div class="mobile-mini-row">

                    <a
                        href="index.html"
                        class="navid-mini-button">
                        <span>⌂</span>
                        <small>خانه</small>
                    </a>

                    <a
                        href="shop.html"
                        class="navid-mini-button">
                        <span>▦</span>
                        <small>محصولات</small>
                    </a>

                    <button
                        type="button"
                        class="navid-mini-button openCart">

                        <span class="mini-cart-icon">
                            🛒
                        </span>

                        <small>سبد خرید</small>

                        <b class="mobileCartCount">0</b>

                    </button>

                </div>


                <!-- CATEGORY -->
                <div class="mobile-menu-section">

                    <button
                        type="button"
                        class="mobile-category-button"
                        id="mobileCategoryButton">

                        <span>
                            <i>▦</i>
                            دسته‌بندی‌ها
                        </span>

                        <b id="mobileCategoryArrow">⌄</b>

                    </button>

                    <div
                        class="mobile-side-category"
                        id="mobileSideCategory">

                        <a href="shop.html?category=bath">
                            🛁 حوله حمام
                        </a>

                        <a href="shop.html?category=hand">
                            🤲 حوله دست
                        </a>

                        <a href="shop.html?category=pool">
                            🏊 حوله استخری
                        </a>

                        <a href="shop.html?category=set">
                            🎁 ست حوله
                        </a>

                        <a href="shop.html?category=robe">
                            🥋 حوله تن‌پوش
                        </a>

                        <a href="shop.html?category=men">
                            👨 مردانه
                        </a>

                        <a href="shop.html?category=women">
                            👩 زنانه
                        </a>

                        <a href="shop.html?category=kids">
                            👶 کودک
                        </a>

                    </div>

                </div>


                <!-- OTHER LINKS -->
                <div class="mobile-menu-links">

                    <a href="discounts.html">
                        <span>%</span>
                        تخفیفات ویژه
                    </a>

                    <a href="tracking.html">
                        <span>⌁</span>
                        پیگیری سفارش
                    </a>

                    <a href="about.html">
                        <span>ⓘ</span>
                        درباره ما
                    </a>

                </div>


                <!-- BOTTOM 3 BUTTONS -->
                <div class="mobile-bottom-links">

                    <a href="contact.html">
                        <span>☎</span>
                        <small>تماس</small>
                    </a>

                    <a
                        href="https://instagram.com/navidtowel"
                        target="_blank"
                        rel="noopener">
                        <span>◎</span>
                        <small>اینستاگرام</small>
                    </a>

                    <a
                        href="https://t.me/navidtowel"
                        target="_blank"
                        rel="noopener">
                        <span>✈</span>
                        <small>تلگرام</small>
                    </a>

                </div>


                <a
                    href="shop.html"
                    class="mobile-all-products">
                    مشاهده همه محصولات
                </a>

            </aside>


            <!-- =================================================
                 CART PREVIEW
                 ================================================= -->

            <div
                class="cartModal cart-modal"
                id="navidMenuCartPreview"
                aria-hidden="true">

                <div class="cart-box">

                    <div class="cart-header">

                        <div class="cart-title-wrap">

                            <span class="cart-title-icon">
                                🛒
                            </span>

                            <div>
                                <h2>سبد خرید</h2>
                                <small>محصولات انتخاب‌شده</small>
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

                            <span>مبلغ کل</span>

                            <strong class="cartTotal">
                                0 تومان
                            </strong>

                        </div>

                        <button
                            type="button"
                            class="checkout">
                            تکمیل سفارش
                        </button>

                    </div>

                </div>

            </div>
        `;

        injectStyles();
        setupMenu();
        setupCartBridge();
        updateCartCount();
    }


    /* =========================================================
       CSS
       ========================================================= */

    function injectStyles() {

        if (document.getElementById("navidMenuStyles")) return;

        const style = document.createElement("style");

        style.id = "navidMenuStyles";

        style.textContent = `

        /* ================= HEADER ================= */

        .header-actions {
            display: flex;
            align-items: center;
        }

        .header-actions .cart-btn {
            width: 138px;
            min-width: 138px;
            height: 46px;
            padding: 0 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: 1px solid rgba(52,69,47,.14);
            border-radius: 15px;
            background: rgba(255,255,255,.72);
            color: #34452f;
            box-shadow:
                0 5px 18px rgba(40,55,40,.07),
                inset 0 1px 0 rgba(255,255,255,.95);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            cursor: pointer;
            transition: .25s ease;
            font-family: inherit;
        }

        .header-actions .cart-btn:hover {
            transform: translateY(-1px);
            background: rgba(255,255,255,.9);
            box-shadow:
                0 8px 24px rgba(40,55,40,.11),
                inset 0 1px 0 rgba(255,255,255,1);
        }

        .cart-btn-icon {
            font-size: 18px;
            line-height: 1;
        }

        .cart-btn-text {
            font-size: 13px;
            font-weight: 800;
            white-space: nowrap;
        }

        .header-actions .cartCount {
            min-width: 21px;
            height: 21px;
            padding: 0 5px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            background: #34452f;
            color: white;
            font-size: 11px;
            font-weight: 900;
            line-height: 1;
        }


        /* ================= DESKTOP CATEGORY ================= */

        .nav-category-wrap {
            position: relative;
        }

        .nav-category-button {
            border: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 10px 4px;
        }

        .nav-category-button span {
            font-size: 13px;
            transition: .2s;
        }

        .nav-category-wrap.open .nav-category-button span {
            transform: rotate(180deg);
        }

        .desktop-category-menu {
            position: absolute;
            top: calc(100% + 12px);
            right: 50%;
            transform: translateX(50%) translateY(-8px);
            width: 210px;
            padding: 8px;
            border-radius: 18px;
            background: rgba(255,253,248,.96);
            border: 1px solid rgba(255,255,255,.9);
            box-shadow: 0 18px 45px rgba(30,50,38,.14);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: .2s ease;
            z-index: 2000;
        }

        .nav-category-wrap.open .desktop-category-menu {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateX(50%) translateY(0);
        }

        .desktop-category-menu a {
            display: flex;
            align-items: center;
            gap: 9px;
            padding: 10px 11px;
            border-radius: 12px;
            color: #34452f;
            text-decoration: none;
            font-size: 12px;
            font-weight: 700;
            transition: .18s;
        }

        .desktop-category-menu a:hover {
            background: rgba(52,69,47,.07);
            transform: translateX(-2px);
        }


        /* ================= MOBILE MENU ================= */

        #mobileMenuOverlay {
            position: fixed;
            inset: 0;
            background: rgba(20,25,20,.30);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: .25s ease;
            z-index: 9998;
        }

        #mobileMenuOverlay.active {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        #mobileSideMenu {
            position: fixed;
            top: 0;
            right: 0;
            width: min(82vw,330px);
            height: 100dvh;
            padding: 17px;
            box-sizing: border-box;
            overflow-y: auto;
            background: rgba(255,253,248,.97);
            border-left: 1px solid rgba(255,255,255,.9);
            box-shadow: -18px 0 55px rgba(20,35,25,.16);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            transform: translateX(105%);
            transition: transform .28s cubic-bezier(.22,.8,.25,1);
            z-index: 9999;
        }

        #mobileSideMenu.active {
            transform: translateX(0);
        }

        .mobile-menu-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 14px;
        }

        .mobile-menu-brand {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .mobile-menu-brand strong {
            color: #34452f;
            font-size: 20px;
            letter-spacing: -.5px;
        }

        .mobile-menu-brand strong span {
            font-weight: 400;
        }

        .mobile-menu-brand small {
            color: #858b80;
            font-size: 9px;
        }

        #mobileMenuClose {
            width: 35px;
            height: 35px;
            border: 1px solid rgba(52,69,47,.10);
            border-radius: 12px;
            background: rgba(255,255,255,.7);
            color: #34452f;
            font-size: 22px;
            cursor: pointer;
        }


        /* TOP 3 */

        .mobile-mini-row {
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 7px;
            margin-bottom: 13px;
        }

        .navid-mini-button {
            position: relative;
            min-height: 57px;
            padding: 7px 4px;
            border: 1px solid rgba(52,69,47,.09);
            border-radius: 14px;
            background: rgba(255,255,255,.68);
            color: #34452f;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3px;
            font-family: inherit;
            cursor: pointer;
            box-shadow:
                0 4px 15px rgba(40,55,40,.05),
                inset 0 1px 0 rgba(255,255,255,.95);
        }

        .navid-mini-button span {
            font-size: 17px;
            line-height: 1;
        }

        .navid-mini-button small {
            font-size: 9px;
            font-weight: 800;
        }

        .navid-mini-button .mobileCartCount {
            position: absolute;
            top: 5px;
            left: 7px;
            min-width: 17px;
            height: 17px;
            padding: 0 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            background: #34452f;
            color: #fff;
            font-size: 9px;
            font-weight: 900;
        }


        /* CATEGORY */

        .mobile-menu-section {
            margin-bottom: 7px;
        }

        .mobile-category-button {
            width: 100%;
            height: 43px;
            padding: 0 12px;
            border: 1px solid rgba(52,69,47,.08);
            border-radius: 13px;
            background: rgba(255,255,255,.58);
            color: #34452f;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: inherit;
            font-size: 11px;
            font-weight: 800;
            cursor: pointer;
        }

        .mobile-category-button span {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .mobile-category-button i {
            font-style: normal;
            font-size: 15px;
        }

        #mobileCategoryArrow {
            transition: .2s;
        }

        .mobile-category-button.open #mobileCategoryArrow {
            transform: rotate(180deg);
        }

        .mobile-side-category {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5px;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: .25s ease;
        }

        .mobile-side-category.open {
            max-height: 350px;
            opacity: 1;
            padding-top: 7px;
        }

        .mobile-side-category a {
            padding: 9px 8px;
            border-radius: 10px;
            background: rgba(52,69,47,.045);
            color: #4d5949;
            text-decoration: none;
            font-size: 9px;
            font-weight: 700;
        }


        /* OTHER LINKS */

        .mobile-menu-links {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-top: 7px;
        }

        .mobile-menu-links a {
            min-height: 40px;
            padding: 0 12px;
            box-sizing: border-box;
            border-radius: 12px;
            background: rgba(255,255,255,.55);
            color: #34452f;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 9px;
            font-size: 10px;
            font-weight: 800;
        }

        .mobile-menu-links a span {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: rgba(52,69,47,.07);
            font-size: 12px;
        }


        /* BOTTOM 3 */

        .mobile-bottom-links {
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 7px;
            margin-top: 13px;
        }

        .mobile-bottom-links a {
            min-height: 47px;
            border-radius: 13px;
            background: rgba(52,69,47,.055);
            color: #34452f;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3px;
        }

        .mobile-bottom-links span {
            font-size: 15px;
            line-height: 1;
        }

        .mobile-bottom-links small {
            font-size: 8px;
            font-weight: 800;
        }

        .mobile-all-products {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 42px;
            margin-top: 9px;
            border-radius: 13px;
            background: #34452f;
            color: #fff;
            text-decoration: none;
            font-size: 10px;
            font-weight: 900;
        }


        /* ================= CART PREVIEW ================= */

        .cartModal.cart-modal {
            position: fixed !important;
            inset: 0 !important;
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 20px !important;
            box-sizing: border-box !important;
            background: rgba(20,25,20,.38) !important;
            backdrop-filter: blur(7px) !important;
            -webkit-backdrop-filter: blur(7px) !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
            z-index: 2147483646 !important;
            transition: opacity .22s ease, visibility .22s ease !important;
        }

        .cartModal.cart-modal.active,
        .cartModal.cart-modal.show {
            opacity: 1 !important;
            visibility: visible !important;
            pointer-events: auto !important;
        }

        .cartModal .cart-box {
            width: min(94vw,560px);
            max-height: min(82dvh,700px);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            border-radius: 25px;
            background: rgba(255,253,248,.98);
            border: 1px solid rgba(255,255,255,.95);
            box-shadow:
                0 30px 80px rgba(20,35,25,.20),
                inset 0 1px 0 rgba(255,255,255,1);
            transform: translateY(14px) scale(.98);
            transition: .25s ease;
        }

        .cartModal.active .cart-box,
        .cartModal.show .cart-box {
            transform: translateY(0) scale(1);
        }

        .cartModal .cart-header {
            flex: 0 0 auto;
            padding: 17px 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(52,69,47,.08);
        }

        .cart-title-wrap {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .cart-title-icon {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 13px;
            background: rgba(52,69,47,.08);
            font-size: 19px;
        }

        .cart-title-wrap h2 {
            margin: 0;
            color: #34452f;
            font-size: 17px;
        }

        .cart-title-wrap small {
            display: block;
            margin-top: 2px;
            color: #90968d;
            font-size: 9px;
        }

        .cartModal .closeCart {
            width: 36px;
            height: 36px;
            border: 1px solid rgba(52,69,47,.08);
            border-radius: 11px;
            background: rgba(52,69,47,.05);
            color: #34452f;
            font-size: 22px;
            line-height: 1;
            cursor: pointer;
        }

        .cartModal .cartItems {
            flex: 1 1 auto;
            min-height: 80px;
            overflow-y: auto;
            padding: 13px 16px;
        }

        .cartModal .cart-footer {
            flex: 0 0 auto;
            padding: 13px 16px 16px;
            border-top: 1px solid rgba(52,69,47,.08);
            background: rgba(255,255,255,.45);
        }

        .cartModal .cart-total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            color: #70776d;
            font-size: 11px;
        }

        .cartModal .cart-total strong {
            color: #34452f;
            font-size: 15px;
        }

        .cartModal .checkout {
            width: 100%;
            height: 46px;
            border: 0;
            border-radius: 13px;
            background: #34452f;
            color: #fff;
            font-family: inherit;
            font-size: 11px;
            font-weight: 900;
            cursor: pointer;
        }


        /* EMPTY CART */

        .menu-cart-empty {
            min-height: 190px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #8a9086;
        }

        .menu-cart-empty-icon {
            font-size: 42px;
            opacity: .65;
            margin-bottom: 10px;
        }

        .menu-cart-empty strong {
            color: #4b5548;
            font-size: 14px;
        }

        .menu-cart-empty small {
            margin-top: 5px;
            font-size: 9px;
        }


        @media (max-width: 800px) {

            .header-actions .cart-btn {
                width: 45px;
                min-width: 45px;
                height: 43px;
                padding: 0;
                border-radius: 13px;
                gap: 0;
            }

            .cart-btn-text {
                display: none;
            }

            .cart-btn-icon {
                font-size: 17px;
            }

            .header-actions .cartCount {
                position: absolute;
                transform: translate(14px,-13px);
                min-width: 18px;
                height: 18px;
                font-size: 9px;
            }

            .header-actions {
                position: relative;
            }

            .desktop-nav {
                display: none !important;
            }

            .cartModal.cart-modal {
                padding: 10px !important;
            }

            .cartModal .cart-box {
                width: 100%;
                max-height: 88dvh;
                border-radius: 21px;
            }

        }

        html.menu-open,
        body.menu-open {
            overflow: hidden !important;
        }

        `;

        document.head.appendChild(style);
    }


    /* =========================================================
       MENU EVENTS
       ========================================================= */

    function setupMenu() {

        const menu = document.getElementById("mobileSideMenu");
        const overlay = document.getElementById("mobileMenuOverlay");
        const closeBtn = document.getElementById("mobileMenuClose");
        const openBtn = document.getElementById("mobileMenuButton");

        const categoryButton =
            document.getElementById("mobileCategoryButton");

        const category =
            document.getElementById("mobileSideCategory");

        const desktopCategoryButton =
            document.getElementById("desktopCategoryButton");

        const desktopCategoryWrap =
            document.querySelector(".nav-category-wrap");


        function openSideMenu() {

            if (!menu) return;

            menu.classList.add("active");

            if (overlay) {
                overlay.classList.add("active");
            }

            document.body.classList.add("menu-open");
            document.documentElement.classList.add("menu-open");

            document.body.style.overflow = "hidden";
        }


        function closeSideMenu() {

            if (!menu) return;

            menu.classList.remove("active");

            if (overlay) {
                overlay.classList.remove("active");
            }

            document.body.classList.remove("menu-open");
            document.documentElement.classList.remove("menu-open");

            document.body.style.overflow = "";
        }


        if (openBtn) {
            openBtn.addEventListener("click", function (event) {
                event.preventDefault();
                openSideMenu();
            });
        }


        if (closeBtn) {
            closeBtn.addEventListener("click", closeSideMenu);
        }


        if (overlay) {
            overlay.addEventListener("click", closeSideMenu);
        }


        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                closeSideMenu();

                if (desktopCategoryWrap) {
                    desktopCategoryWrap.classList.remove("open");
                }

            }

        });


        /* MOBILE CATEGORY */

        if (categoryButton && category) {

            categoryButton.addEventListener("click", function () {

                category.classList.toggle("open");
                categoryButton.classList.toggle("open");

            });

        }


        /* CLOSE MOBILE MENU AFTER LINK */

        if (menu) {

            menu.querySelectorAll("a").forEach(function (link) {

                link.addEventListener("click", function () {
                    closeSideMenu();
                });

            });

        }


        /* DESKTOP CATEGORY */

        if (desktopCategoryButton && desktopCategoryWrap) {

            desktopCategoryButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    desktopCategoryWrap.classList.toggle("open");

                }
            );

        }


        document.addEventListener("click", function (event) {

            if (
                desktopCategoryWrap &&
                !desktopCategoryWrap.contains(event.target)
            ) {
                desktopCategoryWrap.classList.remove("open");
            }

        });

    }


    /* =========================================================
       CART BRIDGE
       ========================================================= */

    function setupCartBridge() {

        const buttons =
            document.querySelectorAll(".openCart");

        buttons.forEach(function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopImmediatePropagation();

                    /*
                     * اولویت با سبد خرید اصلی script.js
                     */
                    if (typeof window.openCart === "function") {

                        window.openCart();
                        return;

                    }

                    /*
                     * اگر script.js هنوز openCart نداشت،
                     * سبد پیش‌نمایش همین فایل باز می‌شود.
                     */
                    openFallbackCart();

                },
                true
            );

        });


        const closeButton =
            document.querySelector(
                "#navidMenuCartPreview .closeCart"
            );

        if (closeButton) {

            closeButton.addEventListener("click", function () {
                closeFallbackCart();
            });

        }


        const modal =
            document.getElementById(
                "navidMenuCartPreview"
            );

        if (modal) {

            modal.addEventListener("click", function (event) {

                if (event.target === modal) {
                    closeFallbackCart();
                }

            });

        }

    }


    /* =========================================================
       FALLBACK CART
       ========================================================= */

    function getCartData() {

        try {

            return JSON.parse(
                localStorage.getItem("navidTowelCart")
            ) || [];

        } catch (error) {

            return [];

        }

    }


    function getProductsData() {

        if (
            typeof window.products !== "undefined" &&
            Array.isArray(window.products)
        ) {
            return window.products;
        }

        if (
            typeof products !== "undefined" &&
            Array.isArray(products)
        ) {
            return products;
        }

        if (
            typeof window.PRODUCTS !== "undefined" &&
            Array.isArray(window.PRODUCTS)
        ) {
            return window.PRODUCTS;
        }

        return [];

    }


    function findProduct(id) {

        const list = getProductsData();

        return list.find(function (product) {

            return String(product.id) === String(id);

        }) || null;

    }


    function getItemPrice(item, product) {

        if (
            typeof item.price === "number" &&
            item.price >= 0
        ) {
            return item.price;
        }

        if (
            product &&
            typeof product.price === "number"
        ) {
            return product.price;
        }

        return 0;

    }


    function formatNumber(number) {

        return Number(number || 0).toLocaleString("en-US");

    }


    function getItemName(item, product) {

        if (product && product.name) {
            return product.name;
        }

        if (item.name) {
            return item.name;
        }

        return "محصول";

    }


    function getItemImage(item, product) {

        if (product) {

            if (
                Array.isArray(product.images) &&
                product.images.length
            ) {
                return product.images[0];
            }

            if (product.image) {
                return product.image;
            }

        }

        if (item.image) {
            return item.image;
        }

        return "";

    }


    function renderFallbackCart() {

        const container =
            document.querySelector(
                "#navidMenuCartPreview .cartItems"
            );

        const totalElement =
            document.querySelector(
                "#navidMenuCartPreview .cartTotal"
            );

        if (!container || !totalElement) return;


        const cart = getCartData();

        if (!cart.length) {

            container.innerHTML = `
                <div class="menu-cart-empty">

                    <div class="menu-cart-empty-icon">
                        🛒
                    </div>

                    <strong>
                        سبد خرید شما خالی است
                    </strong>

                    <small>
                        محصولات مورد علاقه‌تان را به سبد اضافه کنید
                    </small>

                </div>
            `;

            totalElement.textContent = "0 تومان";

            return;
        }


        let total = 0;


        container.innerHTML = cart.map(function (item) {

            const product =
                findProduct(item.id);

            const price =
                getItemPrice(item, product);

            const quantity =
                Number(item.quantity || item.qty || 1);

            const itemTotal =
                price * quantity;

            total += itemTotal;

            const name =
                getItemName(item, product);

            const image =
                getItemImage(item, product);

            const color =
                item.color ||
                item.selectedColor ||
                "";

            const size =
                item.size ||
                item.selectedSize ||
                "";

            return `

                <div
                    class="menu-cart-item"
                    style="
                        display:flex;
                        align-items:center;
                        gap:10px;
                        padding:10px 0;
                        border-bottom:1px solid rgba(52,69,47,.07);
                    ">

                    <div
                        style="
                            width:58px;
                            height:58px;
                            flex:0 0 58px;
                            border-radius:13px;
                            overflow:hidden;
                            background:#f1f1ec;
                        ">

                        ${
                            image
                            ?
                            `<img
                                src="${image}"
                                alt="${name}"
                                style="
                                    width:100%;
                                    height:100%;
                                    object-fit:cover;
                                "
                                onerror="this.style.display='none';
                                this.parentElement.innerHTML='🧺';
                                this.parentElement.style.display='flex';
                                this.parentElement.style.alignItems='center';
                                this.parentElement.style.justifyContent='center';
                                this.parentElement.style.fontSize='22px';"
                            >`
                            :
                            `<div
                                style="
                                    width:100%;
                                    height:100%;
                                    display:flex;
                                    align-items:center;
                                    justify-content:center;
                                    font-size:22px;
                                ">
                                🧺
                            </div>`
                        }

                    </div>


                    <div style="flex:1;min-width:0;">

                        <strong
                            style="
                                display:block;
                                color:#34452f;
                                font-size:11px;
                                line-height:1.8;
                            ">
                            ${name}
                        </strong>

                        <div
                            style="
                                color:#8b9188;
                                font-size:9px;
                                margin-top:2px;
                            ">

                            ${
                                color
                                ? `رنگ: ${color}`
                                : ""
                            }

                            ${
                                color && size
                                ? " · "
                                : ""
                            }

                            ${
                                size
                                ? `سایز: ${size}`
                                : ""
                            }

                        </div>

                        <div
                            style="
                                color:#34452f;
                                font-size:10px;
                                font-weight:800;
                                margin-top:4px;
                            ">
                            ${formatNumber(price)} تومان
                        </div>

                    </div>


                    <div
                        style="
                            min-width:25px;
                            height:25px;
                            padding:0 7px;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            border-radius:9px;
                            background:rgba(52,69,47,.07);
                            color:#34452f;
                            font-size:10px;
                            font-weight:900;
                        ">
                        ${quantity}
                    </div>

                </div>

            `;

        }).join("");


        totalElement.textContent =
            formatNumber(total) + " تومان";

    }


    function openFallbackCart() {

        const modal =
            document.getElementById(
                "navidMenuCartPreview"
            );

        if (!modal) return;

        renderFallbackCart();

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("cart-open");

    }


    function closeFallbackCart() {

        const modal =
            document.getElementById(
                "navidMenuCartPreview"
            );

        if (!modal) return;

        modal.classList.remove("active");
        modal.classList.remove("show");

        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("cart-open");

    }


    /* =========================================================
       CART COUNT
       ========================================================= */

    function updateCartCount() {

        const cart =
            getCartData();

        let count = 0;

        cart.forEach(function (item) {

            count += Number(
                item.quantity ||
                item.qty ||
                1
            );

        });


        document.querySelectorAll(".cartCount")
            .forEach(function (element) {

                element.textContent =
                    formatNumber(count);

            });


        document.querySelectorAll(".mobileCartCount")
            .forEach(function (element) {

                element.textContent =
                    formatNumber(count);

            });

    }


    /* =========================================================
       STORAGE / INIT
       ========================================================= */

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


    window.addEventListener(
        "cartUpdated",
        function () {

            updateCartCount();

        }
    );


    document.addEventListener(
        "DOMContentLoaded",
        function () {

            createMenu();

        }
    );


    /*
     * اگر menu.js بعد از DOMContentLoaded لود شد
     */
    if (
        document.readyState === "interactive" ||
        document.readyState === "complete"
    ) {
        createMenu();
    }

})();