"use client";
import Image from "next/image";
import React from "react";
import scss from "./Menu.module.scss";

const Menu = () => {
  return (
    <section className={scss.Menu}>
      <div className={scss.category}>
        <p className={scss.chosen}>Desserts</p>
        <div>
          <p>Hot Drinks</p>
          <p>Cold Drinks</p>
          <p>National Foods</p>
          <p>Eastern cuisine</p>
          <p>Fast foods</p>
        </div>
      </div>
      <div className={scss.products}>
        <div className={scss.product}>
          {" "}
          <Image
            src="/menu.svg"
            alt="menu"
            width={329}
            height={187}
            style={{ objectFit: "cover" }}
          />
          <div className={scss.description}>
            <div>
              {" "}
              <h3>Ice Cream</h3>
              <p>soda,cream,milk,sugar</p>
            </div>
            <div>
              <p className={scss.price}>$9.11</p>
            </div>
          </div>
        </div>
        <div className={scss.product}>
          {" "}
          <Image
            src="/menu.svg"
            alt="menu"
            width={329}
            height={187}
            style={{ objectFit: "cover" }}
          />
          <div className={scss.description}>
            <div>
              {" "}
              <h3>Ice Cream</h3>
              <p>soda,cream,milk,sugar</p>
            </div>
            <div>
              <p className={scss.price}>$9.11</p>
            </div>
          </div>
        </div>
        <div className={scss.product}>
          {" "}
          <Image
            src="/menu.svg"
            alt="menu"
            width={329}
            height={187}
            style={{ objectFit: "cover" }}
          />
          <div className={scss.description}>
            <div>
              {" "}
              <h3>Ice Cream</h3>
              <p>soda,cream,milk,sugar</p>
            </div>
            <div>
              <p className={scss.price}>$9.11</p>
            </div>
          </div>
        </div>
        <div className={scss.product}>
          {" "}
          <Image
            src="/menu.svg"
            alt="menu"
            width={329}
            height={187}
            style={{ objectFit: "cover" }}
          />
          <div className={scss.description}>
            <div>
              {" "}
              <h3>Ice Cream</h3>
              <p>soda,cream,milk,sugar</p>
            </div>
            <div>
              <p className={scss.price}>$9.11</p>
            </div>
          </div>
        </div>
        <div className={scss.product}>
          {" "}
          <Image
            src="/menu.svg"
            alt="menu"
            width={329}
            height={187}
            style={{ objectFit: "cover" }}
          />
          <div className={scss.description}>
            <div>
              {" "}
              <h3>Ice Cream</h3>
              <p>soda,cream,milk,sugar</p>
            </div>
            <div>
              <p className={scss.price}>$9.11</p>
            </div>
          </div>
        </div>
        <div className={scss.product}>
          {" "}
          <Image
            src="/menu.svg"
            alt="menu"
            width={329}
            height={187}
            style={{ objectFit: "cover" }}
          />
          <div className={scss.description}>
            <div>
              {" "}
              <h3>Ice Cream</h3>
              <p>soda,cream,milk,sugar</p>
            </div>
            <div>
              <p className={scss.price}>$9.11</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
