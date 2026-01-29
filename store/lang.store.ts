import { create } from "zustand";

type Lang = "ru" | "en";

type Dictionary = {
  [key: string]: string | Dictionary;
};

interface LangStore {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const dictionary: Record<Lang, Dictionary> = {
  en: {
    header: {
      home: "Home",
      menu: "Menu",
      about: "About",
      contact: "Contact",
    },

    welcome: {
      subtitle: "Welcome to Cafesio",
      title: "Exceptional Quality. Delightfully Delicious",
      text: "We serve the best coffee and food made with love.",
      button: "Order Now",
      location: "Location",
      hotline: "Hotline",
    },

    modem: {
      title: "Main Menu",
    },

    delicious: {
      menu: "Main Menu",
      title: "Exceptional Quality. Delightfully Delicious",
      order: "Order Now",
      empty: "No items in this category",
    },

    best: {
      subtitle: "Best Sellers",
      title: "You Only Reserve Exception",
      text: "Each location has a menu that’s curated just for them.",
    },

    about: {
      subtitle: "About Us",
      title: "A Journey Through Cafesio Flavors",
      text: "Try dishes that will open up new tastes and impressions.",
    },

    address: {
      visit: "Visit Restaurant",
      title: "Join Us for Happy Hours",
      button: "PURCHASE GIFT CARD →",
    },
  },

  ru: {
    header: {
      home: "Главная",
      menu: "Меню",
      about: "О нас",
      contact: "Контакты",
    },

    welcome: {
      subtitle: "Добро пожаловать в Cafesio",
      title: "Исключительное качество. Восхитительный вкус",
      text: "Мы подаем лучший кофе и еду, приготовленные с любовью.",
      button: "Заказать сейчас",
      location: "Локация",
      hotline: "Горячая линия",
    },

    modem: {
      title: "Главное меню",
    },

    delicious: {
      menu: "Главное меню",
      title: "Исключительное качество. Восхитительный вкус",
      order: "Заказать",
      empty: "В этой категории нет блюд",
    },

    best: {
      subtitle: "Хиты продаж",
      title: "Вы заслуживаете только лучшее",
      text: "В каждом ресторане — уникальное меню для гостей.",
    },

    about: {
      subtitle: "О нас",
      title: "Путешествие по вкусам Cafesio",
      text: "Попробуйте блюда, которые откроют новые вкусы.",
    },

    address: {
      visit: "Посетите ресторан",
      title: "Присоединяйтесь к Happy Hours",
      button: "КУПИТЬ ПОДАРОЧНУЮ КАРТУ →",
    },
  },
};

export const useLangStore = create<LangStore>((set, get) => ({
  lang: "en",

  setLang: (lang) => set({ lang }),

  t: (key: string) => {
    const keys = key.split(".");
    let result: any = dictionary[get().lang];

    for (const k of keys) {
      result = result?.[k];
      if (!result) return key;
    }

    return typeof result === "string" ? result : key;
  },
}));
