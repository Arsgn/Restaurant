"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import scss from "./Header.module.scss";
import { useSearchMenusQuery } from "@/api/menu";
import { useLangStore } from "@/store/lang.store";

const translations = {
  en: {
    interior: "Interior",
    about: "About Us",
    menu: "Menu",
    contacts: "Contacts",
    searchPlaceholder: "Search",
  },
  ru: {
    interior: "Интерьер",
    about: "О нас",
    menu: "Меню",
    contacts: "Контакты",
    searchPlaceholder: "Поиск по меню...",
  },
};

const Header: FC = () => {
  const { lang, setLang } = useLangStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery.trim()), 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const { data: searchData } = useSearchMenusQuery(debouncedSearch || "");

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Link href="/" onClick={closeMobileMenu}>
            <h1 className={scss.title}>Restaurant</h1>
          </Link>

          <nav className={scss.nav}>
            <Link href="/">{t.interior}</Link>
            <Link href="/about">{t.about}</Link>
            <Link href="/menu">{t.menu}</Link>
            <Link href="/address">{t.contacts}</Link>
          </nav>

          <div className={scss.actions}>
            <div className={scss.searchWrapper}>
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={scss.searchInput}
                onFocus={() => setShowSearch(true)}
              />
              {debouncedSearch && searchData && (
                <div className={scss.searchResults}>
                  {(searchData.data as MENU.Menu[]).map((item) => (
                    <Link
                      key={item.id}
                      href={`/menu?productId=${item.id}`}
                      className={scss.searchItem}
                    >
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                      <span>${item.price}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              className={scss.lang}
              onClick={() => setLang(lang === "en" ? "ru" : "en")}
            >
              {lang.toUpperCase()}
            </button>

            <button
              className={`${scss.burgerButton} ${mobileMenuOpen ? scss.active : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`${scss.overlay} ${mobileMenuOpen ? scss.open : ""}`}
        onClick={closeMobileMenu}
      />

      {/* MOBILE MENU */}
      <div className={`${scss.mobileMenu} ${mobileMenuOpen ? scss.open : ""}`}>
        <div className={scss.mobileSearchWrapper}>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={scss.searchInput}
          />
          {debouncedSearch && searchData && (
            <div className={scss.searchResults}>
              {(searchData.data as MENU.Menu[]).map((item) => (
                <Link
                  key={item.id}
                  href={`/menu?productId=${item.id}`}
                  className={scss.searchItem}
                  onClick={closeMobileMenu}
                >
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <span>${item.price}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <nav className={scss.mobileNav}>
          <Link href="/" onClick={closeMobileMenu}>
            {t.interior}
          </Link>
          <Link href="/about" onClick={closeMobileMenu}>
            {t.about}
          </Link>
          <Link href="/menu" onClick={closeMobileMenu}>
            {t.menu}
          </Link>
          <Link href="/address" onClick={closeMobileMenu}>
            {t.contacts}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;