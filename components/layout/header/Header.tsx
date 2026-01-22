"use client";

import { FC, useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";

const translations = {
  en: {
    interior: "Interior",
    about: "About",
    menu: "Menu",
    contacts: "Contacts",
    search: "Search",
  },
  ru: {
    interior: "Интерьер",
    about: "О нас",
    menu: "Меню",
    contacts: "Контакты",
    search: "Поиск",
  },
};

const Header: FC = () => {
  const [lang, setLang] = useState<"en" | "ru">("en");
  const [menuOpen, setMenuOpen] = useState(false); 

  const t = translations[lang];

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Link href="/">
            <h1 className={scss.title}>Restaurant</h1>
          </Link>

          <div
            className={`${scss.burger} ${menuOpen ? scss.active : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={menuOpen ? scss.active : ""}>
            <Link href="/">{t.interior}</Link>
            <Link href="/about">{t.about}</Link>
            <Link href="/menu">{t.menu}</Link>
            <Link href="/contacts">{t.contacts}</Link>
          </nav>

          <div className={scss.btn}>
            <button>{t.search}</button>
            <span
              className={scss.lang}
              onClick={() => setLang(lang === "en" ? "ru" : "en")}
            >
              {lang.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
