"use client";
import { FC } from "react";
import scss from "./About.module.scss";
import Image from "next/image";

export const About: FC = () => {
  return (
    <section className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.leftSide}>
            <div className={scss.header}>
              <div className={scss.line}></div>
              <h3 className={scss.subtitle}>About Us</h3>
            </div>
            <h2 className={scss.title}>
              A Journey Throught
              <br />
              Cafesio Flavors
            </h2>
          </div>

          <div className={scss.rightSide}>
            <div className={scss.descriptionBox}>
              <p className={scss.description}>
                Try dishes that will open up new tastes for you and delight
                your eyes with their appearance. Here you will find a cozy
                atmosphere, excellent service and attention to each guest. Book
                a table now and enjoy a unique experience of taste discovery!
              </p>
            </div>
          </div>
        </div>

        <div className={scss.images}>
          <div className={scss.imageWrapper}>
            <Image
              src="/Frame 15.svg"
              alt="Chef preparing dish"
              width={500}
              height={350}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={scss.imageWrapper}>
            <Image
              src="/Frame 16.svg"
              alt="Restaurant table"
              width={500}
              height={350}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};