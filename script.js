/* =========================================================
   NAVIDTOWEL — CART SYSTEM
   Product + Color + Size

   تغییرات این نسخه:
   ۱) همه اعداد با رقم انگلیسی نمایش داده می‌شوند (نه فارسی)
   ۲) پالت رنگ‌ها به بیش از ۸۰ رنگ با کد دقیق گسترش یافت
   ۳) نیم‌فاصله (ZWNJ) هم در مقایسه رنگ‌ها نادیده گرفته می‌شود
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
    .replace(/\u200C/g, "")   /* نیم‌فاصله هم حذف شود */
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
    .cartModal .empty-cart{min-height:230px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:7px;text-align:center;color:#777;}
    .cartModal .empty-cart-icon{width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:14px;background:#f6f6f6;font-size:23px;margin-bottom:4px;}
    .cartModal .empty-cart strong{font-size:12px;color:#444;}
    .cartModal .empty-cart span{font-size:9px;color:#999;}

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
  "سفید": "#ffffff",
  "شیری": "#f6f1e7",
  "کرم": "#e8d5b5",
  "کرم روشن": "#f2e8d5",
  "بژ": "#e6d3b3",
  "عسلی": "#e6a75c",
  "شتری": "#c19a6b",
  "استخوانی": "#e9e2d0",

  /* مشکی و خاکستری */
  "مشکی": "#111111",
  "سیاه": "#111111",
  "خاکستری": "#808080",
  "خاکستری روشن": "#c9c9c9",
  "خاکستری تیره": "#4f4f4f",
  "طوسی": "#9a9a9a",
  "طوسی روشن": "#d4d4d4",
  "طوسی تیره": "#5a5a5a",
  "دودی": "#6d6d6d",
  "نقره‌ای": "#c0c0c0",
  "سیلور": "#c0c0c0",

  /* آبی */
  "ابی": "#2196f3",
  "آبی": "#2196f3",
  "آبی روشن": "#8ed0f5",
  "آبی تیره": "#0d47a1",
  "سرمه‌ای": "#1a2a52",
  "نیوی": "#1a2a52",
  "نفتی": "#1f5f8b",
  "آبی یخی": "#d6ecf5",
  "سبزابی": "#4db6ac",
  "آبی ملایم": "#a3c6e8",

  /* سبز */
  "سبز": "#43a047",
  "سبز روشن": "#a5d6a7",
  "سبز تیره": "#2e5b34",
  "یشمی": "#00a487",
  "زمردی": "#1d9e6e",
  "زیتونی": "#708238",
  "پسته‌ای": "#93c572",
  "سبز فسفری": "#7fce4e",

  /* قرمز و صورتی */
  "قرمز": "#e53935",
  "قرمز تیره": "#8b1a1a",
  "آلبالویی": "#7b1c2b",
  "زرشکی": "#800020",
  "گیلاسی": "#d2042d",
  "سرخابی": "#c2185b",
  "صورتی": "#ec407a",
  "صورتی روشن": "#f8c8dc",
  "صورتی تیره": "#e91e63",
  "صورتی کالباسی": "#d88f8f",
  "گلبهی": "#f4a6a6",
  "رزگلد": "#b76e79",

  /* بنفش */
  "بنفش": "#8e44ad",
  "بنفش روشن": "#c39bd3",
  "بنفش تیره": "#4a2c6e",
  "بادمجانی": "#5b3a6e",
  "بادمجونی": "#5b3a6e",
  "یاسی": "#b57edc",

  /* زرد و نارنجی */
  "زرد": "#fbc02d",
  "زرد روشن": "#fff176",
  "خردلی": "#c8a415",
  "لیمویی": "#f7f694",
  "طلایی": "#d4af37",
  "گلد": "#d4af37",
  "نارنجی": "#fb8c00",
  "نارنجی سوخته": "#cc5500",
  "آجری": "#b0442c",
  "هلویی": "#ffb07c",
  "کرم نارنجی"? 0: 0,

  /* قهوه‌ای */
  "قهوه‌ای": "#795548",
  "قهوه‌ای روشن": "#a0785a",
  "قهوه‌ای تیره": "#4e342e",
  "شکلاتی": "#3e2723",
  "نسکافه‌ای": "#6f4e37",
  "موکا": "#7a5c45",
  "کاکی": "#5d5d4a",

  /* فیروزه‌ای و آبی‌سبز */
  "فیروزه‌ای": "#26a69a",
  "فیروزه‌ای روشن": "#7fdbda",
  "مینایی": "#3aa6b9",

  /* انگلیسی */
  "white": "#ffffff",
  "black": "#111111",
  "red": "#e53935",
  "blue": "#2196f3",
  "skyblue": "#8ed0f5",
  "green": "#43a047",
  "mint": "#93c572",
  "olive": "#708238",
  "yellow": "#fbc02d",
  "lemon": "#f7f694",
  "orange": "#fb8c00",
  "peach": "#ffb07c",
  "coral": "#ff7f50",
  "pink": "#ec407a",
  "rose": "#b76e79",
  "purple": "#8e44ad",
  "magenta": "#c2185b",
  "crimson": "#d2042d",
  "maroon": "#800020",
  "brown": "#795548",
  "chocolate": "#3e2723",
  "gray": "#808080",
  "grey": "#808080",
  "silver": "#c0c0c0",
  "gold": "#d4af37",
  "navy": "#1a2a52",
  "teal": "#26a69a",
  "turquoise": "#26a69a",
  "cream": "#e8d5b5",
  "beige": "#e6d3b3",
  "ivory": "#f6f1e7",
  "khaki": "#5d5d4a"
};

function getCartColorCSS(colorName) {
  const key = normalizeCartText(colorName);
  if (!key) return "#ccc";

  /* کلیدهای خود پالت هم نرمال می‌شوند تا نیم‌فاصله/فاصله
     هیچ‌وقت باعث نشود رنگ پیدا نشود */
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

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <strong>سبد خرید خالی است</strong>
        <span>هنوز محصولی به سبد اضافه نکرده‌اید.</span>
      </div>
    `;

    cartTotal.textContent = "0 تومان";
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