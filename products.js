const products = 
[
    {
        id: 1,
        name: "حوله حمام لوکس آریا",
        price: 55555555,
        oldPrice: 1590000,
        badge: "پرفروش",
        categories: ["bath", "men", "women"],
        images: [
            "images/bath-luxury-aria.webp",
            "images/bath-luxury-aria-2.webp",
            "images/bath-luxury-aria-3.webp"
        ],
        colors: [],
        description: "حوله حمام نرم و باکیفیت با جذب آب بالا، مناسب استفاده روزمره.",
        quality: "درجه یک",
        material: "پنبه",
        country: "ترکیه",
        origin: "خارجی",
        use: "حمام و استفاده روزمره",
        brand: "آریا",
        size: "70×140"
    },

    {
        id: 2,
        name: "حوله حمام هتلی",
        price: 22222222,
        oldPrice: 1190000,
        badge: "محبوب",
        categories: ["bath", "men", "women"],
        image: "images/bath-hotel.webp",
        colors: [],
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
        colors: [],
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
        colors: [],
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
        colors: [],
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
        colors: [],
        description: "ست کامل حوله دو نفره مناسب استفاده خانوادگی و هدیه."
    },

    {
        id: 7,
        name: "حوله حمام مردانه کلاسیک",
        price: 1090000,
        oldPrice: 1290000,
        badge: "پرفروش",
        categories: ["men", "bath"],
        image: "images/men-bath.webp",
        colors: [],
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
        colors: [],
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
        colors: [],
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
        colors: [],
        description: "ست حوله مردانه مناسب استفاده روزمره و هدیه."
    },

    {
        id: 11,
        name: "حوله حمام زنانه",
        price: 1190000,
        oldPrice: 1390000,
        badge: "پرفروش",
        categories: ["women", "bath"],
        image: "images/women-bath.webp",
        colors: [],
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
        colors: [],
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
        colors: [],
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
        colors: [],
        description: "ست حوله زنانه زیبا و باکیفیت مناسب استفاده شخصی و هدیه."
    },

    {
        id: 15,
        name: "حوله کودک طرح‌دار",
        price: 590000,
        oldPrice: 690000,
        badge: "محبوب",
        categories: ["kids", "bath"],
        image: "images/kids-towel.webp",
        colors: [],
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
        colors: [],
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
        colors: [],
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
        colors: [],
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
        colors: [],
        description: "تن‌پوش بچگانه نرم و راحت مناسب بعد از حمام."
    },

    {
        id: 20,
        name: "حوله استخری ساده",
        price: 690000,
        oldPrice: 790000,
        badge: "پرفروش",
        categories: ["pool", "men", "women"],
        image: "images/pool-towel.webp",
        colors: [],
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
        colors: [],
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
        colors: [],
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
        colors: [],
        description: "حوله استخری کودک سبک و لطیف با طراحی مناسب کودکان."
    },

    {
        id: 24,
        name: "حوله متری ساده",
        price: 420000,
        oldPrice: 480000,
        badge: "اقتصادی",
        categories: ["meter", "bath"],
        image: "images/meter-simple.webp",
        colors: [],
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
        colors: [],
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
        colors: [],
        description: "پارچه حوله‌ای متری با ضخامت و لطافت بالاتر."
    },

    {
        id: 27,
        name: "تن‌پوش کلاه‌دار",
        price: 1590000,
        oldPrice: 1890000,
        badge: "پرفروش",
        categories: ["robe", "men", "women"],
        image: "images/hooded-robe.webp",
        colors: [],
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
        colors: [],
        description: "تن‌پوش حوله‌ای لوکس با بافت نرم، ضخامت مناسب و طراحی شیک."
    },

  {
    id: 29,
    name: "کلاه حوله ای",
    price: 12345678,
    oldPrice: 0,
    categories: ["had"],
    image: "0",
    images: [],
    description: "کلاه حمام سه کوش جنس عالی",
    quality: "",
    material: "",
    country: "",
    origin: "",
    use: "",
    brand: "",
    size: "",
    colors: [{"name":"ابی","stock":12}],
    active: true
  },
];