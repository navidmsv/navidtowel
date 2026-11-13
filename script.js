/* =========================================================
   NAVIDTOWEL — CART SYSTEM
   Product + Color + Size

   تغییرات این نسخه:
   ۱) سبد خالی → دکمه «مشاهده محصولات» به‌جای «تکمیل سفارش»
   ۲) همه اعداد با رقم انگلیسی
   ۳) پالت رنگ‌ها بیش از ۸۰ رنگ
========================================================= */

let cart = [];

try {
  cart = JSON.parse(localStorage.getItem("navidTowelCart")) || [];
} catch (error) {
  cart = [];
}

/* ================= ELEMENTS ================= */

let productsContainer = document.querySelector(".products");
let cartCount = document.querySelector(".cartCount");
let cartModal = document.querySelector(".cartModal");
let cartItems = document.querySelector(".cartItems");
let cartTotal = document.querySelector(".cartTotal");

const bottomCart = document.getElementById("bottomCart");
const bottomCartCount = document.getElementById("bottomCartCount");
const bottomCartTotal = document.getElementById("bottomCartTotal");

/* ================= PRICE ================= */

function formatPrice(price) {
  return Number(price || 0).toLocaleString("en-US") + " تومان";
}

/* عدد انگلیسی — همه‌جا از این استفاده می‌شود */

function formatNumber(value) {
  return Number(value || 0).toLocaleString("en-US");
}

/* ================= NORMALIZE TEXT ================= */

function normalizeCartText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/ي/g, "ی")
    .replace(/ى/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/\u200C/g, "")
    .replace(/\s+/g, "")
    .replace(/[-_]/g, "");
}

/* ================= GET PRODUCT ================= */

function getProductById(id) {
  if (typeof products === "undefined" || !Array.isArray(products)) {
    return null;
  }
  return products.find(product => Number(product.id) === Number(id)) || null;
}

/* ================= GET PRODUCT IMAGE ================= */

function getProductImage(product) {
  if (!product) return "";

  if (Array.isArray(product.images) && product.images.length) {
    const validImage = product.images.find(
      image => image && String(image).trim() !== ""
    );
    if (validImage) return validImage;
  }

  if (product.image && String(product.image) !== "0") {
    return product.image;
  }

  return "";
}

/* ================= TOTAL STOCK ================= */

function getProductTotalStock(product) {
  if (!product) return 0;

  if (Array.isArray(product.colors) && product.colors.length) {
    return product.colors.reduce(
      (total, color) => total + Math.max(0, Number(color.stock || 0)),
      0
    );
  }

  if (product.stock !== undefined && product.stock !== null) {
    return Math.max(0, Number(product.stock || 0));
  }

  return Infinity;
}

/* ================= COLOR STOCK ================= */

function getColorStock(product, colorName) {
  if (!product) return 0;
  if (!colorName) return getProductTotalStock(product);
  if (!Array.isArray(product.colors)) return Infinity;

  const color = product.colors.find(
    item => normalizeCartText(item.name) === normalizeCartText(colorName)
  );

  if (!color) return 0;

  return Math.max(0, Number(color.stock || 0));
}

/* ================= CART KEY ================= */

function getCartItemKey(id, color = null, size = "Free Size") {
  return [
    Number(id),
    normalizeCartText(color || ""),
    normalizeCartText(size || "Free Size")
  ].join("|");
}

/* ================= NORMALIZE OLD CART ================= */

function normalizeCartItem(item) {
  if (!item) return null;

  const product = getProductById(item.id);
  if (!product) return null;

  const color = item.color !== undefined ? item.color : null;

  const size =
    item.size !== undefined &&
    item.size !== null &&
    String(item.size).trim() !== ""
      ? String(item.size)
      : "Free Size";

  return {
    id: product.id,
    name: product.name,
    color: color,
    size: size,
    quantity: Math.max(1, Number(item.quantity || 1)),
    key: getCartItemKey(product.id, color, size)
  };
}

function normalizeCart() {
  const normalized = [];

  cart.forEach(item => {
    const newItem = normalizeCartItem(item);
    if (!newItem) return;

    const existing = normalized.find(current => current.key === newItem.key);

    if (existing) {
      existing.quantity += newItem.quantity;
    } else {
      normalized.push(newItem);
    }
  });

  cart = normalized;
}

/* ================= CART MODAL ================= */

function createCartModal() {
  if (document.querySelector(".cartModal")) {
    refreshCartElements();
    return;
  }

  const modal = document.createElement("div");
  modal.className = "cartModal cart-modal";

  modal.innerHTML = `
    <div class="cart-box">
      <div class="cart-header">
        <div class="cart-title-wrap">
          <span class="cart-title-icon">🛒</span>
          <div>
            <h2>سبد خرید</h2>
            <small>محصولات انتخاب‌شده</small>
          </div>
        </div>
        <button type="button" class="closeCart" aria-label="بستن">×</button>
      </div>

      <div class="cartItems"></div>

      <div class="cart-footer">
        <div class="cart-total">
          <span>مبلغ کل</span>
          <strong class="cartTotal">0 تومان</strong>
        </div>
        <button type="button" class="checkout">تکمیل سفارش</button>
        <button type="button" class="browse-products">
          <span class="browse-icon">🛍️</span>
          مشاهده محصولات
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  refreshCartElements();
  injectCartModalStyles();
}

/* ================= CART MODAL STYLE ================= */

function injectCartModalStyles() {
  if (document.getElementById("navid-cart-modal-style")) return;

  const style = document.createElement("style");
  style.id = "navid-cart-modal-style";

  style.textContent = `
    .cartModal.cart-modal{position:fixed;inset:0;background:rgba(0,0,0,.48);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);display:flex;align-items:flex-start;justify-content:center;padding:85px 16px 25px;opacity:0;visibility:hidden;pointer-events:none;transition:.25s ease;z-index:99999;box-sizing:border-box;}
    .cartModal.cart-modal.active{opacity:1;visibility:visible;pointer-events:auto;}
    .cartModal .cart-box{width:min(430px,100%);max-height:min(620px,calc(100vh - 105px));background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 18px 55px rgba(0,0,0,.20);transform:translateY(-12px) scale(.98);transition:.25s ease;display:flex;flex-direction:column;}
    .cartModal.active .cart-box{transform:translateY(0) scale(1);}
    .cartModal .cart-header{min-height:64px;padding:12px 15px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #eee;box-sizing:border-box;flex-shrink:0;}
    .cart-title-wrap{display:flex;align-items:center;gap:9px;}
    .cart-title-icon{width:35px;height:35px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#f5f1eb;font-size:17px;}
    .cartModal .cart-header h2{margin:0;font-size:15px;font-weight:800;color:#252525;line-height:1.3;}
    .cartModal .cart-header small{display:block;margin-top:2px;color:#999;font-size:9px;font-weight:500;}
    .cartModal .closeCart{width:31px;height:31px;border:0;border-radius:9px;background:#f5f5f5;color:#666;font-size:21px;line-height:1;cursor:pointer;transition:.2s ease;}
    .cartModal .closeCart:hover{background:#eee;color:#222;}
    .cartModal .cartItems{overflow-y:auto;padding:2px 14px;flex:1;}
    .cartModal .cart-item{min-height:78px;padding:11px 0;display:grid;grid-template-columns:58px minmax(0,1fr) auto;gap:10px;align-items:center;border-bottom:1px solid #eeeeee;box-sizing:border-box;}
    .cartModal .cart-item:last-child{border-bottom:0;}
    .cartModal .cart-item-image{width:58px;height:58px;border-radius:10px;overflow:hidden;background:#f5f5f5;border:1px solid #eee;flex-shrink:0;}
    .cartModal .cart-item-image img{width:100%;height:100%;display:block;object-fit:cover;}
    .cartModal .cart-item-info{min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:3px;}
    .cartModal .cart-item-info strong{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#292929;font-size:11px;font-weight:800;line-height:1.5;}
    .cartModal .cart-item-info > span{color:#8b735b;font-size:10px;font-weight:700;}
    .cartModal .cart-item-meta{display:flex;align-items:center;flex-wrap:wrap;gap:5px;margin-top:1px;}
    .cartModal .cart-meta-chip{display:inline-flex;align-items:center;gap:4px;min-height:20px;padding:2px 7px;border-radius:6px;background:#f7f7f7;color:#777;font-size:8.5px;line-height:1;box-sizing:border-box;}
    .cartModal .cart-meta-chip.color-chip{color:#555;}
    .cartModal .cart-item-color-dot{width:10px !important;height:10px !important;margin:0 !important;flex-shrink:0;}
    .cartModal .qty-controls{display:flex;align-items:center;gap:3px;padding:3px;background:#f7f7f7;border:1px solid #eee;border-radius:8px;}
    .cartModal .qty-controls button{width:22px;height:22px;padding:0;border:0;border-radius:6px;background:#fff;color:#555;font-size:14px;line-height:22px;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,.04);}
    .cartModal .qty-controls button:hover{background:#f0f0f0;}
    .cartModal .qty-controls > span{min-width:17px;text-align:center;font-size:9px;font-weight:800;color:#444;}
    .cartModal .qty-controls .cart-remove-button{color:#d75b5b;font-size:16px;margin-right:1px;}
    .cartModal .cart-footer{padding:13px 14px 14px;background:#fff;border-top:1px solid #eee;flex-shrink:0;}
    .cartModal .cart-total{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}
    .cartModal .cart-total span{color:#777;font-size:10px;}
    .cartModal .cart-total strong{color:#222;font-size:14px;font-weight:900;}
    .cartModal .checkout{width:100%;height:40px;border:0;border-radius:10px;background:#333;color:#fff;font-family:inherit;font-size:11px;font-weight:800;cursor:pointer;transition:.2s ease;}
    .cartModal .checkout:hover{background:#222;}

    /* دکمه مشاهده محصولات — فقط وقتی سبد خالیه دیده می‌شود */
    .cartModal .browse-products{display:none;width:100%;height:42px;border:1.5px solid #294737;border-radius:10px;background:#fff;color:#294737;font-family:inherit;font-size:11.5px;font-weight:800;cursor:pointer;transition:.2s ease;align-items:center;justify-content:center;gap:6px;}
    .cartModal .browse-products:hover{background:#294737;color:#fff;}
    .cartModal .browse-products .browse-icon{font-size:14px;line-height:1;}
    .cartModal.is-empty .checkout{display:none;}
    .cartModal.is-empty .browse-products{display:flex;}
    .cartModal.is-empty .cart-total{display:none;}

    .cartModal .empty-cart{min-height:230px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:7px;text-align:center;color:#777;}
    .cartModal .empty-cart-icon{width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:14px;background:#f6f6f6;font-size:23px;margin-bottom:4px;}
    .cartModal .empty-cart strong{font-size:12px;color:#444;}
    .cartModal .empty-cart span{font-size:9px;color:#999;line-height:1.8;}

    @media(max-width:500px){
      .cartModal.cart-modal{padding:74px 10px 14px;}
      .cartModal .cart-box{max-height:calc(100vh - 88px);border-radius:15px;}
      .cartModal .cart-item{grid-template-columns:52px minmax(0,1fr) auto;gap:8px;min-height:72px;padding:9px 0;}
      .cartModal .cart-item-image{width:52px;height:52px;}
      .cartModal .cart-item-info strong{font-size:10px;}
      .cartModal .cart-item-info > span{font-size:9px;}
      .cartModal .cart-meta-chip{font-size:8px;padding:2px 6px;}
      .cartModal .qty-controls button{width:20px;height:20px;line-height:20px;}
      .cartModal .qty-controls > span{min-width:15px;font-size:8px;}
      .cartModal .cart-total strong{font-size:13px;}
    }
  `;

  document.head.appendChild(style);
}

/* ================= REFRESH CART ELEMENTS ================= */

function refreshCartElements() {
  cartModal = document.querySelector(".cartModal");
  cartItems = document.querySelector(".cartItems");
  cartTotal = document.querySelector(".cartTotal");
  cartCount = document.querySelector(".cartCount");
}

/* ================= PRODUCT LIST ================= */

function renderProducts() {
  if (!productsContainer) return;
  if (typeof products === "undefined") return;

  productsContainer.innerHTML = products
    .map(product => {
      const image = getProductImage(product);

      return `
        <article class="product-card" onclick="openProduct(${product.id})">
          <div class="product-image">
            ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
            ${
              image
                ? `<img src="${image}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">`
                : ""
            }
          </div>

          <div class="product-info">
            <h3>${product.name}</h3>
            <p class="product-desc">${product.description || ""}</p>

            <div class="product-bottom">
              <div class="price">${formatPrice(product.price)}</div>
              <button
                type="button"
                class="add-cart"
                onclick="event.stopPropagation(); addToCart(${product.id}, null, 'Free Size');">
                افزودن به سبد
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

/* ================= OPEN PRODUCT ================= */

function openProduct(id) {
  window.location.href = "product.html?id=" + id;
}

/* ================= TOAST ================= */

function showCartNotification(message, type = "success") {
  let toast = document.querySelector(".cart-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "cart-toast";
    document.body.appendChild(toast);
  }

  toast.classList.remove("show");

  toast.innerHTML = `
    <span class="cart-toast-icon">${type === "remove" ? "−" : "✓"}</span>
    <span class="cart-toast-text">${message}</span>
  `;

  void toast.offsetWidth;
  toast.classList.add("show");

  clearTimeout(window.cartToastTimer);
  window.cartToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

/* ================= ADD TO CART ================= */

function addToCart(id, color = null, size = "Free Size") {
  const product = getProductById(id);
  if (!product) return;

  color = color ? String(color) : null;
  size =
    size !== undefined && size !== null && String(size).trim() !== ""
      ? String(size)
      : "Free Size";

  if (Array.isArray(product.colors) && product.colors.length) {
    if (!color) {
      showCartNotification("لطفاً رنگ محصول را انتخاب کنید.", "remove");
      return;
    }

    const colorExists = product.colors.some(
      item => normalizeCartText(item.name) === normalizeCartText(color)
    );

    if (!colorExists) {
      showCartNotification("رنگ انتخاب‌شده معتبر نیست.", "remove");
      return;
    }
  }

  const key = getCartItemKey(product.id, color, size);
  const stock = getColorStock(product, color);
  const existing = cart.find(item => item.key === key);
  const currentQuantity = existing ? Number(existing.quantity || 0) : 0;

  if (stock !== Infinity && currentQuantity >= stock) {
    showCartNotification("موجودی این رنگ به پایان رسیده است.", "remove");
    return;
  }

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ id: product.id, name: product.name, color, size, quantity: 1, key });
  }

  showCartNotification(`${product.name} به سبد اضافه شد`);

  saveCart();
  renderCart();
  updateBottomCart();
}

/* ================= CHANGE QUANTITY ================= */

function changeQuantity(id, amount, color = null, size = "Free Size") {
  const key = getCartItemKey(id, color, size);
  const item = cart.find(product => product.key === key);
  if (!item) return;

  const product = getProductById(item.id);
  if (!product) return;

  const oldQuantity = Number(item.quantity || 1);
  const newQuantity = oldQuantity + Number(amount || 0);

  if (amount < 0) {
    item.quantity = newQuantity;

    if (newQuantity > 0) {
      showCartNotification(`تعداد ${item.name} کاهش یافت`, "remove");
    }
  } else if (amount > 0) {
    const stock = getColorStock(product, item.color);

    if (stock !== Infinity && oldQuantity >= stock) {
      showCartNotification("بیشتر از موجودی نمی‌توانید اضافه کنید.", "remove");
      return;
    }

    item.quantity = newQuantity;
    showCartNotification(`تعداد ${item.name} افزایش یافت`);
  }

  if (item.quantity <= 0) {
    cart = cart.filter(productItem => productItem.key !== key);
    showCartNotification(`${item.name} از سبد حذف شد`, "remove");
  }

  saveCart();
  renderCart();
  updateBottomCart();
}

/* ================= REMOVE ITEM ================= */

function removeCartItem(id, color = null, size = "Free Size") {
  const key = getCartItemKey(id, color, size);
  const item = cart.find(cartItem => cartItem.key === key);
  if (!item) return;

  cart = cart.filter(cartItem => cartItem.key !== key);

  saveCart();
  renderCart();
  updateBottomCart();

  showCartNotification(`${item.name} از سبد حذف شد`, "remove");
}

/* ================= SAVE CART ================= */

function saveCart() {
  localStorage.setItem("navidTowelCart", JSON.stringify(cart));
  updateHeaderCart();
}

/* ================= HEADER CART COUNT ================= */

function updateHeaderCart() {
  const headerCounts = document.querySelectorAll(".cartCount");

  const quantity = cart.reduce(
    (sum, item) => sum + Number(item.quantity || 0),
    0
  );

  headerCounts.forEach(counter => {
    counter.textContent = formatNumber(quantity);
  });
}

/* ================= CART TOTAL ================= */

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = getProductById(item.id);
    if (!product) return sum;
    return sum + Number(product.price || 0) * Number(item.quantity || 0);
  }, 0);
}

function getCartItemPrice(item) {
  const product = getProductById(item.id);
  if (!product) return Number(item.price || 0);
  return Number(product.price || 0);
}

/* ================= COLOR VISUAL ================= */
/*
  پالت رنگ‌ها — بیش از ۸۰ رنگ رایج با کد دقیق.
  کلیدها موقع مقایسه نرمال می‌شوند، پس فرقی نمی‌کند رنگ را
  با نیم‌فاصله، فاصله یا حروف متفاوت بنویسید — همه پیدا می‌شوند.
  برای اضافه‌کردن رنگ جدید فقط یک خط به این لیست اضافه کنید:
  "نام رنگ": "#کد رنگ",
*/
const COLOR_MAP = {

  /* سفید و کرم */
  "سفید": "#fdfbf7",
  "شیری": "#faf4e8",
  "کرم": "#f0e2cc",
  "کرم روشن": "#f7efe0",
  "بژ": "#efe0c8",
  "عسلی": "#f3cf9e",
  "شتری": "#dcbd95",
  "استخوانی": "#f2ede0",

  /* مشکی و خاکستری */
  "مشکی": "#3a3a3a",
  "سیاه": "#3a3a3a",
  "خاکستری": "#adadad",
  "خاکستری روشن": "#d6d6d6",
  "خاکستری تیره": "#7d7d7d",
  "طوسی": "#bcbcbc",
  "طوسی روشن": "#dedede",
  "طوسی تیره": "#8a8a8a",
  "دودی": "#a3a3a3",
  "نقره‌ای": "#d9d9d9",
  "سیلور": "#d9d9d9",

  /* آبی */
  "ابی": "#9ecdee",
  "آبی": "#9ecdee",
  "آبی روشن": "#cde6f5",
  "آبی تیره": "#7fa8cc",
  "سرمه‌ای": "#8494b8",
  "نیوی": "#8494b8",
  "نفتی": "#93b5cf",
  "آبی یخی": "#e3f1f8",
  "سبزابی": "#a8d8d0",
  "آبی ملایم": "#c3d6ea",

  /* سبز */
  "سبز": "#a8d5aa",
  "سبز روشن": "#cdeacd",
  "سبز تیره": "#8fbf93",
  "یشمی": "#8fd0c4",
  "زمردی": "#9ccfba",
  "زیتونی": "#c2c69a",
  "پسته‌ای": "#c6e0a8",
  "سبز فسفری": "#c9e8a5",

  /* قرمز و صورتی */
  "قرمز": "#f0a3a0",
  "قرمز تیره": "#dd8a88",
  "آلبالویی": "#d89aa2",
  "زرشکی": "#d798a4",
  "گیلاسی": "#eb9aa2",
  "سرخابی": "#ecadc2",
  "صورتی": "#f4b8c8",
  "صورتی روشن": "#fadbe5",
  "صورتی تیره": "#eda3b8",
  "صورتی کالباسی": "#e5b4b4",
  "گلبهی": "#f6c4c0",
  "رزگلد": "#dbb0ae",

  /* بنفش */
  "بنفش": "#c8b0dd",
  "بنفش روشن": "#e0d1ec",
  "بنفش تیره": "#b096cc",
  "بادمجانی": "#b9a3c9",
  "بادمجونی": "#b9a3c9",
  "یاسی": "#d5c0e8",

  /* زرد و نارنجی */
  "زرد": "#f5e3a0",
  "زرد روشن": "#faf0c0",
  "خردلی": "#e3cf8e",
  "لیمویی": "#f7f5c0",
  "طلایی": "#e8d5a0",
  "گلد": "#e8d5a0",
  "نارنجی": "#f5c49a",
  "نارنجی سوخته": "#e0ab80",
  "آجری": "#dda48e",
  "هلویی": "#f8cfae",
  "کرم نارنجی": "#f5dcbd",

  /* قهوه‌ای */
  "قهوه‌ای": "#c4a894",
  "قهوه‌ای روشن": "#d6bfae",
  "قهوه‌ای تیره": "#a98e7d",
  "شکلاتی": "#b39383",
  "نسکافه‌ای": "#c2a68e",
  "موکا": "#cbb49e",
  "کاکی": "#b5b39c",

  /* فیروزه‌ای و آبی‌سبز */
  "فیروزه‌ای": "#a0d8d0",
  "فیروزه‌ای روشن": "#c8ebe6",
  "مینایی": "#a8cfe0",

  /* انگلیسی */
  "white": "#fdfbf7",
  "black": "#3a3a3a",
  "red": "#f0a3a0",
  "blue": "#9ecdee",
  "skyblue": "#cde6f5",
  "green": "#a8d5aa",
  "mint": "#c6e0a8",
  "olive": "#c2c69a",
  "yellow": "#f5e3a0",
  "lemon": "#f7f5c0",
  "orange": "#f5c49a",
  "peach": "#f8cfae",
  "coral": "#f5b8a8",
  "pink": "#f4b8c8",
  "rose": "#dbb0ae",
  "purple": "#c8b0dd",
  "magenta": "#ecadc2",
  "crimson": "#eb9aa2",
  "maroon": "#d798a4",
  "brown": "#c4a894",
  "chocolate": "#b39383",
  "gray": "#adadad",
  "grey": "#adadad",
  "silver": "#d9d9d9",
  "gold": "#e8d5a0",
  "navy": "#8494b8",
  "teal": "#a0d8d0",
  "turquoise": "#a0d8d0",
  "cream": "#f0e2cc",
  "beige": "#efe0c8",
  "ivory": "#faf4e8",
  "khaki": "#b5b39c"
};

function getCartColorCSS(colorName) {
  const key = normalizeCartText(colorName);
  if (!key) return "#ccc";

  for (const name in COLOR_MAP) {
    if (normalizeCartText(name) === key) {
      return COLOR_MAP[name];
    }
  }

  return "#ccc";
}

function renderCartColor(color) {
  if (!color) return "";

  return `
    <span
      class="cart-item-color-dot"
      title="${escapeHtml(color)}"
      style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${getCartColorCSS(color)};border:1px solid rgba(0,0,0,.16);vertical-align:middle;margin:0;">
    </span>
  `;
}

/* ================= HTML ESCAPE ================= */

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ================= RENDER CART ================= */

function renderCart() {
  updateHeaderCart();

  if (!cartItems || !cartTotal) return;

  /* سبد خالی یا پُر — برای نشان دادن/مخفی کردن دکمه‌ها */
  if (cartModal) {
    cartModal.classList.toggle("is-empty", cart.length === 0);
  }

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <strong>سبد خرید شما خالی است!</strong>
        <span>هنوز محصولی انتخاب نکرده‌اید.<br>از دکمه‌ی پایین بروید محصولات را ببینید 👇</span>
      </div>
    `;

    cartTotal.textContent = formatPrice(0);
    return;
  }

  cartItems.innerHTML = cart
    .map(item => {
      const product = getProductById(item.id);
      if (!product) return "";

      const image = getProductImage(product);
      const currentPrice = getCartItemPrice(item);

      return `
        <div class="cart-item" data-cart-key="${escapeHtml(item.key)}">

          ${
            image
              ? `<div class="cart-item-image" data-action="open" data-id="${product.id}">
                   <img src="${image}" alt="${escapeHtml(product.name)}">
                 </div>`
              : `<div class="cart-item-image"></div>`
          }

          <div class="cart-item-info" data-action="open" data-id="${product.id}">
            <strong>${escapeHtml(product.name)}</strong>
            <span>${formatPrice(currentPrice)}</span>

            <div class="cart-item-meta">
              ${
                item.color
                  ? `<span class="cart-meta-chip color-chip">
                       ${renderCartColor(item.color)}
                       <span>${escapeHtml(item.color)}</span>
                     </span>`
                  : ""
              }

              ${
                item.size && item.size !== "Free Size"
                  ? `<span class="cart-meta-chip">سایز ${escapeHtml(item.size)}</span>`
                  : `<span class="cart-meta-chip">سایز آزاد</span>`
              }
            </div>
          </div>

          <div class="qty-controls"
               data-id="${item.id}"
               data-color="${escapeHtml(item.color || "")}"
               data-size="${escapeHtml(item.size || "Free Size")}">

            <button type="button" data-action="increase" aria-label="افزایش">+</button>
            <span>${formatNumber(item.quantity)}</span>
            <button type="button" data-action="decrease" aria-label="کاهش">−</button>
            <button type="button" class="cart-remove-button" data-action="remove" aria-label="حذف">×</button>
          </div>

        </div>
      `;
    })
    .join("");

  cartTotal.textContent = formatPrice(getCartTotal());
}

/* ================= BOTTOM CART ================= */

function updateBottomCart() {
  if (!bottomCart) return;

  if (cart.length === 0) {
    bottomCart.classList.remove("active");
    return;
  }

  const quantity = cart.reduce(
    (sum, item) => sum + Number(item.quantity || 0),
    0
  );

  const total = getCartTotal();

  if (bottomCartCount) {
    bottomCartCount.textContent = formatNumber(quantity);
  }

  if (bottomCartTotal) {
    bottomCartTotal.textContent = formatNumber(total) + " تومان";
  }

  bottomCart.classList.add("active");
}

/* ================= OPEN / CLOSE CART ================= */

function openCart() {
  createCartModal();
  if (!cartModal) return;

  renderCart();
  cartModal.classList.add("active");
  document.body.classList.add("cart-open");
}

function closeCart() {
  if (!cartModal) return;
  cartModal.classList.remove("active");
  document.body.classList.remove("cart-open");
}

function goToCartPage() {
  if (cart.length === 0) {
    showCartNotification("سبد خرید شما خالی است", "remove");
    return;
  }

  window.location.href = "cart.html";
}

function goToShopPage() {
  window.location.href = "shop.html";
}

/* ================= CART EVENTS ================= */

function setupCartEvents() {
  createCartModal();
  if (!cartModal) return;

  document.querySelectorAll(".openCart").forEach(button => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      openCart();
    });
  });

  document.addEventListener("click", function (event) {
    if (event.target.closest(".closeCart")) {
      closeCart();
    }
  });

  cartModal.addEventListener("click", function (event) {
    if (event.target === cartModal) {
      closeCart();
    }
  });

  document.addEventListener("click", function (event) {
    const checkoutButton = event.target.closest(".checkout, .bottom-cart-checkout");
    if (!checkoutButton) return;

    event.preventDefault();
    goToCartPage();
  });

  /* دکمه مشاهده محصولات — وقتی سبد خالیه */
  document.addEventListener("click", function (event) {
    const browseButton = event.target.closest(".browse-products");
    if (!browseButton) return;

    event.preventDefault();
    goToShopPage();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeCart();
    }
  });

  document.addEventListener("click", function (event) {
    const openTarget = event.target.closest('[data-action="open"]');
    if (openTarget) {
      openProduct(Number(openTarget.dataset.id));
      return;
    }

    const qtyButton = event.target.closest(".qty-controls button");
    if (!qtyButton) return;

    const controls = qtyButton.closest(".qty-controls");
    const id = Number(controls.dataset.id);
    const color = controls.dataset.color || null;
    const size = controls.dataset.size || "Free Size";
    const action = qtyButton.dataset.action;

    if (action === "increase") {
      changeQuantity(id, 1, color, size);
    } else if (action === "decrease") {
      changeQuantity(id, -1, color, size);
    } else if (action === "remove") {
      removeCartItem(id, color, size);
    }
  });
}

/* ================= STORAGE SYNC ================= */

window.addEventListener("storage", function (event) {
  if (event.key !== "navidTowelCart") return;

  try {
    cart = JSON.parse(event.newValue) || [];
  } catch {
    cart = [];
  }

  normalizeCart();
  saveCart();
  renderCart();
  updateBottomCart();
});

/* ================= MOBILE SIDE MENU ================= */

function setupMobileMenu() {
  const menu = document.getElementById("mobileSideMenu");
  const overlay = document.getElementById("mobileMenuOverlay");
  const closeBtn = document.getElementById("mobileMenuClose");

  const openBtn =
    document.getElementById("mobileMenuButton") ||
    document.querySelector(".mobile-menu-button") ||
    document.querySelector(".mobile-menu-btn");

  const category = document.querySelector(".mobile-side-category");
  const categoryButton = document.getElementById("mobileCategoryButton");

  function openSideMenu() {
    if (!menu) return;

    menu.classList.add("active");
    if (overlay) overlay.classList.add("active");

    document.body.classList.add("menu-open");
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("menu-open");
  }

  function closeSideMenu() {
    if (!menu) return;

    menu.classList.remove("active");
    if (overlay) overlay.classList.remove("active");

    document.body.classList.remove("menu-open");
    document.documentElement.classList.remove("menu-open");
    document.body.style.overflow = "";
  }

  if (openBtn) {
    openBtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      openSideMenu();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      closeSideMenu();
    });
  }

  if (overlay) {
    overlay.addEventListener("click", function () {
      closeSideMenu();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeSideMenu();
    }
  });

  if (categoryButton && category) {
    categoryButton.addEventListener("click", function (event) {
      event.preventDefault();
      category.classList.toggle("open");
    });
  }

  if (menu) {
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        closeSideMenu();
      });
    });
  }
}

/* ================= INITIALIZE ================= */

document.addEventListener("DOMContentLoaded", function () {
  normalizeCart();
  saveCart();

  createCartModal();
  renderProducts();
  renderCart();
  updateBottomCart();

  setupCartEvents();
  setupMobileMenu();
});

/*
  ⚠️ اسلایدر صفحه اصلی (HERO SLIDER) عمداً از این فایل حذف شده.
  کد اسلایدر داخل index.html است و نباید اینجا هم باشد.
*/
/* =========================================================
   NAVIDTOWEL — UI POLISH
   ۱) نوتیفیکیشن شیک، همیشه زیر هدر (برای همه صفحه‌ها)
   ۲) alert() های سایت به همین نوتیفیکیشن تبدیل می‌شن
   ۳) اسلاید لمسی/ماوسی عکس‌های صفحه‌ی محصول با افکت
   نصب: کل این کد رو ته فایل script.js بچسبون (بعد از آخرین خط).
========================================================= */

(function () {
  "use strict";

  /* ================= STYLE ================= */

  var css = `
    /* ---------- نوتیفیکیشن ---------- */
    body .cart-toast {
      position: fixed !important;
      top: calc(var(--nt-toast-top, 78px) + 10px) !important;
      bottom: auto !important;
      left: 50% !important;
      right: auto !important;
      z-index: 2147483000 !important;
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
      width: max-content !important;
      max-width: min(92vw, 420px) !important;
      padding: 11px 16px 14px 14px !important;
      border-radius: 16px !important;
      direction: rtl !important;
      overflow: hidden !important;
      background: linear-gradient(135deg, rgba(38,55,34,.97), rgba(52,69,47,.95)) !important;
      color: #fff !important;
      border: 1px solid rgba(255,255,255,.14) !important;
      box-shadow: 0 14px 40px rgba(20,35,25,.35), inset 0 1px 0 rgba(255,255,255,.12) !important;
      -webkit-backdrop-filter: blur(14px) saturate(140%);
      backdrop-filter: blur(14px) saturate(140%);
      font-size: 10px !important;
      font-weight: 700 !important;
      line-height: 1.7 !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      transform: translate(-50%, -18px) scale(.95) !important;
      transition: opacity .28s ease, visibility .28s, transform .45s cubic-bezier(.22, 1.25, .36, 1) !important;
    }

    body .cart-toast.show {
      opacity: 1 !important;
      visibility: visible !important;
      transform: translate(-50%, 0) scale(1) !important;
    }

    body .cart-toast .cart-toast-icon {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      background: #d4af37;
      color: #2a3a26;
      font-size: 14px;
      font-weight: 900;
      line-height: 1;
    }

    body .cart-toast.nt-warn .cart-toast-icon {
      background: #f0b44c;
    }

    body .cart-toast .cart-toast-text {
      color: #fff;
    }

    body .cart-toast::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #d4af37, #f3dc8a);
      transform-origin: right center;
      transform: scaleX(0);
    }

    body .cart-toast.show::after {
      animation: ntToastBar 2.6s linear forwards;
    }

    @keyframes ntToastBar {
      from { transform: scaleX(1); }
      to   { transform: scaleX(0); }
    }

    /* ---------- هایلایت باکس رنگ وقتی انتخاب نشده ---------- */
    .product-options-box.nt-attn {
      animation: ntShake .55s ease;
      border-color: #d4af37 !important;
      background: #fffaf0 !important;
      box-shadow: 0 0 0 3px rgba(212,175,55,.22), 0 8px 24px rgba(212,175,55,.18) !important;
    }

    @keyframes ntShake {
      0%, 100% { transform: translateX(0); }
      15% { transform: translateX(-6px); }
      30% { transform: translateX(6px); }
      45% { transform: translateX(-4px); }
      60% { transform: translateX(4px); }
      75% { transform: translateX(-2px); }
    }

    /* ---------- گالری ---------- */
    .product-main-image {
      touch-action: pan-y;
      -webkit-user-select: none;
      user-select: none;
      cursor: grab;
    }

    .product-main-image.nt-dragging {
      cursor: grabbing;
    }

    .product-main-image img {
      will-change: transform, opacity;
      -webkit-user-drag: none;
      transform-origin: center;
    }
  `;

  var styleTag = document.createElement("style");
  styleTag.id = "navid-ui-style";
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  /* ================= TOAST ================= */

  var toastTimer = null;
  var topFrame = 0;

  function updateToastTop() {
    var header = document.querySelector(".header");
    var bottom = 68;

    if (header) {
      bottom = Math.max(0, Math.round(header.getBoundingClientRect().bottom));
    }

    document.documentElement.style.setProperty("--nt-toast-top", bottom + "px");
  }

  function scheduleToastTop() {
    if (topFrame) return;
    topFrame = requestAnimationFrame(function () {
      topFrame = 0;
      updateToastTop();
    });
  }

  window.addEventListener("scroll", scheduleToastTop, { passive: true });
  window.addEventListener("resize", scheduleToastTop);
  document.addEventListener("DOMContentLoaded", updateToastTop);

  function highlightOptions() {
    var box = document.getElementById("productOptions");
    if (!box) return;

    var header = document.querySelector(".header");
    var headerBottom = header ? header.getBoundingClientRect().bottom : 0;
    var rect = box.getBoundingClientRect();

    if (rect.top < headerBottom + 90 || rect.bottom > window.innerHeight - 20) {
      box.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    box.classList.remove("nt-attn");
    void box.offsetWidth;
    box.classList.add("nt-attn");

    setTimeout(function () {
      box.classList.remove("nt-attn");
    }, 1500);
  }

  /* جایگزین تابع قبلی cart.js (همون اسم و همون ورودی‌ها) */
  window.showCartNotification = function (message, type) {
    var toast = document.querySelector(".cart-toast");

    if (!toast) {
      toast = document.createElement("div");
      toast.className = "cart-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }

    var text = String(message == null ? "" : message);

    var isWarn =
      type === "warn" ||
      (type === "remove" && /انتخاب|موجود|معتبر|خالی|بیشتر|لطفاً|لطفا/.test(text));

    var isRemove = type === "remove" && !isWarn;

    toast.classList.remove("show", "nt-warn");

    if (isWarn) toast.classList.add("nt-warn");

    toast.innerHTML =
      '<span class="cart-toast-icon">' +
      (isWarn ? "!" : isRemove ? "−" : "✓") +
      '</span><span class="cart-toast-text"></span>';

    toast.querySelector(".cart-toast-text").textContent = text;

    updateToastTop();

    void toast.offsetWidth;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    clearTimeout(window.cartToastTimer);

    toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 2600);

    if (isWarn && /رنگ/.test(text)) {
      highlightOptions();
    }
  };

  window.navidToast = window.showCartNotification;

  /* alert های زشت مرورگر → همین نوتیفیکیشن */
  window.alert = function (message) {
    window.showCartNotification(String(message == null ? "" : message), "warn");
  };

  /* ================= GALLERY SWIPE ================= */

  function initGallery() {
    var frame = document.getElementById("productMainImage");
    var img = document.getElementById("mainProductImage");
    var prev = document.getElementById("productPrev");
    var next = document.getElementById("productNext");
    var thumbs = document.getElementById("productThumbnails");

    if (!frame || !img || !prev || !next) return;

    var direction = 0;
    var dragging = false;
    var locked = false;
    var animating = false;
    var pendingEnter = false;
    var startX = 0;
    var startY = 0;
    var dx = 0;
    var startTime = 0;
    var pointerId = null;

    img.setAttribute("draggable", "false");

    function frameWidth() {
      return frame.clientWidth || 320;
    }

    function hasMultipleImages() {
      return !!thumbs && thumbs.children.length > 1;
    }

    function preloadAll() {
      if (!thumbs) return;

      thumbs.querySelectorAll("img").forEach(function (thumb) {
        var preload = new Image();
        preload.src = thumb.src;
      });
    }

    /* ورود عکس جدید با افکت (جهتش از طرف حرکت انگشت) */
    function playEnter(dir) {
      var offset = dir * Math.min(60, frameWidth() * 0.14);

      pendingEnter = true;

      img.style.transition = "none";
      img.style.opacity = "0";
      img.style.transform =
        dir === 0 ? "scale(.95)" : "translateX(" + offset + "px) scale(.98)";

      var started = false;

      function go() {
        if (started) return;
        started = true;

        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            img.style.transition =
              "transform .45s cubic-bezier(.22,.8,.3,1), opacity .38s ease";
            img.style.transform = "none";
            img.style.opacity = "1";
            pendingEnter = false;
          });
        });
      }

      if (img.complete && img.naturalWidth) {
        go();
      } else {
        img.addEventListener("load", go, { once: true });
        img.addEventListener("error", go, { once: true });
        setTimeout(go, 700);
      }
    }

    new MutationObserver(function () {
      if (dragging) return;

      var dir = direction;
      direction = 0;

      playEnter(dir);
      preloadAll();
    }).observe(img, { attributes: true, attributeFilter: ["src"] });

    /* جهت حرکت وقتی روی فلش‌ها کلیک می‌شه */
    frame.addEventListener(
      "click",
      function (event) {
        if (event.target.closest("#productNext")) direction = 1;
        else if (event.target.closest("#productPrev")) direction = -1;
      },
      true
    );

    frame.addEventListener("pointerdown", function (event) {
      if (event.button !== undefined && event.button !== 0) return;
      if (event.target.closest(".product-gallery-arrow")) return;
      if (animating) return;

      dragging = true;
      locked = false;
      startX = event.clientX;
      startY = event.clientY;
      dx = 0;
      startTime = Date.now();
      pointerId = event.pointerId;
    });

    frame.addEventListener("pointermove", function (event) {
      if (!dragging || event.pointerId !== pointerId) return;

      var moveX = event.clientX - startX;
      var moveY = event.clientY - startY;

      if (!locked) {
        if (Math.abs(moveX) < 8 && Math.abs(moveY) < 8) return;

        /* حرکت عمودی = اسکرول عادی صفحه */
        if (Math.abs(moveY) > Math.abs(moveX)) {
          dragging = false;
          return;
        }

        locked = true;
        frame.classList.add("nt-dragging");

        try {
          frame.setPointerCapture(pointerId);
        } catch (error) {}
      }

      dx = moveX;

      var width = frameWidth();
      var ratio = Math.min(Math.abs(dx) / width, 0.5);

      img.style.transition = "none";
      img.style.transform =
        "translateX(" + dx * 0.92 + "px) scale(" + (1 - ratio * 0.06) + ")";
      img.style.opacity = String(1 - Math.min(Math.abs(dx) / (width * 1.1), 0.4));

      event.preventDefault();
    });

    function finishDrag(event) {
      if (!dragging) return;
      if (event && event.pointerId !== pointerId) return;

      var wasLocked = locked;

      dragging = false;
      frame.classList.remove("nt-dragging");

      try {
        frame.releasePointerCapture(pointerId);
      } catch (error) {}

      if (!wasLocked) return;

      var width = frameWidth();
      var elapsed = Math.max(1, Date.now() - startTime);
      var speed = Math.abs(dx) / elapsed;

      var commit =
        Math.abs(dx) > Math.max(48, width * 0.18) ||
        (speed > 0.5 && Math.abs(dx) > 24);

      if (commit && hasMultipleImages()) {
        var dir = dx < 0 ? 1 : -1;

        animating = true;

        img.style.transition = "transform .2s ease-in, opacity .2s ease-in";
        img.style.transform =
          "translateX(" + (dx < 0 ? -1 : 1) * width * 0.5 + "px) scale(.96)";
        img.style.opacity = "0";

        setTimeout(function () {
          direction = dir;
          (dir > 0 ? next : prev).click();
          animating = false;

          /* اگه عکسی عوض نشد، عکس فعلی برگرده */
          setTimeout(function () {
            if (!pendingEnter && img.style.opacity === "0") {
              img.style.transition = "transform .3s ease, opacity .25s ease";
              img.style.transform = "none";
              img.style.opacity = "1";
            }
          }, 160);
        }, 190);
      } else {
        img.style.transition =
          "transform .4s cubic-bezier(.22,1.3,.36,1), opacity .25s ease";
        img.style.transform = "none";
        img.style.opacity = "1";
      }
    }

    frame.addEventListener("pointerup", finishDrag);
    frame.addEventListener("pointercancel", finishDrag);

    /* کیبورد: ← بعدی ، → قبلی */
    document.addEventListener("keydown", function (event) {
      var tag = (event.target && event.target.tagName) || "";
      if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;

      if (event.key === "ArrowLeft") {
        direction = 1;
        next.click();
      } else if (event.key === "ArrowRight") {
        direction = -1;
        prev.click();
      }
    });

    preloadAll();
  }

  document.addEventListener("DOMContentLoaded", initGallery);
})();
