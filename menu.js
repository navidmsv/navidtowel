```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>فروشگاه | NavidTowel</title>

  <link rel="stylesheet" href="style.css">

  <style>
    /* =========================================================
       SHOP PAGE
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

    .empty-products {
      grid-column: 1 / -1;
      text-align: center;
      padding: 60px 20px;
      color: var(--muted);
    }


    /* =========================================================
       HEADER CART — SQUARE
    ========================================================= */

    .header-actions {
      display: flex;
      align-items: center;
    }

    .header-actions .cart-btn {
      position: relative !important;
      width: 48px !important;
      height: 48px !important;
      min-width: 48px !important;
      padding: 0 !important;
      border: 1px solid var(--border) !important;
      border-radius: 14px !important;
      background: #fff !important;
      color: var(--green) !important;
      display: grid !important;
      place-items: center !important;
      cursor: pointer !important;
      font-size: 21px !important;
      box-shadow: 0 5px 18px rgba(0,0,0,.06);
      transition: .2s ease;
    }

    .header-actions .cart-btn:hover {
      transform: translateY(-2px);
      border-color: var(--green) !important;
      box-shadow: 0 9px 25px rgba(0,0,0,.10);
    }

    .header-actions .cart-btn > span {
      display: none !important;
    }

    .header-actions .cartCount {
      position: absolute !important;
      top: -7px !important;
      right: -7px !important;
      width: 22px !important;
      height: 22px !important;
      border-radius: 50% !important;
      background: #e53935 !important;
      color: #fff !important;
      display: grid !important;
      place-items: center !important;
      font-family: Arial, sans-serif !important;
      font-size: 11px !important;
      font-weight: 800 !important;
      line-height: 1 !important;
      border: 2px solid #fff !important;
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
      z-index: 99990 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 15px;
      background: #fff;
      border: 1px solid var(--border);
      border-radius: 18px;
      box-shadow: 0 15px 45px rgba(0,0,0,.14);
      padding: 12px 14px;
      opacity: 0;
      visibility: hidden;
      transform: translate3d(0,20px,0);
      transition:
        opacity .25s ease,
        visibility .25s ease,
        transform .25s ease;
    }

    .bottom-cart.active {
      opacity: 1;
      visibility: visible;
      transform: translate3d(0,0,0);
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
      background: rgba(0,0,0,.45);
      opacity: 0;
      visibility: hidden;
      transition: .2s ease;
    }

    .shop-option-overlay.active {
      opacity: 1;
      visibility: visible;
    }

    .shop-option-modal {
      width: min(430px,100%);
      max-height: 90vh;
      overflow-y: auto;
      background: #fff;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 25px 70px rgba(0,0,0,.25);
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


    /* =========================================================
       MOBILE MENU — 6 BUTTONS
    ========================================================= */

    .mobile-side-bottom {
      display: grid !important;
      grid-template-columns: repeat(3,1fr) !important;
      gap: 9px !important;
      padding: 14px !important;
      border-top: 1px solid var(--border);
    }

    .mobile-bottom-button {
      position: relative;
      min-height: 76px;
      border: 1px solid var(--border);
      border-radius: 17px;
      background: #fff;
      color: var(--text);
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 7px;
      cursor: pointer;
      font-family: Tahoma, Arial, sans-serif;
      transition: .2s ease;
    }

    .mobile-bottom-button:hover,
    .mobile-bottom-button:active {
      border-color: var(--green);
      color: var(--green);
      background: var(--green-soft);
      transform: translateY(-2px);
    }

    .mobile-bottom-button > span {
      width: 34px;
      height: 34px;
      border-radius: 11px;
      background: var(--green-soft);
      color: var(--green);
      display: grid;
      place-items: center;
      font-size: 18px;
      position: relative;
    }

    .mobile-bottom-button small {
      font-size: 10px;
      font-weight: 700;
      white-space: nowrap;
    }

    .mobile-cart-icon .cartCount {
      position: absolute;
      top: -7px;
      right: -7px;
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background: #e53935;
      color: #fff;
      display: grid;
      place-items: center;
      font-family: Arial,sans-serif;
      font-size: 9px;
      font-weight: 800;
      border: 2px solid #fff;
    }


    /* =========================================================
       CART PREVIEW
    ========================================================= */

    .cart-preview-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,.38);
      z-index: 99998;
      opacity: 0;
      visibility: hidden;
      transition: .25s ease;
    }

    .cart-preview-overlay.active {
      opacity: 1;
      visibility: visible;
    }

    .cart-preview {
      position: fixed;
      top: 0;
      right: 0;
      width: min(390px,92vw);
      height: 100vh;
      background: #fff;
      z-index: 99999;
      box-shadow: -15px 0 50px rgba(0,0,0,.15);
      transform: translateX(105%);
      transition: transform .3s ease;
      display: flex;
      flex-direction: column;
      font-family: Tahoma,Arial,sans-serif;
    }

    .cart-preview.active {
      transform: translateX(0);
    }

    .cart-preview-header {
      padding: 20px;
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .cart-preview-header h3 {
      margin: 0;
      color: var(--text);
      font-size: 18px;
    }

    .cart-preview-close {
      width: 36px;
      height: 36px;
      border: 0;
      border-radius: 50%;
      background: #f3f3f3;
      color: #555;
      font-size: 22px;
      cursor: pointer;
    }

    .cart-preview-items {
      flex: 1;
      overflow-y: auto;
      padding: 15px;
    }

    .cart-preview-empty {
      min-height: 250px;
      display: grid;
      place-items: center;
      text-align: center;
      color: var(--muted);
      font-size: 14px;
    }

    .cart-preview-item {
      display: flex;
      align-items: center;
      gap: 11px;
      padding: 11px 0;
      border-bottom: 1px solid #eee;
    }

    .cart-preview-item img {
      width: 62px;
      height: 62px;
      border-radius: 12px;
      object-fit: cover;
      background: var(--cream);
      flex-shrink: 0;
    }

    .cart-preview-item-info {
      min-width: 0;
      flex: 1;
    }

    .cart-preview-item-name {
      color: var(--text);
      font-size: 13px;
      font-weight: 700;
      line-height: 1.6;
      margin-bottom: 5px;
    }

    .cart-preview-item-meta {
      color: var(--muted);
      font-size: 10px;
      line-height: 1.8;
    }

    .cart-preview-item-price {
      color: var(--green);
      font-size: 12px;
      font-weight: 800;
      margin-top: 5px;
    }

    .cart-preview-footer {
      padding: 16px;
      border-top: 1px solid var(--border);
      background: #fff;
    }

    .cart-preview-total-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .cart-preview-total-label {
      color: var(--muted);
      font-size: 12px;
    }

    .cart-preview-total {
      color: var(--green);
      font-size: 17px;
      font-weight: 800;
    }

    .cart-preview-go {
      width: 100%;
      height: 46px;
      border: 0;
      border-radius: 13px;
      background: var(--green);
      color: #fff;
      font-family: Tahoma,Arial,sans-serif;
      font-weight: 800;
      cursor: pointer;
    }


    /* =========================================================
       RESPONSIVE
    ========================================================= */

    @media (max-width:1000px) {
      .products-grid {
        grid-template-columns: repeat(3,minmax(0,1fr));
      }
    }

    @media (max-width:700px) {

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
        grid-template-columns: repeat(2,minmax(0,1fr));
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

      .bottom-cart {
        left: 10px !important;
        right: 10px !important;
        bottom: 10px !important;
      }

      .header-actions .cart-btn {
        width: 44px !important;
        height: 44px !important;
        min-width: 44px !important;
      }

      .mobile-side-bottom {
        grid-template-columns: repeat(3,1fr) !important;
      }

      .mobile-bottom-button {
        min-height: 70px;
      }

      .mobile-bottom-button small {
        font-size: 9px;
      }
    }

    @media (max-width:430px) {

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

      .cart-preview {
        width: 94vw;
      }
    }
  </style>
</head>


<body class="home-page">


<!-- =========================================================
     HEADER
========================================================= -->

<header class="header">

  <div class="container header-inner">

    <button
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

      <a href="index.html">خانه</a>

      <a href="shop.html">فروشگاه</a>

      <div class="nav-category">

        <button class="nav-category-btn">
          دسته‌بندی‌ها
          <span>⌄</span>
        </button>

        <div class="category-dropdown">
          <a href="shop.html?category=men">حوله مردانه</a>
          <a href="shop.html?category=women">حوله زنانه</a>
          <a href="shop.html?category=kids">حوله بچگانه</a>
          <a href="shop.html?category=bath">حوله حمامی</a>
          <a href="shop.html?category=pool">حوله استخری</a>
          <a href="shop.html?category=meter">حوله متری</a>
          <a href="shop.html?category=robe">تن‌پوش</a>
        </div>

      </div>

      <a href="index.html#about">درباره ما</a>
      <a href="index.html#contact">تماس با ما</a>

    </nav>


    <!-- CART -->
    <div class="header-actions">

      <button
        type="button"
        class="cart-btn openCart"
        aria-label="Shopping Cart"
        title="Shopping Cart">

        🛒

        <b class="cartCount">0</b>

      </button>

    </div>

  </div>

</header>


<!-- =========================================================
     MOBILE MENU
========================================================= -->

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


  <!-- 6 BUTTONS -->

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

      <span class="mobile-cart-icon">

        🛒

        <b class="cartCount">
          0
        </b>

      </span>

      <small>
        سبد خرید
      </small>

    </button>


    <a
      href="index.html#discount"
      class="mobile-bottom-button">

      <span>
        %
      </span>

      <small>
        تخفیفات
      </small>

    </a>


    <a
      href="#"
      class="mobile-bottom-button">

      <span>
        ⌕
      </span>

      <small>
        پیگیری سفارش
      </small>

    </a>


    <a
      href="index.html#about"
      class="mobile-bottom-button">

      <span>
        i
      </span>

      <small>
        درباره ما
      </small>

    </a>


    <a
      href="index.html#contact"
      class="mobile-bottom-button">

      <span>
        ☏
      </span>

      <small>
        تماس با ما
      </small>

    </a>

  </div>

</aside>


<!-- =========================================================
     SHOP
========================================================= -->

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
  </section>

</main>


<!-- =========================================================
     BOTTOM CART
========================================================= -->

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


<!-- =========================================================
     FOOTER
========================================================= -->

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


<!-- =========================================================
     MAIN SCRIPTS
========================================================= -->

<script src="products.js"></script>
<script src="script.js"></script>


<script>
"use strict";


/* =========================================================
   VARIABLES
========================================================= */

let shopSelectedCategory = "all";
let shopSearchText = "";
let shopModalProduct = null;
let shopModalColor = null;
let shopModalSize = "Free Size";


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
   PRODUCTS
========================================================= */

function getShopProducts() {

  if (
    typeof products !== "undefined" &&
    Array.isArray(products)
  ) {
    return products;
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
    "products.js لود نشده یا آرایه products پیدا نشد."
  );

  return [];
}


/* =========================================================
   FIND PRODUCT
========================================================= */

function getShopProductById(id) {

  const list = getShopProducts();

  return list.find(function(product) {

    return String(product.id) === String(id);

  }) || null;
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
    product.images.length
  ) {

    const validImage =
      product.images.find(function(image) {

        return (
          image &&
          String(image) !== "0"
        );

      });

    if (validImage) {
      return validImage;
    }
  }

  if (
    product.image &&
    String(product.image) !== "0"
  ) {
    return product.image;
  }

  return "";
}


/* =========================================================
   CATEGORIES
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
    product.colors.length
  ) {

    return product.colors.reduce(
      function(total,color) {

        return total +
          Math.max(
            0,
            Number(color.stock || 0)
          );

      },
      0
    );

  }

  if (
    Number.isFinite(
      Number(product.stock)
    )
  ) {

    return Math.max(
      0,
      Number(product.stock)
    );

  }

  return 0;
}


/* =========================================================
   PRICE
========================================================= */

function formatShopPrice(value) {

  return Number(
    value || 0
  ).toLocaleString("fa-IR") +
  " تومان";

}


/* =========================================================
   CATEGORY COUNT
========================================================= */

function getShopCategoryCount(categoryId) {

  const list =
    getShopProducts();

  if (categoryId === "all") {

    return list.filter(function(product) {

      return product.active !== false;

    }).length;

  }

  return list.filter(function(product) {

    if (product.active === false) {
      return false;
    }

    return getShopProductCategories(product)
      .includes(categoryId);

  }).length;
}


/* =========================================================
   RENDER CATEGORIES
========================================================= */

function renderShopCategories() {

  const container =
    document.getElementById(
      "categoryList"
    );

  if (!container) {
    return;
  }

  container.innerHTML =
    shopCategories.map(function(category) {

      return `
        <button
          type="button"
          class="category-btn ${
            shopSelectedCategory === category.id
              ? "active"
              : ""
          }"
          data-category="${category.id}">

          ${category.name}

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
            button.dataset.category;

          renderShopCategories();
          renderShopProducts();

        }
      );

    });

}


/* =========================================================
   FILTER
========================================================= */

function getFilteredShopProducts() {

  const list =
    getShopProducts();

  const search =
    String(shopSearchText || "")
      .trim()
      .toLowerCase();


  return list.filter(function(product) {

    if (product.active === false) {
      return false;
    }

    const categoryMatch =
      shopSelectedCategory === "all" ||
      getShopProductCategories(product)
        .includes(shopSelectedCategory);

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


      return `

        <article class="product-card">

          <div
            class="product-image-wrap"
            data-product-id="${product.id}">

            ${
              product.badge
                ? `
                  <span class="product-badge">
                    ${product.badge}
                  </span>
                `
                : ""
            }


            ${
              image
                ? `
                  <img
                    src="${image}"
                    alt="${String(
                      product.name || "محصول"
                    ).replace(/"/g,"&quot;")}"
                    loading="lazy">
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
              ${product.name || "محصول"}
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
                data-add-product="${product.id}"
                aria-label="افزودن به سبد">

                +

              </button>

            </div>

          </div>

        </article>

      `;

    }).join("");


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


  grid
    .querySelectorAll(".add-to-cart-btn")
    .forEach(function(button) {

      button.addEventListener(
        "click",
        function(event) {

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

  window.location.href =
    "product.html?id=" +
    encodeURIComponent(id);

}


/* =========================================================
   OPTION MODAL
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
          class="shop-option-close">

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


  document.body.appendChild(overlay);


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


  document
    .getElementById("shopOptionClose")
    .addEventListener(
      "click",
      closeShopOptionModal
    );


  document
    .getElementById("shopOptionConfirm")
    .addEventListener(
      "click",
      confirmShopAdd
    );

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

function openShopOptionModal(product) {

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


  image.src =
    getShopProductImage(product);

  image.alt =
    product.name || "محصول";

  title.textContent =
    product.name || "محصول";


  const colors =
    Array.isArray(product.colors)
      ? product.colors
      : [];


  if (colors.length) {

    colorArea.style.display =
      "";


    const availableColors =
      colors.filter(function(color) {

        return Number(color.stock || 0) > 0;

      });


    colorList.innerHTML =
      colors.map(function(color,index) {

        const disabled =
          Number(color.stock || 0) <= 0;

        return `

          <button
            type="button"
            class="shop-option-button"
            data-color-index="${index}"
            ${disabled ? "disabled" : ""}>

            ${color.name || "بدون نام"}

          </button>

        `;

      }).join("");


    if (availableColors.length) {

      shopModalColor =
        String(
          availableColors[0].name || ""
        );

    }


    colorList
      .querySelectorAll(".shop-option-button")
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

          button.classList.add("active");

        }


        button.addEventListener(
          "click",
          function() {

            shopModalColor =
              String(
                color.name || ""
              );


            colorList
              .querySelectorAll(".shop-option-button")
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


    if (shopModalColor) {

      const selectedColor =
        availableColors.find(function(color) {

          return String(
            color.name || ""
          ) === shopModalColor;

        });


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

    }

  } else {

    colorArea.style.display =
      "none";

  }


  const sizes =
    Array.isArray(product.sizes) &&
    product.sizes.length
      ? product.sizes
      : ["Free Size"];


  shopModalSize =
    String(sizes[0]);


  sizeList.innerHTML =
    sizes.map(function(size,index) {

      return `

        <button
          type="button"
          class="shop-option-button ${
            index === 0
              ? "active"
              : ""
          }"
          data-size="${String(size).replace(/"/g,"&quot;")}">

          ${size}

        </button>

      `;

    }).join("");


  sizeList
    .querySelectorAll(".shop-option-button")
    .forEach(function(button) {

      button.addEventListener(
        "click",
        function() {

          shopModalSize =
            button.dataset.size;


          sizeList
            .querySelectorAll(".shop-option-button")
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

}


/* =========================================================
   ADD FROM MODAL
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


  if (colors.length) {

    const selected =
      colors.find(function(color) {

        return String(
          color.name || ""
        ) === String(
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


  if (
    typeof window.addToCart ===
    "function"
  ) {

    window.addToCart(
      product.id,
      shopModalColor || null,
      shopModalSize || "Free Size"
    );

  } else {

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


  closeShopOptionModal();

  updateShopCartUI();

}


/* =========================================================
   ADD BUTTON
========================================================= */

function addShopProductToCart(id) {

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
   CART
========================================================= */

function readShopCart() {

  try {

    const cart =
      JSON.parse(
        localStorage.getItem(
          "navidTowelCart"
        ) || "[]"
      );


    return Array.isArray(cart)
      ? cart
      : [];

  } catch (error) {

    return [];

  }

}


/* =========================================================
   CART TOTAL
========================================================= */

function calculateShopCartTotal(cart) {

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
        Number(item.quantity || 0)
      );


    total +=
      Number(product.price || 0) *
      quantity;

  });


  return total;

}


/* =========================================================
   CART UI
========================================================= */

function updateShopCartUI() {

  const cart =
    readShopCart();


  let count = 0;


  cart.forEach(function(item) {

    count +=
      Math.max(
        0,
        Number(item.quantity || 0)
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
      formatShopPrice(total);

  }


  document
    .querySelectorAll(".cartCount")
    .forEach(function(element) {

      element.textContent =
        count.toLocaleString("en-US");

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


  const preview =
    document.getElementById(
      "cartPreview"
    );


  if (
    preview &&
    preview.classList.contains("active")
  ) {

    renderCartPreview();

  }

}


/* =========================================================
   GO CART
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

const shopSearchInput =
  document.getElementById(
    "searchInput"
  );


if (shopSearchInput) {

  shopSearchInput.addEventListener(
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


/* =========================================================
   MOBILE CATEGORIES
========================================================= */

const mobileCategoryButton =
  document.getElementById(
    "mobileCategoryButton"
  );


const mobileCategoryList =
  document.getElementById(
    "mobileCategoryList"
  );


if (
  mobileCategoryButton &&
  mobileCategoryList
) {

  mobileCategoryButton.addEventListener(
    "click",
    function() {

      mobileCategoryList.classList.toggle(
        "active"
      );

      mobileCategoryButton.classList.toggle(
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


  if (
    category &&
    shopCategories.some(function(item) {

      return item.id === category;

    })
  ) {

    shopSelectedCategory =
      category;

  }

}


/* =========================================================
   CART PREVIEW
========================================================= */

function createCartPreview() {

  if (
    document.getElementById(
      "cartPreviewOverlay"
    )
  ) {
    return;
  }


  const overlay =
    document.createElement("div");

  overlay.id =
    "cartPreviewOverlay";

  overlay.className =
    "cart-preview-overlay";


  overlay.innerHTML = `

    <aside
      class="cart-preview"
      id="cartPreview">


      <div class="cart-preview-header">

        <h3>
          Shopping Cart
        </h3>


        <button
          type="button"
          class="cart-preview-close"
          id="cartPreviewClose">

          ×

        </button>

      </div>


      <div
        class="cart-preview-items"
        id="cartPreviewItems">
      </div>


      <div class="cart-preview-footer">

        <div class="cart-preview-total-row">

          <span class="cart-preview-total-label">
            Total
          </span>

          <span
            class="cart-preview-total"
            id="cartPreviewTotal">

            0 تومان

          </span>

        </div>


        <button
          type="button"
          class="cart-preview-go"
          id="cartPreviewGo">

          ادامه سفارش

        </button>

      </div>

    </aside>

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

        closeCartPreview();

      }

    }
  );


  document
    .getElementById(
      "cartPreviewClose"
    )
    .addEventListener(
      "click",
      closeCartPreview
    );


  document
    .getElementById(
      "cartPreviewGo"
    )
    .addEventListener(
      "click",
      function() {

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
    );

}


/* =========================================================
   OPEN CART PREVIEW
========================================================= */

function openCartPreview() {

  createCartPreview();

  renderCartPreview();


  const overlay =
    document.getElementById(
      "cartPreviewOverlay"
    );


  const preview =
    document.getElementById(
      "cartPreview"
    );


  if (!overlay || !preview) {
    return;
  }


  overlay.classList.add(
    "active"
  );


  preview.classList.add(
    "active"
  );


  document.body.style.overflow =
    "hidden";

}


/* =========================================================
   CLOSE CART PREVIEW
========================================================= */

function closeCartPreview() {

  const overlay =
    document.getElementById(
      "cartPreviewOverlay"
    );


  const preview =
    document.getElementById(
      "cartPreview"
    );


  if (overlay) {

    overlay.classList.remove(
      "active"
    );

  }


  if (preview) {

    preview.classList.remove(
      "active"
    );

  }


  document.body.style.overflow =
    "";

}


/* =========================================================
   RENDER CART PREVIEW
========================================================= */

function renderCartPreview() {

  const container =
    document.getElementById(
      "cartPreviewItems"
    );


  const totalElement =
    document.getElementById(
      "cartPreviewTotal"
    );


  if (!container) {
    return;
  }


  const cart =
    readShopCart();


  if (!cart.length) {

    container.innerHTML = `

      <div class="cart-preview-empty">

        سبد خرید شما خالی است

      </div>

    `;


    if (totalElement) {

      totalElement.textContent =
        "0 تومان";

    }

    return;
  }


  let total = 0;


  container.innerHTML =
    cart.map(function(item) {

      const product =
        getShopProductById(
          item.id
        );


      if (!product) {
        return "";
      }


      const quantity =
        Math.max(
          0,
          Number(item.quantity || 0)
        );


      const itemTotal =
        Number(product.price || 0) *
        quantity;


      total += itemTotal;


      const image =
        getShopProductImage(
          product
        );


      return `

        <div class="cart-preview-item">

          ${
            image
              ? `
                <img
                  src="${image}"
                  alt="${String(
                    product.name || "محصول"
                  ).replace(/"/g,"&quot;")}">
              `
              : `
                <div
                  style="
                    width:62px;
                    height:62px;
                    border-radius:12px;
                    background:var(--cream);
                    display:grid;
                    place-items:center;
                    color:#999;
                    font-size:10px;
                    flex-shrink:0;
                  ">

                  بدون تصویر

                </div>
              `
          }


          <div class="cart-preview-item-info">

            <div class="cart-preview-item-name">

              ${product.name || "محصول"}

            </div>


            <div class="cart-preview-item-meta">

              ${
                item.color
                  ? "رنگ: " + item.color
                  : ""
              }

              ${
                item.size
                  ? " | سایز: " + item.size
                  : ""
              }

              <br>

              تعداد:
              ${quantity.toLocaleString("en-US")}

            </div>


            <div class="cart-preview-item-price">

              ${Number(
                itemTotal
              ).toLocaleString("fa-IR")}

              تومان

            </div>

          </div>

        </div>

      `;

    }).join("");


  if (totalElement) {

    totalElement.textContent =
      Number(total)
        .toLocaleString("fa-IR") +
      " تومان";

  }

}


/* =========================================================
   ALL CART BUTTONS
========================================================= */

document.addEventListener(
  "click",
  function(event) {

    const button =
      event.target.closest(
        ".openCart"
      );


    if (!button) {
      return;
    }


    event.preventDefault();

    openCartPreview();

  }
);


/* =========================================================
   ESC CLOSE
========================================================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Escape"
    ) {

      closeCartPreview();

    }

  }
);


/* =========================================================
   INIT
========================================================= */

function initShopPage() {

  createShopOptionModal();

  createCartPreview();

  readShopURLCategory();

  renderShopCategories();

  renderShopProducts();

  updateShopCartUI();

}


/* =========================================================
   START
========================================================= */

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


/* =========================================================
   STORAGE SYNC
========================================================= */

window.addEventListener(
  "storage",
  function(event) {

    if (
      event.key ===
      "navidTowelCart"
    ) {

      updateShopCartUI();

    }

  }
);


/* =========================================================
   VISIBILITY SYNC
========================================================= */

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
```
