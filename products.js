const products = [
    // =========================
    // حمامی
    // =========================

    {
        id: 1,
        name: "حوله حمام لوکس آریا",
        price: 1290000,
        oldPrice: 1590000,
        badge: "پرفروش",
        categories: ["bath", "men", "women"],
        image: "images/bath-luxury-aria.webp",
        description: "حوله حمام نرم و باکیفیت با جذب آب بالا، مناسب استفاده روزمره."
    },

    {
        id: 2,
        name: "حوله حمام هتلی",
        price: 990000,
        oldPrice: 1190000,
        badge: "محبوب",
        categories: ["bath", "men", "women"],
        image: "images/bath-hotel.webp",
        description: "حوله حمام با بافت متراکم و لطافت بالا، مناسب استفاده شخصی و هتلی."
    },

    {
        id: 3,
        name: "حوله حمام کلاسیک",
        price: 890000,
        oldPrice: 1090000,
        badge: "پیشنهاد ویژه",
        categories: ["bath", "men", "women"],
        image: "images/bath-classic.webp",
        description: "حوله‌ای کاربردی و نرم با جذب مناسب برای استفاده روزانه."
    },

    {
        id: 4,
        name: "حوله دست و صورت",
        price: 390000,
        oldPrice: 450000,
        badge: "محبوب",
        categories: ["bath", "men", "women"],
        image: "images/hand-face.webp",
        description: "حوله سبک و لطیف مناسب دست و صورت با جذب آب مناسب."
    },

    {
        id: 5,
        name: "حوله مهمان",
        price: 290000,
        oldPrice: 350000,
        badge: "جدید",
        categories: ["bath", "women"],
        image: "images/guest-towel.webp",
        description: "حوله مهمان زیبا و ظریف، مناسب سرویس بهداشتی و پذیرایی."
    },

    {
        id: 6,
        name: "ست حوله دو نفره",
        price: 1490000,
        oldPrice: 1790000,
        badge: "ویژه",
        categories: ["bath", "men", "women"],
        image: "images/towel-set.webp",
        description: "ست کامل حوله دو نفره مناسب استفاده خانوادگی و هدیه."
    },

    // =========================
    // مردانه
    // =========================

    {
        id: 7,
        name: "حوله حمام مردانه کلاسیک",
        price: 1090000,
        oldPrice: 1290000,
        badge: "پرفروش",
        categories: ["men", "bath"],
        image: "images/men-bath.webp",
        description: "حوله حمام مردانه با طراحی ساده، ضخامت مناسب و جذب آب بالا."
    },

    {
        id: 8,
        name: "حوله استخری مردانه",
        price: 790000,
        oldPrice: 890000,
        badge: "جدید",
        categories: ["men", "pool"],
        image: "images/men-pool.webp",
        description: "حوله استخری سبک و کاربردی مناسب ورزش و استخر."
    },

    {
        id: 9,
        name: "تن‌پوش مردانه کلاسیک",
        price: 1690000,
        oldPrice: 1990000,
        badge: "ویژه",
        categories: ["men", "robe"],
        image: "images/men-robe.webp",
        description: "تن‌پوش حوله‌ای مردانه با طراحی راحت و جذب آب مناسب."
    },

    {
        id: 10,
        name: "ست حوله مردانه",
        price: 1590000,
        oldPrice: 1890000,
        badge: "محبوب",
        categories: ["men", "bath"],
        image: "images/men-set.webp",
        description: "ست حوله مردانه مناسب استفاده روزمره و هدیه."
    },

    // =========================
    // زنانه
    // =========================

    {
        id: 11,
        name: "حوله حمام زنانه",
        price: 1190000,
        oldPrice: 1390000,
        badge: "پرفروش",
        categories: ["women", "bath"],
        image: "images/women-bath.webp",
        description: "حوله حمام زنانه لطیف با طراحی زیبا و جذب آب بالا."
    },

    {
        id: 12,
        name: "تن‌پوش زنانه",
        price: 1490000,
        oldPrice: 1790000,
        badge: "جدید",
        categories: ["women", "robe"],
        image: "images/women-robe.webp",
        description: "تن‌پوش زنانه نرم و راحت مناسب استفاده بعد از حمام."
    },

    {
        id: 13,
        name: "حوله استخری زنانه",
        price: 790000,
        oldPrice: 890000,
        badge: "محبوب",
        categories: ["women", "pool"],
        image: "images/women-pool.webp",
        description: "حوله استخری زنانه سبک و لطیف مناسب استخر و سفر."
    },

    {
        id: 14,
        name: "ست حوله زنانه",
        price: 1690000,
        oldPrice: 1990000,
        badge: "ویژه",
        categories: ["women", "bath"],
        image: "images/women-set.webp",
        description: "ست حوله زنانه زیبا و باکیفیت مناسب استفاده شخصی و هدیه."
    },

    // =========================
    // بچگانه
    // =========================

    {
        id: 15,
        name: "حوله کودک طرح‌دار",
        price: 590000,
        oldPrice: 690000,
        badge: "محبوب",
        categories: ["kids", "bath"],
        image: "images/kids-towel.webp",
        description: "حوله کودک نرم و لطیف با طراحی جذاب و مناسب پوست حساس."
    },

    {
        id: 16,
        name: "حوله کلاه‌دار نوزاد",
        price: 490000,
        oldPrice: 590000,
        badge: "جدید",
        categories: ["kids", "bath"],
        image: "images/baby-hooded.webp",
        description: "حوله کلاه‌دار نرم و لطیف مناسب نوزاد و کودک."
    },

    {
        id: 17,
        name: "حوله دخترانه",
        price: 550000,
        oldPrice: 650000,
        badge: "محبوب",
        categories: ["kids", "women"],
        image: "images/kids-girl.webp",
        description: "حوله کودکانه با طراحی شاد و لطافت مناسب برای کودکان."
    },

    {
        id: 18,
        name: "حوله پسرانه",
        price: 550000,
        oldPrice: 650000,
        badge: "محبوب",
        categories: ["kids", "men"],
        image: "images/kids-boy.webp",
        description: "حوله کودکانه سبک و نرم مناسب استفاده روزمره."
    },

    {
        id: 19,
        name: "تن‌پوش بچگانه",
        price: 890000,
        oldPrice: 1090000,
        badge: "ویژه",
        categories: ["kids", "robe"],
        image: "images/kids-robe.webp",
        description: "تن‌پوش بچگانه نرم و راحت مناسب بعد از حمام."
    },

    // =========================
    // استخری
    // =========================

    {
        id: 20,
        name: "حوله استخری ساده",
        price: 690000,
        oldPrice: 790000,
        badge: "پرفروش",
        categories: ["pool", "men", "women"],
        image: "images/pool-towel.webp",
        description: "حوله استخری سبک و جاذب مناسب استخر، باشگاه و سفر."
    },

    {
        id: 21,
        name: "حوله استخری بزرگ",
        price: 890000,
        oldPrice: 990000,
        badge: "جدید",
        categories: ["pool", "men", "women"],
        image: "images/pool-large.webp",
        description: "حوله استخری بزرگ با پوشش مناسب و جذب آب بالا."
    },

    {
        id: 22,
        name: "حوله استخری طرح‌دار",
        price: 790000,
        oldPrice: 920000,
        badge: "محبوب",
        categories: ["pool", "men", "women"],
        image: "images/pool-pattern.webp",
        description: "حوله استخری طرح‌دار با ظاهر جذاب و بافت نرم."
    },

    {
        id: 23,
        name: "حوله استخری کودک",
        price: 590000,
        oldPrice: 690000,
        badge: "جدید",
        categories: ["pool", "kids"],
        image: "images/pool-kids.webp",
        description: "حوله استخری کودک سبک و لطیف با طراحی مناسب کودکان."
    },

    // =========================
    // متری
    // =========================

    {
        id: 24,
        name: "حوله متری ساده",
        price: 420000,
        oldPrice: 480000,
        badge: "اقتصادی",
        categories: ["meter", "bath"],
        image: "images/meter-simple.webp",
        description: "حوله متری ساده مناسب دوخت انواع حوله و محصولات سفارشی."
    },

    {
        id: 25,
        name: "حوله متری هتلی",
        price: 490000,
        oldPrice: 560000,
        badge: "محبوب",
        categories: ["meter", "bath"],
        image: "images/meter-hotel.webp",
        description: "پارچه حوله‌ای متری با کیفیت مناسب برای تولید محصولات حوله‌ای."
    },

    {
        id: 26,
        name: "حوله متری لوکس",
        price: 590000,
        oldPrice: 690000,
        badge: "ویژه",
        categories: ["meter", "bath"],
        image: "images/meter-luxury.webp",
        description: "پارچه حوله‌ای متری با ضخامت و لطافت بالاتر."
    },

    // =========================
    // تن‌پوش
    // =========================

    {
        id: 27,
        name: "تن‌پوش کلاه‌دار",
        price: 1590000,
        oldPrice: 1890000,
        badge: "پرفروش",
        categories: ["robe", "men", "women"],
        image: "images/hooded-robe.webp",
        description: "تن‌پوش حوله‌ای کلاه‌دار مناسب استفاده بعد از حمام و استخر."
    },

    {
        id: 28,
        name: "تن‌پوش لوکس حوله‌ای",
        price: 1890000,
        oldPrice: 2190000,
        badge: "ویژه",
        categories: ["robe", "men", "women"],
        image: "images/luxury-robe.webp",
        description: "تن‌پوش حوله‌ای لوکس با بافت نرم، ضخامت مناسب و طراحی شیک."
    }
];