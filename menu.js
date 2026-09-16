<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>فروشگاه | NavidTowel</title>

  <link rel="stylesheet" href="style.css">

  <style>
    /* =========================================================
       NAVIDTOWEL — SHOP PAGE
    ========================================================= */

    .shop-page {
      min-height: 70vh;
      padding: 95px 0 120px;
      background: var(--cream-2);
      font-family: Tahoma, Arial, sans-serif;
    }

    .shop-page *,
    .bottom-cart,
    .bottom-cart * {
      font-family: Tahoma, Arial, sans-serif;
      box-sizing: border-box;
    }

    .shop-heading {
      max-width: 1200px;
      margin: 0 auto 22px;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 14px;
    }

    .shop-heading h1 {
      margin: 0 0 5px;
      color: var(--green);
      font-size: 34px;
      line-height: 1.2;
      font-weight: 700;
    }

    .shop-heading p {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
    }

    .product-count {
      white-space: nowrap;
      color: var(--green);
      background: var(--green-soft);
      font-size: 12px;
      font-weight: 700;
      padding: 6px 10px;
      border-radius: 999px;
    }

    .category-section {
      max-width: 1200px;
      margin: 0 auto 28px;
      padding: 0 24px;
    }

    .category-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      margin-bottom: 15px;
    }

    .category-title {
      font-size: 20px;
      font-weight: 800;
      color: var(--text);
    }

    .category-hint {
      color: var(--muted);
      font-size: 13px;
    }

    .category-list {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .category-btn {
      border: 1px solid var(--border);
      background: #fff;
      color: var(--text);
      border-radius: 999px;
      padding: 11px 17px;
      cursor: pointer;
      font-family: Tahoma, Arial, sans-serif;
      font-size: 13px;
      transition: .2s ease;
    }

    .category-btn:hover {
      border-color: var(--green);
      color: var(--green);
    }

    .category-btn.active {
      background: var(--green);
      border-color: var(--green);
      color: #fff;
    }

    .shop-tools {
      max-width: 1200px;
      margin: 0 auto 30px;
      padding: 0 24px;
    }

    .search-box {
      position: relative;
      max-width: 430px;
    }

    .search-box input {
      width: 100%;
      height: 48px;
      border: 1px solid var(--border);
      background: #fff;
      border-radius: 14px;
      padding: 0 18px;
      font-family: Tahoma, Arial, sans-serif;
      font-size: 14px;
      color: var(--text);
      outline: none;
    }

    .search-box input:focus {
      border-color: var(--green);
    }

    .products-grid {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 22px;
    }

    .product-card {
      background: #fff;
      border: 1px solid var(--border);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(30, 50, 38, .06);
      transition: transform .2s ease, box-shadow .2s ease;
    }

    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 18px 38px rgba(30, 50, 38, .11);
    }

    .product-image-wrap {
      position: relative;
      aspect-ratio: 1 / 1;
      background: var(--cream);
      overflow: hidden;
      cursor: pointer;
    }

    .product-image-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform .3s ease;
    }

    .product-card:hover .product-image-wrap img {
      transform: scale(1.03);
    }

    .product-badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background: var(--green);
      color: #fff;
      padding: 6px 10px;
      border-radius: 999px;
      font-size: 11px;
      z-index: 2;
    }

    .product-info {
      padding: 17px;
    }

    .product-info h3 {
      margin: 0 0 10px;
      color: var(--text);
      font-size: 16px;
      line-height: 1.6;
      font-weight: 700;
    }

    .product-availability {
      color: #56805e;
      font-size: 12px;
      margin-bottom: 12px;
    }

    .product-availability.out-of-stock {
      color: #d32f2f !important;
      font-weight: 700;
    }

    .product-price-row {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 10px;
    }

    .product-prices {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .product-old-price {
      color: #999;
      text-decoration: line-through;
      font-size: 11px;
    }

    .product-price {
      color: var(--green);
      font-size: 16px;
      font-weight: 800;
    }

    .add-to-cart-btn {
      border: 0;
      background: var(--green);
      color: #fff;
      width: 42px;
      min-width: 42px;
      height: 42px;
      border-radius: 12px;
      cursor: pointer;
      font-family: Tahoma, Arial, sans-serif;
      font-size: 20px;
      transition: .2s ease;
    }

    .add-to-cart-btn:hover {
      background: var(--green-dark);
      transform: translateY(-1px);
    }

    .add-to-cart-btn:disabled {
      background: #aaa;
      cursor: not-allowed;
      transform: none;
    }

    .empty-products {
      grid-column: 1 / -1;
      text-align: center;
      padding: 60px 20px;
      color: var(--muted);
    }

    .shop-error {
      grid-column: 1 / -1;
      background: #fff;
      border: 1px solid #f0caca;
      color: #b3261e;
      border-radius: 16px;
      padding: 25px;
      text-align: center;
      line-height: 2;
    }

    /* =========================================================
       BOTTOM CART
    ========================================================= */

    .bottom-cart {
      position: fixed !important;
      left: 20px !important;
      right: 20px !important;
      bottom: 20px !important;
      top: auto !important;
      width: auto !important;
      max-width: 600px !important;
      margin: 0 auto !important;
      z-index: 2147483647 !important;

      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 15px;

      background: #fff;
      border: 1px solid var(--border);
      border-radius: 18px;
      box-shadow: 0 15px 45px rgba(0, 0, 0, .14);
      padding: 12px 14px;

      opacity: 0;
      visibility: hidden;
      pointer-events: none;

      transform: translate3d(0, 20px, 0);

      transition:
        opacity .25s ease,
        visibility .25s ease,
        transform .25s ease;
    }

    .bottom-cart.active {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: translate3d(0, 0, 0);
    }

    .bottom-cart-info {
      display: flex;
      align-items: center;
      gap: 11px;
    }

    .bottom-cart-icon {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      background: var(--green-soft);
      font-size: 20px;
      flex-shrink: 0;
    }

    .bottom-cart-text small {
      display: block;
      color: var(--muted);
      font-size: 11px;
      margin-bottom: 3px;
    }

    .bottom-cart-total {
      color: var(--green);
      font-size: 15px;
      font-weight: 800;
    }

    .bottom-cart-btn {
      border: 0;
      background: var(--green);
      color: #fff;
      padding: 12px 20px;
      border-radius: 12px;
      font-family: Tahoma, Arial, sans-serif;
      cursor: pointer;
      white-space: nowrap;
    }

    .bottom-cart-btn:hover {
      background: var(--green-dark);
    }

    /* =========================================================
       OPTION MODAL
    ========================================================= */

    .shop-option-overlay {
      position: fixed;
      inset: 0;
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      background: rgba(0, 0, 0, .45);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: .2s ease;
    }

    .shop-option-overlay.active {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    .shop-option-modal {
      width: min(430px, 100%);
      max-height: 90vh;
      overflow-y: auto;
      background: #fff;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 25px 70px rgba(0, 0, 0, .25);
    }

    .shop-option-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 18px;
    }

    .shop-option-image {
      width: 68px;
      height: 68px;
      border-radius: 13px;
      object-fit: cover;
      background: var(--cream);
      flex-shrink: 0;
    }

    .shop-option-title {
      margin: 0;
      color: var(--text);
      font-size: 16px;
      line-height: 1.7;
    }

    .shop-option-close {
      margin-right: auto;
      border: 0;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: #f2f2f2;
      color: #555;
      font-size: 23px;
      cursor: pointer;
      flex-shrink: 0;
    }

    .shop-option-label {
      display: block;
      color: var(--text);
      font-size: 13px;
      font-weight: 800;
      margin: 17px 0 9px;
    }

    .shop-option-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .shop-option-button {
      border: 1px solid var(--border);
      background: #fff;
      color: var(--text);
      border-radius: 11px;
      padding: 9px 13px;
      cursor: pointer;
      font-family: Tahoma, Arial, sans-serif;
      font-size: 12px;
    }

    .shop-option-button.active {
      background: var(--green);
      color: #fff;
      border-color: var(--green);
    }

    .shop-option-button:disabled {
      opacity: .4;
      cursor: not-allowed;
    }

    .shop-option-stock {
      color: var(--muted);
      font-size: 11px;
      margin-top: 8px;
    }

    .shop-option-confirm {
      width: 100%;
      border: 0;
      background: var(--green);
      color: #fff;
      padding: 13px;
      border-radius: 13px;
      margin-top: 20px;
      cursor: pointer;
      font-family: Tahoma, Arial, sans-serif;
      font-weight: 800;
    }

    .shop-option-confirm:hover {
      background: var(--green-dark);
    }

    /* =========================================================
       RESPONSIVE
    ========================================================= */

    @media (max-width: 1000px) {
      .products-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    @media (max-width: 700px) {

      .shop-page {
        padding-top: 110px;
        padding-bottom: 110px;
      }

      .shop-heading {
        align-items: flex-start;
        flex-direction: column;
        gap: 7px;
        margin-bottom: 25px;
      }

      .shop-heading h1 {
        font-size: 32px;
      }

      .product-count {
        align-self: flex-start;
      }

      .category-top {
        align-items: flex-start;
        flex-direction: column;
      }

      .category-hint {
        display: none;
      }

      .products-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 13px;
      }

      .products-grid,
      .shop-tools,
      .category-section,
      .shop-heading {
        padding-left: 14px;
        padding-right: 14px;
      }

      .product-info {
        padding: 12px;
      }

      .product-info h3 {
        font-size: 14px;
      }

      .product-price {
        font-size: 13px;
      }

      .add-to-cart-btn {
        width: 38px;
        min-width: 38px;
        height: 38px;
      }

      html body .bottom-cart {
        left: 10px !important;
        right: 10px !important;
        bottom: 10px !important;
        top: auto !important;
      }
    }

    @media (max-width: 430px) {

      .category-list {
        flex-wrap: nowrap;
        overflow-x: auto;
        padding-bottom: 5px;
        scrollbar-width: none;
      }

      .category-list::-webkit-scrollbar {
        display: none;
      }

      .category-btn {
        flex: 0 0 auto;
      }

      .bottom-cart-btn {
        padding: 11px 14px;
        font-size: 12px;
      }
    }
  </style>
</head>

<body class="home-page">

  <!-- =======================================================
       HEADER
  ======================================================== -->

  <header class="header">

    <div class="container header-inner">

      <button
        type="button"
        class="mobile-menu-button"
        id="mobileMenuButton"
        aria-label="منو">

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

        <button
          type="button"
          class="cart-btn openCart">

          🛒

          <span>
            سبد خرید
          </span>

          <b class="cartCount">
            0
          </b>

        </button>

      </div>

    </div>

  </header>


  <!-- =======================================================
       MOBILE MENU
  ======================================================== -->

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
        href="index.html#discount"
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
        href="#"
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

        <span>▦</span>

        <small>
          همه محصولات
        </small>

      </a>


      <a
        href="cart.html"
        class="mobile-bottom-button">

        <span>🛒</span>

        <small>
          سبد خرید
        </small>

      </a>


      <a
        href="https://instagram.com/navidtowel"
        target="_blank"
        rel="noopener noreferrer"
        class="mobile-bottom-button">

        <span>◎</span>

        <small>
          اینستاگرام
        </small>

      </a>

    </div>

  </aside>


  <!-- =======================================================
       SHOP
  ======================================================== -->

  <main class="shop-page">

    <section class="shop-heading">

      <div>

        <h1>
          فروشگاه
        </h1>

        <p>
          حوله مورد نظرت رو از بین محصولات ما پیدا کن
        </p>

      </div>

      <span
        class="product-count"
        id="productCount">

        0 محصول

      </span>

    </section>


    <section class="category-section">

      <div class="category-top">

        <div class="category-title">
          دسته‌بندی محصولات
        </div>

        <div class="category-hint">
          دسته مورد نظر خود را انتخاب کنید
        </div>

      </div>


      <div
        class="category-list"
        id="categoryList">

      </div>

    </section>


    <div class="shop-tools">

      <div class="search-box">

        <input
          type="search"
          id="searchInput"
          placeholder="جستجوی نام محصول..."
          autocomplete="off">

      </div>

    </div>


    <section
      class="products-grid"
      id="productsGrid">

      <div class="empty-products">
        در حال بارگذاری محصولات...
      </div>

    </section>

  </main>


  <!-- =======================================================
       BOTTOM CART
  ======================================================== -->

  <div class="bottom-cart">

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
      onclick="goToCart()">

      ادامه سفارش

    </button>

  </div>


  <!-- =======================================================
       FOOTER
  ======================================================== -->

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
            تلفن:
            <a href="tel:09121234567">
              09121234567
            </a>
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


  <!-- =======================================================
       SCRIPTS
       مهم: products.js باید قبل از کد فروشگاه لود شود
  ======================================================== -->

  <script src="products.js"></script>
  <script src="script.js"></script>


  <script>
    "use strict";

    /* =========================================================
       NAVIDTOWEL SHOP
    ========================================================= */

    let shopSelectedCategory = "all";
    let shopSearchText = "";

    let shopModalProduct = null;
    let shopModalColor = null;
    let shopModalSize = "Free Size";


    /* =========================================================
       CATEGORIES
    ========================================================= */

    const shopCategories = [
      {
        id: "all",
        name: "همه محصولات"
      },
      {
        id: "men",
        name: "حوله مردانه"
      },
      {
        id: "women",
        name: "حوله زنانه"
      },
      {
        id: "kids",
        name: "حوله بچگانه"
      },
      {
        id: "bath",
        name: "حوله حمامی"
      },
      {
        id: "pool",
        name: "حوله استخری"
      },
      {
        id: "meter",
        name: "حوله متری"
      },
      {
        id: "robe",
        name: "تن‌پوش"
      }
    ];


    /* =========================================================
       GET PRODUCTS
    ========================================================= */

    function getShopProducts() {

      try {

        if (
          typeof products !== "undefined" &&
          Array.isArray(products)
        ) {
          return products;
        }

      } catch (error) {
        console.warn("products variable not found.");
      }


      if (
        Array.isArray(window.products)
      ) {
        return window.products;
      }


      if (
        Array.isArray(window.PRODUCTS)
      ) {
        return window.PRODUCTS;
      }


      console.error(
        "products.js لود نشده یا آرایه محصولات پیدا نشد."
      );

      return [];
    }


    /* =========================================================
       PRODUCT BY ID
    ========================================================= */

    function getShopProductById(id) {

      const list = getShopProducts();

      return (
        list.find(function(product) {

          return String(product.id) === String(id);

        }) || null
      );
    }


    /* =========================================================
       IMAGE
    ========================================================= */

    function getShopProductImage(product) {

      if (!product) {
        return "";
      }


      if (
        Array.isArray(product.images) &&
        product.images.length > 0
      ) {

        const validImage =
          product.images.find(function(image) {

            return (
              image &&
              String(image).trim() !== "" &&
              String(image) !== "0"
            );

          });


        if (validImage) {
          return String(validImage);
        }
      }


      if (
        product.image &&
        String(product.image) !== "0"
      ) {
        return String(product.image);
      }


      return "";
    }


    /* =========================================================
       CATEGORIES OF PRODUCT
    ========================================================= */

    function getShopProductCategories(product) {

      if (!product) {
        return [];
      }


      if (
        Array.isArray(product.categories)
      ) {

        return product.categories.map(function(category) {

          return String(category);

        });

      }


      if (
        Array.isArray(product.category)
      ) {

        return product.category.map(function(category) {

          return String(category);

        });

      }


      if (product.category) {

        return [
          String(product.category)
        ];

      }


      return [];
    }


    /* =========================================================
       STOCK
    ========================================================= */

    function getShopProductStock(product) {

      if (!product) {
        return 0;
      }


      if (
        Array.isArray(product.colors) &&
        product.colors.length > 0
      ) {

        return product.colors.reduce(
          function(total, color) {

            return (
              total +
              Math.max(
                0,
                Number(color.stock || 0)
              )
            );

          },
          0
        );

      }


      const stock = Number(product.stock);

      if (
        Number.isFinite(stock)
      ) {

        return Math.max(
          0,
          stock
        );

      }


      return 0;
    }


    /* =========================================================
       PRICE
    ========================================================= */

    function formatShopPrice(value) {

      const number = Number(value || 0);

      return (
        number.toLocaleString("fa-IR") +
        " تومان"
      );
    }


    /* =========================================================
       CATEGORY COUNT
    ========================================================= */

    function getShopCategoryCount(categoryId) {

      const list = getShopProducts();

      return list.filter(function(product) {

        if (
          product.active === false
        ) {
          return false;
        }


        if (
          categoryId === "all"
        ) {
          return true;
        }


        return getShopProductCategories(product)
          .includes(categoryId);

      }).length;
    }


    /* =========================================================
       ESCAPE HTML
    ========================================================= */

    function escapeShopHTML(value) {

      return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }


    /* =========================================================
       RENDER CATEGORIES
    ========================================================= */

    function renderShopCategories() {

      const container =
        document.getElementById("categoryList");


      if (!container) {
        return;
      }


      container.innerHTML =
        shopCategories.map(function(category) {

          const active =
            shopSelectedCategory === category.id
              ? "active"
              : "";


          return `
            <button
              type="button"
              class="category-btn ${active}"
              data-category="${escapeShopHTML(category.id)}">

              ${escapeShopHTML(category.name)}

              <span style="opacity:.65">
                (${getShopCategoryCount(category.id)})
              </span>

            </button>
          `;

        }).join("");


      container
        .querySelectorAll(".category-btn")
        .forEach(function(button) {

          button.addEventListener(
            "click",
            function() {

              shopSelectedCategory =
                button.dataset.category || "all";

              renderShopCategories();
              renderShopProducts();

            }
          );

        });
    }


    /* =========================================================
       FILTER PRODUCTS
    ========================================================= */

    function getFilteredShopProducts() {

      const list = getShopProducts();

      const search =
        String(shopSearchText || "")
          .trim()
          .toLowerCase();


      return list.filter(function(product) {

        if (
          product.active === false
        ) {
          return false;
        }


        const categories =
          getShopProductCategories(product);


        const categoryMatch =
          shopSelectedCategory === "all" ||
          categories.includes(
            shopSelectedCategory
          );


        const name =
          String(product.name || "")
            .toLowerCase();


        const searchMatch =
          !search ||
          name.includes(search);


        return (
          categoryMatch &&
          searchMatch
        );

      });
    }


    /* =========================================================
       RENDER PRODUCTS
    ========================================================= */

    function renderShopProducts() {

      const grid =
        document.getElementById(
          "productsGrid"
        );


      const count =
        document.getElementById(
          "productCount"
        );


      if (!grid) {
        return;
      }


      const list =
        getFilteredShopProducts();


      if (count) {

        count.textContent =
          list.length.toLocaleString("fa-IR") +
          " محصول";

      }


      if (!list.length) {

        grid.innerHTML = `
          <div class="empty-products">
            محصولی با این مشخصات پیدا نشد.
          </div>
        `;

        return;
      }


      grid.innerHTML =
        list.map(function(product) {

          const image =
            getShopProductImage(product);


          const stock =
            getShopProductStock(product);


          const hasOldPrice =
            Number(product.oldPrice || 0) >
            Number(product.price || 0);


          const productId =
            escapeShopHTML(product.id);


          const productName =
            escapeShopHTML(
              product.name || "محصول"
            );


          return `
            <article
              class="product-card"
              data-product-id="${productId}">

              <div
                class="product-image-wrap"
                data-product-id="${productId}">

                ${
                  product.badge
                    ? `
                      <span class="product-badge">
                        ${escapeShopHTML(product.badge)}
                      </span>
                    `
                    : ""
                }


                ${
                  image
                    ? `
                      <img
                        src="${escapeShopHTML(image)}"
                        alt="${productName}"
                        loading="lazy"
                        onerror="this.style.display='none';">
                    `
                    : `
                      <div
                        style="
                          width:100%;
                          height:100%;
                          display:grid;
                          place-items:center;
                          color:#999;
                          font-size:13px;
                        ">
                        بدون تصویر
                      </div>
                    `
                }

              </div>


              <div class="product-info">

                <h3>
                  ${productName}
                </h3>


                <div
                  class="product-availability ${
                    stock <= 0
                      ? "out-of-stock"
                      : ""
                  }">

                  ${
                    stock > 0
                      ? "موجودی: " +
                        stock.toLocaleString("fa-IR")
                      : "ناموجود"
                  }

                </div>


                <div class="product-price-row">

                  <div class="product-prices">

                    ${
                      hasOldPrice
                        ? `
                          <span class="product-old-price">
                            ${formatShopPrice(product.oldPrice)}
                          </span>
                        `
                        : ""
                    }


                    <span class="product-price">
                      ${formatShopPrice(product.price)}
                    </span>

                  </div>


                  <button
                    type="button"
                    class="add-to-cart-btn"
                    data-add-product="${productId}"
                    aria-label="افزودن به سبد"
                    ${stock <= 0 ? "disabled" : ""}>

                    +

                  </button>

                </div>

              </div>

            </article>
          `;

        }).join("");


      /* =======================================================
         PRODUCT IMAGE CLICK
      ======================================================== */

      grid
        .querySelectorAll(".product-image-wrap")
        .forEach(function(element) {

          element.addEventListener(
            "click",
            function() {

              openShopProduct(
                element.dataset.productId
              );

            }
          );

        });


      /* =======================================================
         ADD TO CART CLICK
      ======================================================== */

      grid
        .querySelectorAll(".add-to-cart-btn")
        .forEach(function(button) {

          button.addEventListener(
            "click",
            function(event) {

              event.preventDefault();
              event.stopPropagation();


              addShopProductToCart(
                button.dataset.addProduct
              );

            }
          );

        });
    }


    /* =========================================================
       PRODUCT PAGE
    ========================================================= */

    function openShopProduct(id) {

      if (
        id === undefined ||
        id === null ||
        String(id) === ""
      ) {
        return;
      }


      window.location.href =
        "product.html?id=" +
        encodeURIComponent(id);
    }


    /* =========================================================
       CREATE OPTION MODAL
    ========================================================= */

    function createShopOptionModal() {

      if (
        document.getElementById(
          "shopOptionOverlay"
        )
      ) {
        return;
      }


      const overlay =
        document.createElement("div");


      overlay.id =
        "shopOptionOverlay";


      overlay.className =
        "shop-option-overlay";


      overlay.innerHTML = `

        <div class="shop-option-modal">

          <div class="shop-option-header">

            <img
              id="shopOptionImage"
              class="shop-option-image"
              src=""
              alt="">

            <h3
              id="shopOptionTitle"
              class="shop-option-title">
            </h3>

            <button
              type="button"
              id="shopOptionClose"
              class="shop-option-close"
              aria-label="بستن">

              ×

            </button>

          </div>


          <div id="shopColorArea">

            <span class="shop-option-label">
              رنگ
            </span>

            <div
              id="shopColorList"
              class="shop-option-list">
            </div>

            <div
              id="shopColorStock"
              class="shop-option-stock">
            </div>

          </div>


          <div id="shopSizeArea">

            <span class="shop-option-label">
              سایز
            </span>

            <div
              id="shopSizeList"
              class="shop-option-list">
            </div>

          </div>


          <button
            type="button"
            id="shopOptionConfirm"
            class="shop-option-confirm">

            افزودن به سبد خرید

          </button>

        </div>

      `;


      document.body.appendChild(
        overlay
      );


      overlay.addEventListener(
        "click",
        function(event) {

          if (
            event.target === overlay
          ) {

            closeShopOptionModal();

          }

        }
      );


      const closeButton =
        document.getElementById(
          "shopOptionClose"
        );


      if (closeButton) {

        closeButton.addEventListener(
          "click",
          closeShopOptionModal
        );

      }


      const confirmButton =
        document.getElementById(
          "shopOptionConfirm"
        );


      if (confirmButton) {

        confirmButton.addEventListener(
          "click",
          confirmShopAdd
        );

      }
    }


    /* =========================================================
       COLOR IMAGE
    ========================================================= */

    function findShopColorImage(
      product,
      colorName
    ) {

      if (
        !product ||
        !colorName ||
        !Array.isArray(product.images)
      ) {
        return "";
      }


      const color =
        String(colorName)
          .trim()
          .toLowerCase();


      return (
        product.images.find(
          function(image) {

            return String(image)
              .toLowerCase()
              .includes(color);

          }
        ) || ""
      );
    }


    /* =========================================================
       OPEN OPTION MODAL
    ========================================================= */

    function openShopOptionModal(
      product
    ) {

      if (!product) {
        return;
      }


      createShopOptionModal();


      shopModalProduct =
        product;


      shopModalColor =
        null;


      shopModalSize =
        "Free Size";


      const overlay =
        document.getElementById(
          "shopOptionOverlay"
        );


      const image =
        document.getElementById(
          "shopOptionImage"
        );


      const title =
        document.getElementById(
          "shopOptionTitle"
        );


      const colorArea =
        document.getElementById(
          "shopColorArea"
        );


      const colorList =
        document.getElementById(
          "shopColorList"
        );


      const colorStock =
        document.getElementById(
          "shopColorStock"
        );


      const sizeList =
        document.getElementById(
          "shopSizeList"
        );


      if (
        !overlay ||
        !image ||
        !title ||
        !colorArea ||
        !colorList ||
        !colorStock ||
        !sizeList
      ) {
        return;
      }


      image.src =
        getShopProductImage(product);


      image.alt =
        product.name || "محصول";


      title.textContent =
        product.name || "محصول";


      /* =======================================================
         COLORS
      ======================================================== */

      const colors =
        Array.isArray(product.colors)
          ? product.colors
          : [];


      if (colors.length > 0) {

        colorArea.style.display =
          "";


        const availableColors =
          colors.filter(function(color) {

            return Number(
              color.stock || 0
            ) > 0;

          });


        colorList.innerHTML =
          colors.map(
            function(color, index) {

              const stock =
                Number(color.stock || 0);


              const disabled =
                stock <= 0;


              return `

                <button
                  type="button"
                  class="shop-option-button"
                  data-color-index="${index}"
                  ${disabled ? "disabled" : ""}>

                  ${escapeShopHTML(
                    color.name || "بدون نام"
                  )}

                </button>

              `;

            }
          ).join("");


        if (
          availableColors.length > 0
        ) {

          shopModalColor =
            String(
              availableColors[0].name || ""
            );

        }


        colorList
          .querySelectorAll(
            ".shop-option-button"
          )
          .forEach(function(button) {

            const color =
              colors[
                Number(
                  button.dataset.colorIndex
                )
              ];


            if (
              String(color.name || "") ===
              shopModalColor
            ) {

              button.classList.add(
                "active"
              );

            }


            button.addEventListener(
              "click",
              function() {

                shopModalColor =
                  String(
                    color.name || ""
                  );


                colorList
                  .querySelectorAll(
                    ".shop-option-button"
                  )
                  .forEach(function(item) {

                    item.classList.remove(
                      "active"
                    );

                  });


                button.classList.add(
                  "active"
                );


                colorStock.textContent =
                  "موجودی این رنگ: " +
                  Number(
                    color.stock || 0
                  ).toLocaleString("fa-IR");


                const colorImage =
                  findShopColorImage(
                    product,
                    shopModalColor
                  );


                if (colorImage) {

                  image.src =
                    colorImage;

                }

              }
            );

          });


        if (
          shopModalColor
        ) {

          const selectedColor =
            availableColors.find(
              function(color) {

                return String(
                  color.name || ""
                ) ===
                shopModalColor;

              }
            );


          colorStock.textContent =
            "موجودی این رنگ: " +
            Number(
              selectedColor
                ? selectedColor.stock
                : 0
            ).toLocaleString("fa-IR");


          const selectedImage =
            findShopColorImage(
              product,
              shopModalColor
            );


          if (selectedImage) {

            image.src =
              selectedImage;

          }

        } else {

          colorStock.textContent =
            "هیچ رنگی موجود نیست.";

        }

      } else {

        colorArea.style.display =
          "none";

      }


      /* =======================================================
         SIZES
      ======================================================== */

      const sizes =
        Array.isArray(product.sizes) &&
        product.sizes.length > 0
          ? product.sizes
          : ["Free Size"];


      shopModalSize =
        String(sizes[0]);


      sizeList.innerHTML =
        sizes.map(
          function(size, index) {

            return `

              <button
                type="button"
                class="shop-option-button ${
                  index === 0
                    ? "active"
                    : ""
                }"
                data-size="${escapeShopHTML(size)}">

                ${escapeShopHTML(size)}

              </button>

            `;

          }
        ).join("");


      sizeList
        .querySelectorAll(
          ".shop-option-button"
        )
        .forEach(function(button) {

          button.addEventListener(
            "click",
            function() {

              shopModalSize =
                button.dataset.size ||
                "Free Size";


              sizeList
                .querySelectorAll(
                  ".shop-option-button"
                )
                .forEach(function(item) {

                  item.classList.remove(
                    "active"
                  );

                });


              button.classList.add(
                "active"
              );

            }
          );

        });


      overlay.classList.add(
        "active"
      );


      document.body.style.overflow =
        "hidden";
    }


    /* =========================================================
       CLOSE OPTION MODAL
    ========================================================= */

    function closeShopOptionModal() {

      const overlay =
        document.getElementById(
          "shopOptionOverlay"
        );


      if (overlay) {

        overlay.classList.remove(
          "active"
        );

      }


      document.body.style.overflow =
        "";


      shopModalProduct =
        null;

      shopModalColor =
        null;

      shopModalSize =
        "Free Size";
    }


    /* =========================================================
       CONFIRM ADD
    ========================================================= */

    function confirmShopAdd() {

      const product =
        shopModalProduct;


      if (!product) {
        return;
      }


      const colors =
        Array.isArray(product.colors)
          ? product.colors
          : [];


      /* محصول رنگ دارد */

      if (
        colors.length > 0
      ) {

        const selected =
          colors.find(function(color) {

            return String(
              color.name || ""
            ) ===
            String(
              shopModalColor || ""
            );

          });


        if (
          !selected ||
          Number(selected.stock || 0) <= 0
        ) {

          alert(
            "لطفاً یک رنگ موجود را انتخاب کنید."
          );

          return;
        }

      }


      /* =======================================================
         استفاده از سبد اصلی
      ======================================================== */

      if (
        typeof window.addToCart ===
        "function"
      ) {

        try {

          window.addToCart(
            product.id,
            shopModalColor || null,
            shopModalSize || "Free Size"
          );

        } catch (error) {

          console.error(
            "خطا در addToCart:",
            error
          );

          addShopFallbackCart(
            product
          );

        }

      } else {

        addShopFallbackCart(
          product
        );

      }


      closeShopOptionModal();


      updateShopCartUI();
    }


    /* =========================================================
       FALLBACK CART
    ========================================================= */

    function addShopFallbackCart(
      product
    ) {

      const cart =
        readShopCart();


      const key = [
        String(product.id),
        String(shopModalColor || ""),
        String(shopModalSize || "Free Size")
      ].join("|");


      const existing =
        cart.find(function(item) {

          return String(
            item.key || ""
          ) === key;

        });


      if (existing) {

        existing.quantity =
          Number(
            existing.quantity || 0
          ) + 1;

      } else {

        cart.push({

          id: product.id,

          name: product.name,

          color:
            shopModalColor || null,

          size:
            shopModalSize || "Free Size",

          quantity: 1,

          key: key

        });

      }


      localStorage.setItem(
        "navidTowelCart",
        JSON.stringify(cart)
      );
    }


    /* =========================================================
       ADD PRODUCT
    ========================================================= */

    function addShopProductToCart(
      id
    ) {

      const product =
        getShopProductById(id);


      if (!product) {

        console.error(
          "محصول پیدا نشد:",
          id
        );

        return;
      }


      if (
        getShopProductStock(product) <= 0
      ) {

        alert(
          "این محصول در حال حاضر ناموجود است."
        );

        return;
      }


      openShopOptionModal(
        product
      );
    }


    /* =========================================================
       READ CART
    ========================================================= */

    function readShopCart() {

      try {

        const raw =
          localStorage.getItem(
            "navidTowelCart"
          );


        if (!raw) {
          return [];
        }


        const cart =
          JSON.parse(raw);


        return Array.isArray(cart)
          ? cart
          : [];

      } catch (error) {

        console.error(
          "خطا در خواندن سبد:",
          error
        );

        return [];
      }
    }


    /* =========================================================
       CART TOTAL FALLBACK
    ========================================================= */

    function calculateShopCartTotal(
      cart
    ) {

      let total = 0;


      cart.forEach(function(item) {

        const product =
          getShopProductById(
            item.id
          );


        if (!product) {
          return;
        }


        const quantity =
          Math.max(
            0,
            Number(
              item.quantity || 0
            )
          );


        total +=
          Number(
            product.price || 0
          ) *
          quantity;

      });


      return total;
    }


    /* =========================================================
       UPDATE CART UI
    ========================================================= */

    function updateShopCartUI() {

      const cart =
        readShopCart();


      let count = 0;


      cart.forEach(function(item) {

        count +=
          Math.max(
            0,
            Number(
              item.quantity || 0
            )
          );

      });


      let total = 0;


      if (
        typeof window.getCartTotal ===
        "function"
      ) {

        try {

          total =
            Number(
              window.getCartTotal()
            ) || 0;

        } catch (error) {

          total =
            calculateShopCartTotal(
              cart
            );

        }

      } else {

        total =
          calculateShopCartTotal(
            cart
          );

      }


      const totalElement =
        document.getElementById(
          "bottomCartTotal"
        );


      if (totalElement) {

        totalElement.textContent =
          formatShopPrice(
            total
          );

      }


      document
        .querySelectorAll(
          ".cartCount"
        )
        .forEach(function(element) {

          element.textContent =
            count.toLocaleString(
              "fa-IR"
            );

        });


      const bottomCart =
        document.querySelector(
          ".bottom-cart"
        );


      if (bottomCart) {

        bottomCart.classList.toggle(
          "active",
          count > 0
        );

      }
    }


    /* =========================================================
       GO TO CART
    ========================================================= */

    function goToCart() {

      const cart =
        readShopCart();


      const hasItems =
        cart.some(function(item) {

          return Number(
            item.quantity || 0
          ) > 0;

        });


      if (hasItems) {

        window.location.href =
          "cart.html";

      }

    }


    /* =========================================================
       SEARCH
    ========================================================= */

    function initShopSearch() {

      const input =
        document.getElementById(
          "searchInput"
        );


      if (!input) {
        return;
      }


      input.addEventListener(
        "input",
        function() {

          shopSearchText =
            this.value || "";

          renderShopProducts();

        }
      );
    }


    /* =========================================================
       MOBILE MENU
    ========================================================= */

    function initMobileMenu() {

      const mobileMenuButton =
        document.getElementById(
          "mobileMenuButton"
        );


      const mobileSideMenu =
        document.getElementById(
          "mobileSideMenu"
        );


      const mobileMenuOverlay =
        document.getElementById(
          "mobileMenuOverlay"
        );


      const mobileSideClose =
        document.getElementById(
          "mobileMenuClose"
        );


      function openMobileShopMenu() {

        if (mobileSideMenu) {

          mobileSideMenu.classList.add(
            "active"
          );

        }


        if (mobileMenuOverlay) {

          mobileMenuOverlay.classList.add(
            "active"
          );

        }


        document.body.classList.add(
          "menu-open"
        );
      }


      function closeMobileShopMenu() {

        if (mobileSideMenu) {

          mobileSideMenu.classList.remove(
            "active"
          );

        }


        if (mobileMenuOverlay) {

          mobileMenuOverlay.classList.remove(
            "active"
          );

        }


        document.body.classList.remove(
          "menu-open"
        );
      }


      if (mobileMenuButton) {

        mobileMenuButton.addEventListener(
          "click",
          openMobileShopMenu
        );

      }


      if (mobileSideClose) {

        mobileSideClose.addEventListener(
          "click",
          closeMobileShopMenu
        );

      }


      if (mobileMenuOverlay) {

        mobileMenuOverlay.addEventListener(
          "click",
          closeMobileShopMenu
        );

      }


      document
        .querySelectorAll(
          ".mobile-side-links a"
        )
        .forEach(function(link) {

          link.addEventListener(
            "click",
            function() {

              closeMobileShopMenu();

            }
          );

        });
    }


    /* =========================================================
       MOBILE CATEGORIES
    ========================================================= */

    function initMobileCategories() {

      const button =
        document.getElementById(
          "mobileCategoryButton"
        );


      const list =
        document.getElementById(
          "mobileCategoryList"
        );


      if (
        !button ||
        !list
      ) {
        return;
      }


      button.addEventListener(
        "click",
        function() {

          list.classList.toggle(
            "active"
          );


          button.classList.toggle(
            "active"
          );

        }
      );
    }


    /* =========================================================
       URL CATEGORY
    ========================================================= */

    function readShopURLCategory() {

      const params =
        new URLSearchParams(
          window.location.search
        );


      const category =
        params.get("category");


      if (!category) {
        return;
      }


      const valid =
        shopCategories.some(
          function(item) {

            return item.id === category;

          }
        );


      if (valid) {

        shopSelectedCategory =
          category;

      }
    }


    /* =========================================================
       OPEN CART BUTTONS
    ========================================================= */

    function initCartButtons() {

      document
        .querySelectorAll(".openCart")
        .forEach(function(button) {

          button.addEventListener(
            "click",
            function() {

              window.location.href =
                "cart.html";

            }
          );

        });
    }


    /* =========================================================
       ESC CLOSE MODAL
    ========================================================= */

    function initEscapeKey() {

      document.addEventListener(
        "keydown",
        function(event) {

          if (
            event.key === "Escape"
          ) {

            closeShopOptionModal();

          }

        }
      );
    }


    /* =========================================================
       INIT
    ========================================================= */

    function initShopPage() {

      console.log(
        "NavidTowel Shop: شروع..."
      );


      createShopOptionModal();


      readShopURLCategory();


      renderShopCategories();


      renderShopProducts();


      updateShopCartUI();


      initShopSearch();


      initMobileMenu();


      initMobileCategories();


      initCartButtons();


      initEscapeKey();


      console.log(
        "NavidTowel Shop: آماده شد."
      );

    }


    /* =========================================================
       DOM READY
    ========================================================= */

    if (
      document.readyState === "loading"
    ) {

      document.addEventListener(
        "DOMContentLoaded",
        initShopPage
      );

    } else {

      initShopPage();

    }


    /* =========================================================
       CART SYNC
    ========================================================= */

    window.addEventListener(
      "storage",
      function(event) {

        if (
          event.key === "navidTowelCart"
        ) {

          updateShopCartUI();

        }

      }
    );


    document.addEventListener(
      "visibilitychange",
      function() {

        if (!document.hidden) {

          updateShopCartUI();

        }

      }
    );

  </script>

</body>

</html>