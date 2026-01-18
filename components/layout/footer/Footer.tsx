"use client";
import { FC } from "react";
import scss from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <h1>Restaurant</h1>
          <nav>
            <a href="">Interior</a>
            <a href="">About Us</a>
            <a href="">Menu</a>
            <a href="">Contacts</a>
          </nav>
          <div className={scss.icons}>
            <FaInstagram />
            <FaTelegramPlane />
          </div>
        </div>
        <p>c 2023 Motion Study LLC</p>
      </div>
    </footer>
  );
};

export default Footer;
