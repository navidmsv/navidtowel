<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>فروشگاه | NavidTowel</title>

    <link rel="stylesheet" href="style.css">

    <style>

        /* =====================================================
           SHOP PAGE
           ===================================================== */

        .shop-page {
            max-width: 1250px;
            margin: 0 auto;
            padding: 35px 18px 150px;
        }

        .shop-head {
            text-align: center;
            margin-bottom: 25px;
        }

        .shop-head h1 {
            margin: 0;
            color: #34452f;
            font-size: clamp(25px, 4vw, 38px);
            font-weight: 900;
        }

        .shop-head p {
            margin: 9px 0 0;
            color: #8a9187;
            font-size: 12px;
        }

        /* ================= CATEGORIES ================= */

        .shop-categories {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 18px;
        }

        .shop-category {
            border: 1px solid rgba(52,69,47,.10);
            background: #fff;
            color: #53604f;
            border-radius: 13px;
            padding: 9px 14px;
            font-family: inherit;
            font-size: 11px;
            font-weight: 800;
            cursor: pointer;
            transition: .2s ease;
        }

        .shop-category:hover {
            transform: translateY(-1px);
            border-color: rgba(52,69,47,.20);
        }

        .shop-category.active {
            background: #34452f;
            color: #fff;
            border-color: #34452f;
        }

        /* ================= SEARCH ================= */

        .shop-tools {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
        }

        .shop-search-wrap {
            position: relative;
            flex: 1;
        }

        .shop-search {
            width: 100%;
            height: 48px;
            box-sizing: border-box;
            border: 1px solid rgba(52,69,47,.10);
            border-radius: 15px;
            background: #fff;
            color: #34452f;
            outline: none;
            padding: 0 45px 0 15px;
            font-family: inherit;
            font-size: 11px;
            transition: .2s;
        }

        .shop-search:focus {
            border-color: rgba(52,69,47,.28);
            box-shadow: 0 5px 20px rgba(52,69,47,.06);
        }

        .shop-search-icon {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #697364;
            font-size: 16px;
            pointer-events: none;
        }

        .shop-sort {
            width: 170px;
            height: 48px;
            border: 1px solid rgba(52,69,47,.10);
            border-radius: 15px;
            background: #fff;
            color: #34452f;
            padding: 0 12px;
            font-family: inherit;
            font-size: 10px;
            font-weight: 700;
            outline: none;
        }

        /* ================= RESULT ================= */

        .shop-result-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 14px;
            color: #8a9187;
            font-size: 10px;
        }

        .shop-result-info strong {
            color: #34452f;
        }

        /* ================= PRODUCTS ================= */

        #productsGrid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 16px;
        }

        .shop-product-card {
            min-width: 0;
            overflow: hidden;
            border: 1px solid rgba(52,69,47,.08);
            border-radius: 19px;
            background: #fff;
            box-shadow: 0 8px 25px rgba(35,50,35,.045);
            transition: .25s ease;
        }

        .shop-product-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(35,50,35,.09);
        }

        .shop-product-image {
            position: relative;
            width: 100%;
            aspect-ratio: 1 / 1;
            overflow: hidden;
            background: #f2f2ed;
            cursor: pointer;
        }

        .shop-product-image img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            transition: .35s ease;
        }

        .shop-product-card:hover .shop-product-image img {
            transform: scale(1.035);
        }

        .shop-stock {
            position: absolute;
            top: 9px;
            right: 9px;
            padding: 5px 8px;
            border-radius: 9px;
            background: rgba(255,255,255,.91);
            color: #34452f;
            font-size: 8px;
            font-weight: 900;
            backdrop-filter: blur(8px);
        }

        .shop-stock.out {
            color: #9a4b4b;
        }

        .shop-product-body {
            padding: 13px;
        }

        .shop-product-name {
            margin: 0;
            min-height: 36px;
            color: #34452f;
            font-size: 12px;
            font-weight: 900;
            line-height: 1.8;
        }

        .shop-product-category {
            margin-top: 3px;
            color: #9a9f97;
            font-size: 8px;
        }

        .shop-price-row {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 5px;
            margin-top: 11px;
        }

        .shop-prices {
            min-width: 0;
        }

        .shop-old-price {
            display: block;
            color: #a5aaa3;
            font-size: 8px;
            text-decoration: line-through;
            min-height: 13px;
        }

        .shop-price {
            display: block;
            color: #34452f;
            font-size: 13px;
            font-weight: 900;
            white-space: nowrap;
        }

        .shop-add-button {
            flex: 0 0 auto;
            min-width: 39px;
            height: 39px;
            border: 0;
            border-radius: 12px;
            background: #34452f;
            color: #fff;
            font-family: inherit;
            font-size: 18px;
            cursor: pointer;
            transition: .2s;
        }

        .shop-add-button:hover {
            transform: translateY(-1px);
            box-shadow: 0 7px 16px rgba(52,69,47,.18);
        }

        .shop-add-button:disabled {
            opacity: .45;
            cursor: not-allowed;
            transform: none;
        }

        .shop-empty {
            grid-column: 1 / -1;
            min-height: 260px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #8d948a;
        }

        .shop-empty-icon {
            font-size: 45px;
            opacity: .55;
            margin-bottom: 12px;
        }

        .shop-empty strong {
            color: #4e594b;
            font-size: 14px;
        }

        .shop-empty small {
            margin-top: 6px;
            font-size: 9px;
        }

        /* =====================================================
           BOTTOM CART
           ===================================================== */

        .bottom-cart {
            position: fixed !important;
            left: 18px !important;
            right: 18px !important;
            bottom: 18px !important;
            z-index: 2147483640 !important;

            max-width: 760px;
            margin: 0 auto;

            min-height: 68px;
            box-sizing: border-box;

            display: flex !important;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 9px 10px 9px 14px;

            border: 1px solid rgba(255,255,255,.85);
            border-radius: 19px;

            background: rgba(255,253,248,.94);

            box-shadow:
                0 18px 55px rgba(25,40,28,.18),
                inset 0 1px 0 rgba(255,255,255,.95);

            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);

            opacity: 0;
            visibility: hidden;
            pointer-events: none;

            transform: translateY(20px);
            transition:
                opacity .25s ease,
                visibility .25s ease,
                transform .25s ease;
        }

        .bottom-cart.active {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
        }

        .bottom-cart-info {
            min-width: 0;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .bottom-cart-icon {
            width: 44px;
            height: 44px;
            flex: 0 0 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 13px;
            background: #f0f3ec;
            font-size: 19px;
        }

        .bottom-cart-text {
            min-width: 0;
        }

        .bottom-cart-text small {
            display: block;
            color: #8b9188;
            font-size: 8px;
            margin-bottom: 3px;
        }

        .bottom-cart-total {
            color: #34452f;
            font-size: 13px;
            font-weight: 900;
            white-space: nowrap;
        }

        .bottom-cart-btn {
            flex: 0 0 auto;
            min-width: 130px;
            height: 45px;
            border: 0;
            border-radius: 13px;
            background: #34452f;
            color: #fff;
            font-family: inherit;
            font-size: 10px;
            font-weight: 900;
            cursor: pointer;
        }

        /* =====================================================
           OPTION MODAL
           ===================================================== */

        .shop-option-modal {
            position: fixed;
            inset: 0;
            z-index: 2147483645;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px;
            box-sizing: border-box;
            background: rgba(20,25,20,.38);
            backdrop-filter: blur(7px);
            -webkit-backdrop-filter: blur(7px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: .2s ease;
        }

        .shop-option-modal.active {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        .shop-option-box {
            width: min(94vw, 430px);
            max-height: 90dvh;
            overflow-y: auto;
            padding: 20px;
            box-sizing: border-box;
            border-radius: 22px;
            background: #fffdf8;
            box-shadow: 0 25px 70px rgba(20,35,25,.22);
            transform: translateY(12px) scale(.98);
            transition: .22s ease;
        }

        .shop-option-modal.active .shop-option-box {
            transform: translateY(0) scale(1);
        }

        .shop-option-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 15px;
        }

        .shop-option-head h3 {
            margin: 0;
            color: #34452f;
            font-size: 16px;
        }

        .shop-option-close {
            width: 35px;
            height: 35px;
            border: 0;
            border-radius: 11px;
            background: rgba(52,69,47,.07);
            color: #34452f;
            font-size: 21px;
            cursor: pointer;
        }

        .shop-option-label {
            display: block;
            margin: 14px 0 8px;
            color: #687164;
            font-size: 10px;
            font-weight: 800;
        }

        .shop-option-list {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
        }

        .shop-option-item {
            min-width: 48px;
            min-height: 36px;
            padding: 0 11px;
            border: 1px solid rgba(52,69,47,.10);
            border-radius: 10px;
            background: #fff;
            color: #53604f;
            font-family: inherit;
            font-size: 9px;
            font-weight: 800;
            cursor: pointer;
        }

        .shop-option-item.active {
            background: #34452f;
            color: #fff;
            border-color: #34452f;
        }

        .shop-option-confirm {
            width: 100%;
            height: 45px;
            margin-top: 20px;
            border: 0;
            border-radius: 13px;
            background: #34452f;
            color: #fff;
            font-family: inherit;
            font-size: 10px;
            font-weight: 900;
            cursor: pointer;
        }

        @media (max-width: 1000px) {

            #productsGrid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }

        }

        @media (max-width: 700px) {

            .shop-page {
                padding-top: 25px;
            }

            #productsGrid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 10px;
            }

            .shop-tools {
                flex-direction: column;
            }

            .shop-search-wrap,
            .shop-sort {
                width: 100%;
            }

            .shop-sort {
                height: 44px;
            }

            .shop-product-body {
                padding: 10px;
            }

            .shop-product-name {
                font-size: 10px;
            }

            .shop-price {
                font-size: 11px;
            }

            .bottom-cart {
                left: 10px !important;
                right: 10px !important;
                bottom: 10px !important;
                min-height: 62px;
                padding: 8px 8px 8px 11px;
                border-radius: 16px;
            }

            .bottom-cart-icon {
                width: 38px;
                height: 38px;
                flex-basis: 38px;
                font-size: 17px;
            }

            .bottom-cart-total {
                font-size: 11px;
            }

            .bottom-cart-btn {
                min-width: 105px;
                height: 41px;
                font-size: 9px;
            }

        }

    </style>

</head>


<body>

    <!-- =====================================================
         HEADER
         ===================================================== -->

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

                <a href="index.html">
                    خانه
                </a>

                <a href="shop.html">
                    فروشگاه
                </a>


                <div class="nav-category-wrap">

                    <button
                        type="button"
                        class="nav-category-button"
                        id="desktopCategoryButton">

                        دسته‌بندی‌ها
                        <span>⌄</span>

                    </button>


                    <div
                        class="desktop-category-menu"
                        id="desktopCategoryMenu">

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


                <a href="about.html">
                    درباره ما
                </a>

                <a href="contact.html">
                    تماس با ما
                </a>

            </nav>


            <div class="header-actions">

                <button
                    type="button"
                    class="cart-btn openCart"
                    aria-label="سبد خرید">

                    <span class="cart-btn-icon">
                        🛒
                    </span>

                    <span class="cart-btn-text">
                        سبد خرید
                    </span>

                    <b class="cartCount">
                        0
                    </b>

                </button>

            </div>

        </div>

    </header>


    <!-- =====================================================
         MOBILE MENU
         ===================================================== -->

    <div id="mobileMenuOverlay"></div>


    <aside id="mobileSideMenu">

        <div class="mobile-menu-head">

            <div class="mobile-menu-brand">

                <strong>
                    Navid<span>Towel</span>
                </strong>

                <small>
                    حوله سرای نوید
                </small>

            </div>


            <button
                type="button"
                id="mobileMenuClose"
                aria-label="بستن">

                ×

            </button>

        </div>


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

                <small>
                    سبد خرید
                </small>

                <b class="mobileCartCount">
                    0
                </b>

            </button>

        </div>


        <div class="mobile-menu-section">

            <button
                type="button"
                class="mobile-category-button"
                id="mobileCategoryButton">

                <span>
                    <i>▦</i>
                    دسته‌بندی‌ها
                </span>

                <b id="mobileCategoryArrow">
                    ⌄
                </b>

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


    <!-- =====================================================
         SHOP
         ===================================================== -->

    <main class="shop-page">


        <div class="shop-head">

            <h1>
                فروشگاه
            </h1>

            <p>
                محصولات حوله سرای نوید را مشاهده و انتخاب کنید
            </p>

        </div>


        <!-- CATEGORY -->

        <div
            class="shop-categories"
            id="categoryList">
        </div>


        <!-- SEARCH / SORT -->

        <div class="shop-tools">

            <div class="shop-search-wrap">

                <span class="shop-search-icon">
                    🔍
                </span>

                <input
                    type="search"
                    id="searchInput"
                    class="shop-search"
                    placeholder="جستجوی محصول..."
                    autocomplete="off">

            </div>


            <select
                id="sortSelect"
                class="shop-sort">

                <option value="newest">
                    جدیدترین
                </option>

                <option value="cheap">
                    ارزان‌ترین
                </option>

                <option value="expensive">
                    گران‌ترین
                </option>

            </select>

        </div>


        <div class="shop-result-info">

            <span>
                تعداد محصولات:
                <strong id="productCount">
                    0
                </strong>
            </span>

            <span>
                NavidTowel
            </span>

        </div>


        <!-- PRODUCTS -->

        <div id="productsGrid"></div>


    </main>


    <!-- =====================================================
         BOTTOM CART
         ===================================================== -->

    <div
        class="bottom-cart"
        id="bottomCart">

        <div class="bottom-cart-info">

            <div class="bottom-cart-icon">
                🛒
            </div>

            <div class="bottom-cart-text">

                <small>
                    مبلغ قابل پرداخت
                </small>

                <div
                    class="bottom-cart-total"
                    id="bottomCartTotal">

                    0 تومان

                </div>

            </div>

        </div>


        <button
            type="button"
            class="bottom-cart-btn"
            id="bottomCartButton">

            ادامه سفارش

        </button>

    </div>


    <!-- =====================================================
         OPTION MODAL
         ===================================================== -->

    <div
        class="shop-option-modal"
        id="shopOptionModal">

        <div class="shop-option-box">

            <div class="shop-option-head">

                <h3 id="shopOptionTitle">
                    انتخاب محصول
                </h3>

                <button
                    type="button"
                    class="shop-option-close"
                    id="shopOptionClose">

                    ×

                </button>

            </div>


            <div id="shopColorSection">

                <span class="shop-option-label">
                    انتخاب رنگ
                </span>

                <div
                    class="shop-option-list"
                    id="shopColorList">
                </div>

            </div>


            <div id="shopSizeSection">

                <span class="shop-option-label">
                    انتخاب سایز
                </span>

                <div
                    class="shop-option-list"
                    id="shopSizeList">
                </div>

            </div>


            <button
                type="button"
                class="shop-option-confirm"
                id="shopOptionConfirm">

                افزودن به سبد خرید

            </button>

        </div>

    </div>


    <!-- =====================================================
         FOOTER
         ===================================================== -->

    <footer class="footer">

        <div class="footer-inner">

            <div class="footer-brand">

                <h3>
                    <span>Navid</span>Towel
                </h3>

                <p>
                    حوله سرای نوید
                </p>

            </div>


            <div class="footer-links">

                <a href="shop.html">
                    فروشگاه
                </a>

                <a href="discounts.html">
                    تخفیفات ویژه
                </a>

                <a href="tracking.html">
                    پیگیری سفارش
                </a>

                <a href="about.html">
                    درباره ما
                </a>

            </div>


            <div class="footer-contact">

                <span>
                    تماس: 09398707122
                </span>

                <a
                    href="https://instagram.com/navidtowel"
                    target="_blank"
                    rel="noopener">

                    @navidtowel

                </a>

            </div>

        </div>


        <div class="footer-bottom">

            © 2026 NavidTowel

        </div>

    </footer>


    <!-- =====================================================
         PRODUCTS
         ===================================================== -->

    <script src="products.js"></script>
    <script src="script.js"></script>


    <!-- =====================================================
         SHOP SCRIPT
         ===================================================== -->

    <script>

        "use strict";


        /* =====================================================
           STATE
           ===================================================== */

        let shopSelectedCategory = "all";
        let shopSearchText = "";
        let shopSort = "newest";

        let shopModalProduct = null;
        let shopModalColor = "";
        let shopModalSize = "Free Size";


        /* =====================================================
           CATEGORIES
           ===================================================== */

        const SHOP_CATEGORIES = [

            {
                id: "all",
                title: "همه"
            },

            {
                id: "bath",
                title: "حوله حمام"
            },

            {
                id: "hand",
                title: "حوله دست"
            },

            {
                id: "pool",
                title: "حوله استخری"
            },

            {
                id: "set",
                title: "ست حوله"
            },

            {
                id: "robe",
                title: "حوله تن‌پوش"
            },

            {
                id: "men",
                title: "مردانه"
            },

            {
                id: "women",
                title: "زنانه"
            },

            {
                id: "kids",
                title: "کودک"
            }

        ];


        /* =====================================================
           PRODUCTS DATA
           ===================================================== */

        function getShopProducts() {

            if (
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
                Array.isArray(window.PRODUCTS)
            ) {
                return window.PRODUCTS;
            }

            return [];

        }


        function findShopProduct(id) {

            const list = getShopProducts();

            return list.find(function (product) {

                return String(product.id) === String(id);

            }) || null;

        }


        /* =====================================================
           HELPERS
           ===================================================== */

        function getProductImage(product) {

            if (!product) return "";

            if (
                Array.isArray(product.images) &&
                product.images.length
            ) {
                return product.images[0];
            }

            if (product.image) {
                return product.image;
            }

            return "";

        }


        function getProductStock(product) {

            if (!product) return 0;

            if (
                typeof product.stock === "number"
            ) {
                return product.stock;
            }

            if (
                typeof product.stock === "string" &&
                product.stock.trim() !== ""
            ) {
                return Number(product.stock);
            }

            return 999999;

        }


        function productAvailable(product) {

            const stock =
                getProductStock(product);

            return stock > 0;

        }


        function getProductCategory(product) {

            if (!product) return "";

            return String(
                product.category ||
                product.categories ||
                ""
            ).toLowerCase();

        }


        function getProductColors(product) {

            if (!product) return [];

            if (Array.isArray(product.colors)) {
                return product.colors;
            }

            if (Array.isArray(product.color)) {
                return product.color;
            }

            return [];

        }


        function getProductSizes(product) {

            if (!product) return [];

            if (Array.isArray(product.sizes)) {
                return product.sizes;
            }

            if (Array.isArray(product.size)) {
                return product.size;
            }

            return [];

        }


        function formatShopPrice(value) {

            return Number(value || 0)
                .toLocaleString("en-US");

        }


        function escapeShopHTML(value) {

            return String(value ?? "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");

        }


        /* =====================================================
           CATEGORIES RENDER
           ===================================================== */

        function renderShopCategories() {

            const container =
                document.getElementById(
                    "categoryList"
                );

            if (!container) return;

            container.innerHTML =
                SHOP_CATEGORIES.map(function (category) {

                    return `
                        <button
                            type="button"
                            class="shop-category ${
                                shopSelectedCategory === category.id
                                ? "active"
                                : ""
                            }"
                            data-category="${category.id}">

                            ${category.title}

                        </button>
                    `;

                }).join("");


            container
                .querySelectorAll(".shop-category")
                .forEach(function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            shopSelectedCategory =
                                button.dataset.category;

                            renderShopCategories();
                            renderShopProducts();

                        }
                    );

                });

        }


        /* =====================================================
           FILTER PRODUCTS
           ===================================================== */

        function getFilteredShopProducts() {

            let list =
                getShopProducts().slice();


            if (
                shopSelectedCategory &&
                shopSelectedCategory !== "all"
            ) {

                list =
                    list.filter(function (product) {

                        const category =
                            getProductCategory(product);

                        if (
                            category ===
                            shopSelectedCategory
                        ) {
                            return true;
                        }

                        if (
                            Array.isArray(
                                product.categories
                            )
                        ) {

                            return product.categories
                                .map(function (item) {
                                    return String(item)
                                        .toLowerCase();
                                })
                                .includes(
                                    shopSelectedCategory
                                );

                        }

                        return false;

                    });

            }


            if (shopSearchText) {

                const search =
                    shopSearchText
                        .toLowerCase()
                        .trim();

                list =
                    list.filter(function (product) {

                        const text = [

                            product.name,
                            product.title,
                            product.description,
                            product.category

                        ]
                            .filter(Boolean)
                            .join(" ")
                            .toLowerCase();

                        return text.includes(search);

                    });

            }


            if (shopSort === "cheap") {

                list.sort(function (a, b) {

                    return Number(a.price || 0) -
                           Number(b.price || 0);

                });

            }


            if (shopSort === "expensive") {

                list.sort(function (a, b) {

                    return Number(b.price || 0) -
                           Number(a.price || 0);

                });

            }


            if (shopSort === "newest") {

                list.sort(function (a, b) {

                    const aDate =
                        new Date(
                            a.createdAt ||
                            a.date ||
                            0
                        ).getTime();

                    const bDate =
                        new Date(
                            b.createdAt ||
                            b.date ||
                            0
                        ).getTime();

                    return bDate - aDate;

                });

            }


            return list;

        }


        /* =====================================================
           PRODUCTS RENDER
           ===================================================== */

        function renderShopProducts() {

            const grid =
                document.getElementById(
                    "productsGrid"
                );

            const count =
                document.getElementById(
                    "productCount"
                );

            if (!grid) return;


            const products =
                getFilteredShopProducts();


            if (count) {

                count.textContent =
                    products.length;

            }


            if (!products.length) {

                grid.innerHTML = `

                    <div class="shop-empty">

                        <div class="shop-empty-icon">
                            🧺
                        </div>

                        <strong>
                            محصولی پیدا نشد
                        </strong>

                        <small>
                            جستجو یا دسته‌بندی دیگری را امتحان کنید
                        </small>

                    </div>

                `;

                return;

            }


            grid.innerHTML =
                products.map(function (product) {

                    const image =
                        getProductImage(product);

                    const stock =
                        getProductStock(product);

                    const available =
                        productAvailable(product);

                    const name =
                        escapeShopHTML(
                            product.name ||
                            product.title ||
                            "محصول"
                        );

                    const category =
                        escapeShopHTML(
                            product.categoryName ||
                            product.category ||
                            "حوله"
                        );

                    const price =
                        formatShopPrice(
                            product.price
                        );

                    const oldPrice =
                        Number(
                            product.oldPrice ||
                            product.previousPrice ||
                            0
                        );


                    return `

                        <article
                            class="shop-product-card"
                            data-product-id="${escapeShopHTML(product.id)}">


                            <div
                                class="shop-product-image"
                                data-product-link="${escapeShopHTML(product.id)}">

                                ${
                                    image
                                    ?
                                    `
                                        <img
                                            src="${escapeShopHTML(image)}"
                                            alt="${name}"
                                            loading="lazy"
                                            onerror="
                                                this.style.display='none';
                                                this.parentElement.innerHTML='🧺';
                                                this.parentElement.style.display='flex';
                                                this.parentElement.style.alignItems='center';
                                                this.parentElement.style.justifyContent='center';
                                                this.parentElement.style.fontSize='42px';
                                            ">
                                    `
                                    :
                                    `
                                        <div style="
                                            width:100%;
                                            height:100%;
                                            display:flex;
                                            align-items:center;
                                            justify-content:center;
                                            font-size:42px;
                                        ">
                                            🧺
                                        </div>
                                    `
                                }


                                <div
                                    class="shop-stock ${
                                        available ? "" : "out"
                                    }">

                                    ${
                                        available
                                        ? (
                                            stock > 100000
                                            ? "موجود"
                                            : "موجودی: " + stock
                                        )
                                        : "ناموجود"
                                    }

                                </div>

                            </div>


                            <div class="shop-product-body">

                                <h2 class="shop-product-name">
                                    ${name}
                                </h2>

                                <div class="shop-product-category">
                                    ${category}
                                </div>


                                <div class="shop-price-row">

                                    <div class="shop-prices">

                                        <span class="shop-old-price">

                                            ${
                                                oldPrice > 0
                                                ? formatShopPrice(oldPrice) + " تومان"
                                                : ""
                                            }

                                        </span>

                                        <span class="shop-price">
                                            ${price} تومان
                                        </span>

                                    </div>


                                    <button
                                        type="button"
                                        class="shop-add-button"
                                        data-add-product="${escapeShopHTML(product.id)}"
                                        ${
                                            available
                                            ? ""
                                            : "disabled"
                                        }>

                                        +

                                    </button>

                                </div>

                            </div>

                        </article>

                    `;

                }).join("");


            grid
                .querySelectorAll("[data-product-link]")
                .forEach(function (element) {

                    element.addEventListener(
                        "click",
                        function () {

                            const id =
                                element.dataset.productLink;

                            if (!id) return;

                            window.location.href =
                                "product.html?id=" +
                                encodeURIComponent(id);

                        }
                    );

                });


            grid
                .querySelectorAll("[data-add-product]")
                .forEach(function (button) {

                    button.addEventListener(
                        "click",
                        function (event) {

                            event.preventDefault();
                            event.stopPropagation();

                            addShopProductToCart(
                                button.dataset.addProduct
                            );

                        }
                    );

                });

        }


        /* =====================================================
           OPTION MODAL
           ===================================================== */

        function createOptionModalData(product) {

            const colors =
                getProductColors(product);

            const sizes =
                getProductSizes(product);


            const colorSection =
                document.getElementById(
                    "shopColorSection"
                );

            const sizeSection =
                document.getElementById(
                    "shopSizeSection"
                );

            const colorList =
                document.getElementById(
                    "shopColorList"
                );

            const sizeList =
                document.getElementById(
                    "shopSizeList"
                );


            if (
                colorSection &&
                colorList
            ) {

                if (colors.length) {

                    colorSection.style.display =
                        "";

                    colorList.innerHTML =
                        colors.map(function (color, index) {

                            const value =
                                typeof color === "object"
                                ? (
                                    color.name ||
                                    color.title ||
                                    color.value ||
                                    ""
                                )
                                : String(color);

                            return `
                                <button
                                    type="button"
                                    class="shop-option-item ${
                                        index === 0
                                        ? "active"
                                        : ""
                                    }"
                                    data-color="${escapeShopHTML(value)}">

                                    ${escapeShopHTML(value)}

                                </button>
                            `;

                        }).join("");


                    shopModalColor =
                        typeof colors[0] === "object"
                        ? (
                            colors[0].name ||
                            colors[0].title ||
                            colors[0].value ||
                            ""
                        )
                        : String(colors[0]);


                } else {

                    colorSection.style.display =
                        "none";

                    colorList.innerHTML = "";

                    shopModalColor = "";

                }

            }


            if (
                sizeSection &&
                sizeList
            ) {

                if (sizes.length) {

                    sizeSection.style.display =
                        "";

                    sizeList.innerHTML =
                        sizes.map(function (size, index) {

                            const value =
                                typeof size === "object"
                                ? (
                                    size.name ||
                                    size.title ||
                                    size.value ||
                                    ""
                                )
                                : String(size);

                            return `
                                <button
                                    type="button"
                                    class="shop-option-item ${
                                        index === 0
                                        ? "active"
                                        : ""
                                    }"
                                    data-size="${escapeShopHTML(value)}">

                                    ${escapeShopHTML(value)}

                                </button>
                            `;

                        }).join("");


                    shopModalSize =
                        typeof sizes[0] === "object"
                        ? (
                            sizes[0].name ||
                            sizes[0].title ||
                            sizes[0].value ||
                            ""
                        )
                        : String(sizes[0]);


                } else {

                    sizeSection.style.display =
                        "none";

                    sizeList.innerHTML = "";

                    shopModalSize =
                        "Free Size";

                }

            }


            if (colorList) {

                colorList
                    .querySelectorAll(
                        "[data-color]"
                    )
                    .forEach(function (button) {

                        button.addEventListener(
                            "click",
                            function () {

                                colorList
                                    .querySelectorAll(
                                        ".shop-option-item"
                                    )
                                    .forEach(function (item) {
                                        item.classList.remove(
                                            "active"
                                        );
                                    });

                                button.classList.add(
                                    "active"
                                );

                                shopModalColor =
                                    button.dataset.color;

                            }
                        );

                    });

            }


            if (sizeList) {

                sizeList
                    .querySelectorAll(
                        "[data-size]"
                    )
                    .forEach(function (button) {

                        button.addEventListener(
                            "click",
                            function () {

                                sizeList
                                    .querySelectorAll(
                                        ".shop-option-item"
                                    )
                                    .forEach(function (item) {
                                        item.classList.remove(
                                            "active"
                                        );
                                    });

                                button.classList.add(
                                    "active"
                                );

                                shopModalSize =
                                    button.dataset.size;

                            }
                        );

                    });

            }

        }


        function openShopOptionModal(product) {

            shopModalProduct =
                product;

            shopModalColor = "";
            shopModalSize = "Free Size";


            const title =
                document.getElementById(
                    "shopOptionTitle"
                );

            if (title) {

                title.textContent =
                    product.name ||
                    product.title ||
                    "انتخاب محصول";

            }


            createOptionModalData(product);


            const modal =
                document.getElementById(
                    "shopOptionModal"
                );

            if (modal) {

                modal.classList.add("active");

                document.body.style.overflow =
                    "hidden";

            }

        }


        function closeShopOptionModal() {

            const modal =
                document.getElementById(
                    "shopOptionModal"
                );

            if (modal) {

                modal.classList.remove(
                    "active"
                );

            }

            document.body.style.overflow = "";

            shopModalProduct = null;

        }


        /* =====================================================
           ADD TO CART
           ===================================================== */

        function addShopProductToCart(id) {

            const product =
                findShopProduct(id);

            if (!product) return;


            if (!productAvailable(product)) {

                return;

            }


            const colors =
                getProductColors(product);

            const sizes =
                getProductSizes(product);


            /*
             * اگر محصول هیچ انتخابی ندارد،
             * مستقیم به سبد اضافه شود.
             */

            if (
                !colors.length &&
                !sizes.length
            ) {

                performShopAddToCart(
                    product,
                    "",
                    "Free Size"
                );

                return;

            }


            openShopOptionModal(product);

        }


        function performShopAddToCart(
            product,
            color,
            size
        ) {

            if (!product) return;


            /*
             * سیستم اصلی سایت
             */

            if (
                typeof window.addToCart ===
                "function"
            ) {

                window.addToCart(
                    product.id,
                    color || null,
                    size || "Free Size"
                );

                setTimeout(
                    updateShopCartUI,
                    0
                );

                return;

            }


            /*
             * fallback سازگار با ساختار
             * navidTowelCart
             */

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


            const selectedColor =
                color || "";

            const selectedSize =
                size || "Free Size";


            const key = [
                product.id,
                selectedColor,
                selectedSize
            ].join("|");


            const existing =
                cart.find(function (item) {

                    return String(
                        item.key || ""
                    ) === String(key);

                });


            if (existing) {

                existing.quantity =
                    Number(
                        existing.quantity ||
                        existing.qty ||
                        0
                    ) + 1;

            } else {

                cart.push({

                    id: product.id,

                    name:
                        product.name ||
                        product.title ||
                        "محصول",

                    price:
                        Number(
                            product.price || 0
                        ),

                    image:
                        getProductImage(product),

                    color:
                        selectedColor,

                    size:
                        selectedSize,

                    quantity: 1,

                    key: key

                });

            }


            localStorage.setItem(
                "navidTowelCart",
                JSON.stringify(cart)
            );


            try {

                window.dispatchEvent(
                    new Event("cartUpdated")
                );

            } catch (error) {}

            updateShopCartUI();

        }


        /* =====================================================
           CART DATA
           ===================================================== */

        function readShopCart() {

            try {

                return JSON.parse(
                    localStorage.getItem(
                        "navidTowelCart"
                    )
                ) || [];

            } catch (error) {

                return [];

            }

        }


        function calculateShopCartTotal(
            cart
        ) {

            let total = 0;


            cart.forEach(function (item) {

                const product =
                    findShopProduct(item.id);

                let price = 0;


                if (
                    typeof item.price ===
                    "number"
                ) {

                    price =
                        item.price;

                } else if (
                    product &&
                    typeof product.price ===
                    "number"
                ) {

                    price =
                        product.price;

                }


                const quantity =
                    Number(
                        item.quantity ||
                        item.qty ||
                        1
                    );


                total +=
                    price * quantity;

            });


            return total;

        }


        function getShopCartCount(cart) {

            let count = 0;


            cart.forEach(function (item) {

                count += Number(
                    item.quantity ||
                    item.qty ||
                    1
                );

            });


            return count;

        }


        /* =====================================================
           CART UI
           ===================================================== */

        function updateShopCartUI() {

            const cart =
                readShopCart();


            const count =
                getShopCartCount(cart);


            let total =
                calculateShopCartTotal(
                    cart
                );


            /*
             * اگر script.js تابع اصلی مبلغ را دارد،
             * از همان استفاده می‌کنیم.
             */

            if (
                typeof window.getCartTotal ===
                "function"
            ) {

                const mainTotal =
                    Number(
                        window.getCartTotal()
                    );

                if (
                    Number.isFinite(mainTotal)
                ) {

                    total =
                        mainTotal;

                }

            }


            document
                .querySelectorAll(".cartCount")
                .forEach(function (element) {

                    element.textContent =
                        String(count);

                });


            document
                .querySelectorAll(
                    ".mobileCartCount"
                )
                .forEach(function (element) {

                    element.textContent =
                        String(count);

                });


            const totalElement =
                document.getElementById(
                    "bottomCartTotal"
                );


            if (totalElement) {

                totalElement.textContent =
                    formatShopPrice(total) +
                    " تومان";

            }


            const bottomCart =
                document.getElementById(
                    "bottomCart"
                );


            if (bottomCart) {

                if (count > 0) {

                    bottomCart.classList.add(
                        "active"
                    );

                } else {

                    bottomCart.classList.remove(
                        "active"
                    );

                }

            }

        }


        /* =====================================================
           GO CART
           ===================================================== */

        function goToCart() {

            const cart =
                readShopCart();


            const count =
                getShopCartCount(cart);


            if (count <= 0) {

                return;

            }


            window.location.href =
                "cart.html";

        }


        /* =====================================================
           MOBILE MENU
           ===================================================== */

        function setupMobileMenu() {

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

            const open =
                document.getElementById(
                    "mobileMenuButton"
                );


            function openMenu() {

                if (!menu) return;

                menu.classList.add(
                    "active"
                );

                if (overlay) {

                    overlay.classList.add(
                        "active"
                    );

                }

                document.body.style.overflow =
                    "hidden";

            }


            function closeMenu() {

                if (!menu) return;

                menu.classList.remove(
                    "active"
                );

                if (overlay) {

                    overlay.classList.remove(
                        "active"
                    );

                }

                document.body.style.overflow =
                    "";

            }


            if (open) {

                open.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        openMenu();

                    }
                );

            }


            if (close) {

                close.addEventListener(
                    "click",
                    closeMenu
                );

            }


            if (overlay) {

                overlay.addEventListener(
                    "click",
                    closeMenu
                );

            }


            document.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key ===
                        "Escape"
                    ) {

                        closeMenu();

                    }

                }
            );


            if (menu) {

                menu
                    .querySelectorAll("a")
                    .forEach(function (link) {

                        link.addEventListener(
                            "click",
                            closeMenu
                        );

                    });

            }


            const categoryButton =
                document.getElementById(
                    "mobileCategoryButton"
                );

            const category =
                document.getElementById(
                    "mobileSideCategory"
                );


            if (
                categoryButton &&
                category
            ) {

                categoryButton.addEventListener(
                    "click",
                    function () {

                        category.classList.toggle(
                            "open"
                        );

                        categoryButton.classList.toggle(
                            "open"
                        );

                    }
                );

            }

        }


        /* =====================================================
           DESKTOP CATEGORY
           ===================================================== */

        function setupDesktopCategory() {

            const button =
                document.getElementById(
                    "desktopCategoryButton"
                );

            const wrap =
                document.querySelector(
                    ".nav-category-wrap"
                );


            if (!button || !wrap) return;


            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    wrap.classList.toggle(
                        "open"
                    );

                }
            );


            document.addEventListener(
                "click",
                function (event) {

                    if (
                        !wrap.contains(
                            event.target
                        )
                    ) {

                        wrap.classList.remove(
                            "open"
                        );

                    }

                }
            );

        }


        /* =====================================================
           CART OPEN BRIDGE
           ===================================================== */

        function setupCartButtons() {

            document
                .querySelectorAll(
                    ".openCart"
                )
                .forEach(function (button) {

                    button.addEventListener(
                        "click",
                        function (event) {

                            event.preventDefault();

                            /*
                             * سبد اصلی script.js
                             */

                            if (
                                typeof window.openCart ===
                                "function"
                            ) {

                                window.openCart();

                                return;

                            }


                            /*
                             * اگر openCart وجود نداشت،
                             * مستقیماً به صفحه سبد برو.
                             */

                            window.location.href =
                                "cart.html";

                        },
                        true
                    );

                });


            const bottomButton =
                document.getElementById(
                    "bottomCartButton"
                );


            if (bottomButton) {

                bottomButton.addEventListener(
                    "click",
                    function () {

                        goToCart();

                    }
                );

            }

        }


        /* =====================================================
           SEARCH
           ===================================================== */

        function setupSearch() {

            const input =
                document.getElementById(
                    "searchInput"
                );


            if (!input) return;


            input.addEventListener(
                "input",
                function () {

                    shopSearchText =
                        input.value || "";

                    renderShopProducts();

                }
            );

        }


        /* =====================================================
           SORT
           ===================================================== */

        function setupSort() {

            const select =
                document.getElementById(
                    "sortSelect"
                );


            if (!select) return;


            select.addEventListener(
                "change",
                function () {

                    shopSort =
                        select.value;

                    renderShopProducts();

                }
            );

        }


        /* =====================================================
           OPTION MODAL EVENTS
           ===================================================== */

        function setupOptionModal() {

            const modal =
                document.getElementById(
                    "shopOptionModal"
                );

            const close =
                document.getElementById(
                    "shopOptionClose"
                );

            const confirm =
                document.getElementById(
                    "shopOptionConfirm"
                );


            if (close) {

                close.addEventListener(
                    "click",
                    closeShopOptionModal
                );

            }


            if (modal) {

                modal.addEventListener(
                    "click",
                    function (event) {

                        if (
                            event.target ===
                            modal
                        ) {

                            closeShopOptionModal();

                        }

                    }
                );

            }


            if (confirm) {

                confirm.addEventListener(
                    "click",
                    function () {

                        if (!shopModalProduct) {
                            return;
                        }


                        performShopAddToCart(

                            shopModalProduct,

                            shopModalColor,

                            shopModalSize

                        );


                        closeShopOptionModal();

                    }
                );

            }

        }


        /* =====================================================
           URL CATEGORY
           ===================================================== */

        function readURLCategory() {

            const params =
                new URLSearchParams(
                    window.location.search
                );


            const category =
                params.get("category");


            if (
                category &&
                SHOP_CATEGORIES.some(
                    function (item) {
                        return item.id === category;
                    }
                )
            ) {

                shopSelectedCategory =
                    category;

            }

        }


        /* =====================================================
           CART EVENTS
           ===================================================== */

        window.addEventListener(
            "storage",
            function (event) {

                if (
                    event.key ===
                    "navidTowelCart"
                ) {

                    updateShopCartUI();

                }

            }
        );


        window.addEventListener(
            "cartUpdated",
            function () {

                updateShopCartUI();

            }
        );


        document.addEventListener(
            "visibilitychange",
            function () {

                if (
                    document.visibilityState ===
                    "visible"
                ) {

                    updateShopCartUI();

                }

            }
        );


        /* =====================================================
           INIT
           ===================================================== */

        function initShopPage() {

            readURLCategory();

            renderShopCategories();

            renderShopProducts();

            setupSearch();

            setupSort();

            setupMobileMenu();

            setupDesktopCategory();

            setupCartButtons();

            setupOptionModal();

            updateShopCartUI();

        }


        if (
            document.readyState ===
            "loading"
        ) {

            document.addEventListener(
                "DOMContentLoaded",
                initShopPage
            );

        } else {

            initShopPage();

        }

    </script>

</body>

</html>