"use strict";

/* =========================================================
NAVIDTOWEL — SHARED MENU
مشترک بین تمام صفحات سایت
========================================================= */

/* =========================================================
ELEMENTS
========================================================= */

const sharedMobileMenuButton =
document.getElementById(
"mobileMenuButton"
);

const sharedMobileSideMenu =
document.getElementById(
"mobileSideMenu"
);

const sharedMobileMenuOverlay =
document.getElementById(
"mobileMenuOverlay"
);

const sharedMobileSideClose =
document.getElementById(
"mobileMenuClose"
);

const sharedMobileCategoryButton =
document.getElementById(
"mobileCategoryButton"
);

const sharedMobileCategoryList =
document.getElementById(
"mobileCategoryList"
);

const sharedMobileCategoryArrow =
document.getElementById(
"mobileCategoryArrow"
);

/* =========================================================
OPEN MENU
========================================================= */

function openSharedMobileMenu() {
if (sharedMobileSideMenu) {
sharedMobileSideMenu.classList.add(
"active"
);
}

if (sharedMobileMenuOverlay) {
sharedMobileMenuOverlay.classList.add(
"active"
);
}

document.body.classList.add(
"menu-open"
);
}

/* =========================================================
CLOSE MENU
========================================================= */

function closeSharedMobileMenu() {
if (sharedMobileSideMenu) {
sharedMobileSideMenu.classList.remove(
"active"
);
}

if (sharedMobileMenuOverlay) {
sharedMobileMenuOverlay.classList.remove(
"active"
);
}

document.body.classList.remove(
"menu-open"
);
}

/* =========================================================
MENU BUTTON
========================================================= */

if (sharedMobileMenuButton) {
sharedMobileMenuButton.addEventListener(
"click",
function(event) {
event.preventDefault();

```
  openSharedMobileMenu();
}
```

);
}

/* =========================================================
CLOSE BUTTON
========================================================= */

if (sharedMobileSideClose) {
sharedMobileSideClose.addEventListener(
"click",
function(event) {
event.preventDefault();

```
  closeSharedMobileMenu();
}
```

);
}

/* =========================================================
OVERLAY
========================================================= */

if (sharedMobileMenuOverlay) {
sharedMobileMenuOverlay.addEventListener(
"click",
function() {
closeSharedMobileMenu();
}
);
}

/* =========================================================
ESC KEY
========================================================= */

document.addEventListener(
"keydown",
function(event) {
if (
event.key === "Escape" ||
event.key === "Esc"
) {
closeSharedMobileMenu();
}
}
);

/* =========================================================
MOBILE CATEGORY
========================================================= */

if (
sharedMobileCategoryButton &&
sharedMobileCategoryList
) {
sharedMobileCategoryButton.addEventListener(
"click",
function(event) {
event.preventDefault();

```
  const active =
    sharedMobileCategoryList.classList.toggle(
      "active"
    );

  sharedMobileCategoryButton.classList.toggle(
    "active",
    active
  );

  if (sharedMobileCategoryArrow) {
    sharedMobileCategoryArrow.textContent =
      active ? "⌃" : "⌄";
  }
}
```

);
}

/* =========================================================
CLOSE MENU AFTER LINK
========================================================= */

if (sharedMobileSideMenu) {
sharedMobileSideMenu
.querySelectorAll("a")
.forEach(function(link) {
link.addEventListener(
"click",
function() {
closeSharedMobileMenu();
}
);
});
}

/* =========================================================
DESKTOP CATEGORY DROPDOWN
========================================================= */

document
.querySelectorAll(
".nav-category"
)
.forEach(function(category) {
const button =
category.querySelector(
".nav-category-btn"
);

```
if (!button) {
  return;
}

button.addEventListener(
  "click",
  function(event) {
    event.preventDefault();

    document
      .querySelectorAll(
        ".nav-category.open"
      )
      .forEach(function(item) {
        if (item !== category) {
          item.classList.remove(
            "open"
          );
        }
      });

    category.classList.toggle(
      "open"
    );
  }
);
```

});

/* =========================================================
CLOSE DESKTOP DROPDOWN
========================================================= */

document.addEventListener(
"click",
function(event) {
if (
!event.target.closest(
".nav-category"
)
) {
document
.querySelectorAll(
".nav-category.open"
)
.forEach(function(item) {
item.classList.remove(
"open"
);
});
}
}
);

/* =========================================================
CART COUNT
این بخش در تمام صفحات کار می‌کند
========================================================= */

function getSharedCart() {
try {
const cart =
JSON.parse(
localStorage.getItem(
"navidTowelCart"
) || "[]"
);

```
return Array.isArray(cart)
  ? cart
  : [];
```

} catch (error) {
return [];
}
}

function updateSharedCartCount() {
const cart =
getSharedCart();

let count = 0;

cart.forEach(function(item) {
count += Math.max(
0,
Number(
item.quantity || 0
)
);
});

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
}

/* =========================================================
CART BUTTON
========================================================= */

document
.querySelectorAll(
".openCart"
)
.forEach(function(button) {
button.addEventListener(
"click",
function(event) {
event.preventDefault();

```
    window.location.href =
      "cart.html";
  }
);
```

});

/* =========================================================
CART STORAGE SYNC
========================================================= */

window.addEventListener(
"storage",
function(event) {
if (
event.key ===
"navidTowelCart"
) {
updateSharedCartCount();

```
  if (
    typeof window.updateShopCartUI ===
    "function"
  ) {
    window.updateShopCartUI();
  }
}
```

}
);

/* =========================================================
TAB / PAGE RETURN
========================================================= */

document.addEventListener(
"visibilitychange",
function() {
if (!document.hidden) {
updateSharedCartCount();

```
  if (
    typeof window.updateShopCartUI ===
    "function"
  ) {
    window.updateShopCartUI();
  }
}
```

}
);

/* =========================================================
INITIALIZE
========================================================= */

updateSharedCartCount();

/* =========================================================
GLOBAL API
========================================================= */

window.openSharedMobileMenu =
openSharedMobileMenu;

window.closeSharedMobileMenu =
closeSharedMobileMenu;

window.updateSharedCartCount =
updateSharedCartCount;
