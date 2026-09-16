/* =========================================================
   NAVIDTOWEL — SHARED HEADER + MENU + CART
========================================================= */

(function () {
  "use strict";

  /* ================= CREATE MENU ================= */

  function createMenu() {
    const mount = document.getElementById("siteMenu");
    if (!mount) return;

    mount.innerHTML = `
    <header class="header">
      <div class="container header-inner">

        <button type="button" class="mobile-menu-button" id="mobileMenuButton" aria-label="باز کردن منو">
          <span></span><span></span><span></span>
        </button>

        <a href="index.html" class="logo">Navid<span>Towel</span></a>

        <nav class="nav">
          <a href="index.html">خانه</a>
          <a href="shop.html">فروشگاه</a>

          <div class="nav-category">
            <button type="button" class="nav-category-btn">دسته‌بندی‌ها <span>⌄</span></button>

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

        <div class="header-actions">
          <a href="shop.html" class="all-products-btn">
            <span>◈</span>
            <b>همه محصولات</b>
          </a>

          <button type="button" class="cart-btn openCart" aria-label="سبد خرید">
            <span class="cart-icon">🛒</span>
            <span class="cart-label">سبد خرید</span>
            <b class="cartCount">0</b>
          </button>
        </div>

      </div>
    </header>

    <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>

    <aside class="mobile-side-menu navid-compact-menu" id="mobileSideMenu">

      <div class="mobile-side-header">
        <div class="mobile-side-brand">
          <div class="mobile-side-logo">N</div>
          <div>
            <strong>NavidTowel</strong>
            <span>فروشگاه حوله و کالای خواب</span>
          </div>
        </div>

        <button type="button" class="mobile-side-close" id="mobileMenuClose">×</button>
      </div>

      <div class="navid-top-buttons">
        <a href="index.html" class="navid-mini-button"><span>⌂</span><small>خانه</small></a>
        <a href="shop.html" class="navid-mini-button"><span>◈</span><small>همه محصولات</small></a>

        <button type="button" class="navid-mini-button openCart" aria-label="سبد خرید">
          <span class="cart-icon">🛒</span>
          <small>سبد خرید</small>
          <b class="cartCount">0</b>
        </button>
      </div>

      <nav class="mobile-side-links">

        <div class="mobile-side-category">
          <button type="button" class="mobile-side-link mobile-side-category-button" id="mobileCategoryButton">
            <span class="side-icon">☰</span>
            <span>دسته‌بندی‌ها</span>
            <span class="side-arrow" id="mobileCategoryArrow">⌄</span>
          </button>

          <div class="mobile-side-category-list" id="mobileCategoryList">
            <a href="shop.html?category=men">مردانه</a>
            <a href="shop.html?category=women">زنانه</a>
            <a href="shop.html?category=kids">بچگانه</a>
            <a href="shop.html?category=bath">حمامی</a>
            <a href="shop.html?category=pool">استخری</a>
            <a href="shop.html?category=meter">متری</a>
            <a href="shop.html?category=robe">تن‌پوش</a>
          </div>
        </div>

        <a href="discount.html" class="mobile-side-link mobile-side-discount">
          <span class="side-icon">%</span>
          <span>تخفیفات ویژه</span>
          <span class="discount-badge">ویژه</span>
        </a>

        <a href="tracking.html" class="mobile-side-link">
          <span class="side-icon">⌕</span>
          <span>پیگیری سفارش</span>
        </a>

        <a href="index.html#about" class="mobile-side-link">
          <span class="side-icon">i</span>
          <span>درباره ما</span>
        </a>

      </nav>

      <div class="navid-bottom-buttons">
        <a href="index.html#contact" class="navid-mini-button"><span>☏</span><small>تماس</small></a>
        <a href="https://instagram.com/navidtowel" target="_blank" rel="noopener noreferrer" class="navid-mini-button"><span>◎</span><small>اینستاگرام</small></a>
        <a href="https://t.me/navidtowel" target="_blank" rel="noopener noreferrer" class="navid-mini-button"><span>➤</span><small>تلگرام</small></a>
      </div>

    </aside>

    <style>
      .header-actions{display:flex !important;align-items:center !important;justify-content:center !important;gap:7px !important;}

      .header-actions .all-products-btn{height:46px !important;min-height:46px !important;padding:0 11px !important;border:1px solid rgba(255,255,255,.75) !important;border-radius:12px !important;background:rgba(255,255,255,.52) !important;color:#34452f !important;display:inline-flex !important;align-items:center !important;justify-content:center !important;gap:5px !important;text-decoration:none !important;box-shadow:0 6px 20px rgba(52,69,47,.09), inset 0 1px 0 rgba(255,255,255,.95) !important;backdrop-filter:blur(18px) saturate(135%) !important;-webkit-backdrop-filter:blur(18px) saturate(135%) !important;}
      .header-actions .all-products-btn span{font-size:13px;}
      .header-actions .all-products-btn b{font-size:10px;font-weight:800;}

      .header-actions .cart-btn{position:relative !important;width:48px !important;height:48px !important;min-width:48px !important;min-height:48px !important;padding:0 !important;border:1px solid #fff !important;border-radius:12px !important;background:rgba(52,69,47,.88) !important;color:#ffffff !important;display:flex !important;align-items:center !important;justify-content:center !important;cursor:pointer !important;box-shadow:0 7px 20px rgba(52,69,47,.18), inset 0 1px 0 rgba(255,255,255,.28) !important;backdrop-filter:blur(18px) saturate(140%) !important;-webkit-backdrop-filter:blur(18px) saturate(140%) !important;}
      .header-actions .cart-btn:hover{background:rgba(52,69,47,.94) !important;transform:translateY(-1px);}

      .header-actions .cart-icon{width:22px !important;height:22px !important;display:flex !important;align-items:center !important;justify-content:center !important;font-size:17px !important;line-height:1 !important;background:transparent !important;border:0 !important;box-shadow:none !important;}
      .header-actions .cart-label{display:none !important;}

      .header-actions .cartCount{position:absolute !important;top:-5px !important;right:-5px !important;min-width:17px !important;width:17px !important;height:17px !important;padding:0 !important;border-radius:50% !important;display:flex !important;align-items:center !important;justify-content:center !important;background:#d4af37 !important;color:#ffffff !important;border:1px solid rgba(255,255,255,.8) !important;box-shadow:0 3px 10px rgba(52,69,47,.2), inset 0 1px 1px rgba(255,255,255,.3) !important;backdrop-filter:blur(12px) !important;-webkit-backdrop-filter:blur(12px) !important;font-family:Arial,sans-serif !important;font-size:8px !important;font-weight:800 !important;line-height:1 !important;z-index:20 !important;}

      @media (max-width: 800px) {
        .navid-compact-menu{width:min(82vw,330px) !important;background:linear-gradient(160deg, rgba(255,254,250,.98), rgba(245,245,238,.97)) !important;border-left:1px solid rgba(255,255,255,.95);box-shadow:-15px 0 40px rgba(25,40,29,.15);backdrop-filter:blur(25px) saturate(140%);-webkit-backdrop-filter:blur(25px) saturate(140%);}
        .navid-compact-menu .mobile-side-header{padding:17px 15px !important;}
        .navid-compact-menu .mobile-side-logo{width:42px !important;height:42px !important;border-radius:13px !important;font-size:18px;}
        .navid-compact-menu .mobile-side-brand strong{font-size:15px;}
        .navid-compact-menu .mobile-side-brand span{font-size:9px;}

        .navid-top-buttons{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:10px 12px 7px;}

        .navid-top-buttons .navid-mini-button{position:relative;min-width:0;height:52px !important;border:1px solid rgba(255,255,255,.8) !important;border-radius:13px !important;background:rgba(255,255,255,.48) !important;color:#34452f !important;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;text-decoration:none;cursor:pointer;box-shadow:0 5px 16px rgba(52,69,47,.07), inset 0 1px 0 rgba(255,255,255,.9);backdrop-filter:blur(18px) saturate(135%);-webkit-backdrop-filter:blur(18px) saturate(135%);}
        .navid-top-buttons .navid-mini-button span{font-size:16px;line-height:17px;}
        .navid-top-buttons .navid-mini-button small{font-size:8px;font-weight:800;white-space:nowrap;}

        .navid-top-buttons .openCart{background:rgba(52,69,47,.88) !important;color:#ffffff !important;border:1px solid rgba(255,255,255,.82) !important;box-shadow:0 7px 20px rgba(52,69,47,.2), inset 0 1px 0 rgba(255,255,255,.25) !important;backdrop-filter:blur(18px) saturate(140%) !important;-webkit-backdrop-filter:blur(18px) saturate(140%) !important;}
        .navid-top-buttons .openCart:hover{background:rgba(52,69,47,.94) !important;}

        .navid-top-buttons .openCart .cart-icon{width:20px !important;height:20px !important;display:flex !important;align-items:center !important;justify-content:center !important;font-size:16px !important;line-height:1 !important;background:transparent !important;border:0 !important;box-shadow:none !important;}

        .navid-top-buttons .openCart .cartCount{position:absolute !important;top:-5px !important;right:-5px !important;min-width:17px !important;width:17px !important;height:17px !important;padding:0 !important;border-radius:50% !important;display:flex !important;align-items:center !important;justify-content:center !important;background:#d4af37 !important;color:#ffffff !important;border:1px solid #fff !important;box-shadow:0 3px 10px rgba(52,69,47,.16), inset 0 1px 1px rgba(255,255,255,.9) !important;backdrop-filter:blur(12px) !important;-webkit-backdrop-filter:blur(12px) !important;font-family:Arial,sans-serif !important;font-size:8px !important;font-weight:800 !important;line-height:1 !important;z-index:20 !important;}

        .header-actions .all-products-btn{display:none !important;}

        .navid-compact-menu .mobile-side-links{padding:5px 11px 8px !important;}
        .navid-compact-menu .mobile-side-link{min-height:45px !important;margin:3px 0 !important;padding:7px 9px !important;border-radius:13px !important;}
        .navid-compact-menu .mobile-side-link .side-icon{width:32px;height:32px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;background:rgba(52,69,47,.07);color:#34452f;font-size:14px;}
        .navid-compact-menu .mobile-side-link:hover{background:rgba(52,69,47,.07) !important;}

        .navid-compact-menu .mobile-side-category-list{margin:0 4px 5px;border-radius:12px;background:rgba(52,69,47,.035);overflow:hidden;}
        .navid-compact-menu .mobile-side-category-list a{min-height:34px;padding:7px 14px !important;font-size:12px;border-bottom:1px solid rgba(52,69,47,.05);}

        .navid-compact-menu .discount-badge{margin-right:auto;padding:3px 7px;border-radius:20px;background:#34452f;color:#fff;font-size:8px;font-weight:800;}

        .navid-bottom-buttons{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:auto 12px 12px;padding:7px;border:1px solid rgba(255,255,255,.9);border-radius:17px;background:rgba(255,255,255,.65);box-shadow:0 8px 22px rgba(30,50,38,.08);}
        .navid-bottom-buttons .navid-mini-button{height:48px;border:0;background:transparent;}
        .navid-bottom-buttons .navid-mini-button span{font-size:16px;}
        .navid-bottom-buttons .navid-mini-button small{font-size:8px;}
      }

      html.cart-open, body.cart-open,
      html.menu-open, body.menu-open{overflow:hidden;}
    </style>
    `;

    setupMenu();
    setupCartPreview();
  }

  /* ================= MOBILE / CATEGORY MENU ================= */

  function setupMenu() {
    const menu = document.getElementById("mobileSideMenu");
    const overlay = document.getElementById("mobileMenuOverlay");
    const openButton = document.getElementById("mobileMenuButton");
    const closeButton = document.getElementById("mobileMenuClose");
    const categoryButton = document.getElementById("mobileCategoryButton");
    const category = document.querySelector(".mobile-side-category");
    const desktopCategory = document.querySelector(".nav-category");
    const desktopCategoryButton = document.querySelector(".nav-category-btn");

    function openMenu() {
      if (!menu) return;

      menu.classList.add("active");
      if (overlay) overlay.classList.add("active");

      document.body.classList.add("menu-open");
      document.documentElement.classList.add("menu-open");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      if (!menu) return;

      menu.classList.remove("active");
      if (overlay) overlay.classList.remove("active");

      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
      document.body.style.overflow = "";

      if (category) category.classList.remove("open");

      const arrow = document.getElementById("mobileCategoryArrow");
      if (arrow) arrow.classList.remove("open");
    }

    if (openButton) {
      openButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        openMenu();
      });
    }

    if (closeButton) {
      closeButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        closeMenu();
      });
    }

    if (overlay) overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    if (categoryButton && category) {
      categoryButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        const isOpen = category.classList.toggle("open");

        const arrow = document.getElementById("mobileCategoryArrow");
        if (arrow) arrow.classList.toggle("open", isOpen);
      });
    }

    if (menu) {
      menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
      });
    }

    if (desktopCategoryButton && desktopCategory) {
      desktopCategoryButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        desktopCategory.classList.toggle("open");
      });

      document.addEventListener("click", function (event) {
        if (!desktopCategory.contains(event.target)) {
          desktopCategory.classList.remove("open");
        }
      });
    }
  }

  /* ================= CONNECT CART BUTTONS TO REAL CART ================= */
  /*
    این بخش دست‌نخورده مونده چون منطقش درسته: روی دکمه‌های .openCart
    با فاز capture + stopImmediatePropagation گوش می‌ده تا listener
    خود cart.js روی همون دکمه اجرا نشه، و به‌جاش openRealCart را صدا
    می‌زنه که منتظر آماده‌شدن window.openCart (از cart.js) می‌مونه.
  */

  function setupCartPreview() {
    document.querySelectorAll(".openCart").forEach(function (button) {
      if (button.dataset.navidCartBound === "1") return;
      button.dataset.navidCartBound = "1";

      button.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          event.stopImmediatePropagation();
          openRealCart();
        },
        true
      );
    });
  }

  function openRealCart() {
    const menu = document.getElementById("mobileSideMenu");
    const overlay = document.getElementById("mobileMenuOverlay");

    if (menu) menu.classList.remove("active");
    if (overlay) overlay.classList.remove("active");

    document.body.classList.remove("menu-open");
    document.documentElement.classList.remove("menu-open");
    document.body.style.overflow = "";

    if (typeof window.openCart === "function") {
      window.openCart();
      return;
    }

    let attempts = 0;

    const retry = setInterval(function () {
      attempts++;

      if (typeof window.openCart === "function") {
        clearInterval(retry);
        window.openCart();
        return;
      }

      if (attempts >= 10) {
        clearInterval(retry);
        openCartElementFallback();
      }
    }, 200);
  }

  function openCartElementFallback() {
    const selectors = [
      "#cartPreview",
      "#cartDrawer",
      "#cartModal",
      "#shoppingCartPreview",
      ".cart-preview",
      ".cart-drawer",
      ".cartModal",
      ".cart-modal",
      ".shopping-cart-preview"
    ];

    let cartElement = null;

    for (let i = 0; i < selectors.length; i++) {
      const element = document.querySelector(selectors[i]);
      if (element) {
        cartElement = element;
        break;
      }
    }

    if (!cartElement) {
      console.warn("سبد خرید پیدا نشد.");
      return;
    }

    cartElement.classList.add("active", "open", "show");
    cartElement.setAttribute("aria-hidden", "false");
    cartElement.removeAttribute("hidden");

    if (getComputedStyle(cartElement).display === "none") {
      cartElement.style.display = "flex";
    }

    document.body.classList.add("cart-open");
    document.documentElement.classList.add("cart-open");

    const cartOverlay = document.querySelector(
      "#cartOverlay, .cart-overlay, [data-cart-overlay]"
    );

    if (cartOverlay) {
      cartOverlay.classList.add("active", "open", "show");
    }
  }

  /* ================= START ================= */
  /*
    توجه: شمارش تعداد سبد خرید (.cartCount) اینجا دیگر مدیریت
    نمی‌شود — cart.js خودش این کار را برای همه‌ی صفحات انجام می‌دهد.
    نگه‌داشتن یک نسخه‌ی دوم اینجا باعث می‌شد عدد بین فرمت
    فارسی/انگلیسی سوسو بزند. فقط لازم است menu.js قبل از cart.js
    در HTML لود شود.
  */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createMenu);
  } else {
    createMenu();
  }

})();