"use client";
import { FC } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>Restaurant</h1>
          <nav>
            <a href="">Interior</a>
            <Link href="/menu">Menu</Link>
            <Link href="/details">About</Link>
            <a href="">Contacts</a>
          </nav>
          <div className={scss.btn}>
            <button>search</button>
            <p>En</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
