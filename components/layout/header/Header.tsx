"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import scss from "./Header.module.scss";
import { useSearchMenusQuery } from "@/api/menu";

const translations = {
  en: {
    interior: "Interior",
    about: "About Us",
    menu: "Menu",
    contacts: "Contacts",
    searchPlaceholder: "Search menu...",
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
  const [lang, setLang] = useState<"en" | "ru">("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery.trim()), 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const { data: searchData } = useSearchMenusQuery(
    debouncedSearch || "",
  );

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Link href="/" onClick={() => setShowSearch(false)}>
            <h1 className={scss.title}>Restaurant</h1>
          </Link>

          <nav className={scss.nav}>
            <Link href="/">{t.interior}</Link>
            <Link href="/about">{t.about}</Link>
            <Link href="/menu">{t.menu}</Link>
            <Link href="/contacts">{t.contacts}</Link>
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
              {debouncedSearch &&
                searchData &&
                (searchData.data as MENU.Menu[]).map((item) => (
                  <Link
                    key={item.id}
                    href={`/menu?productId=${item.id}`}
                    className={scss.searchItem}
                  >
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span>${item.price}</span>
                  </Link>
                ))}
            </div>

            <button
              className={scss.lang}
              onClick={() => setLang(lang === "en" ? "ru" : "en")}
            >
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
