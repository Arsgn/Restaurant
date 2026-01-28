"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { FC, useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

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
          
          <nav className={menuOpen ? scss.active : ""}>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              {t.interior}
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              {t.about}
            </Link>
            <Link href="/menu" onClick={() => setMenuOpen(false)}>
              {t.menu}
            </Link>
            <Link href="/contacts" onClick={() => setMenuOpen(false)}>
              {t.contacts}
            </Link>
          </nav>
          <div className={scss.btn}>
            <CiSearch />
            <span
              className={scss.lang}
              onClick={() => setLang(lang === "en" ? "ru" : "en")}
            >
              {lang.toUpperCase()}
            </span>
          </div>
          <div className={scss.icon}>
            {menuOpen ? (
              <IoClose
                className={scss.burger}
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <GiHamburgerMenu
                className={scss.burger}
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
