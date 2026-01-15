"use client";
import { FC } from "react";
import scss from "./Welcome.module.scss";
import Image from "next/image";

export const Welcome: FC = () => {
  return (
    <section className={scss.Welcome}>
      <div className={scss.imageWrapper}>
        <Image
          src="/Frame 15.svg"
          alt="Banner"
          fill
          priority
          style={{ objectFit: "cover" }}
        />

        <div className={scss.overlay} />

        <div className={scss.content}>
          <div className={scss.subtitleWrapper}>
            <Image src="/Frame 10.svg" alt="image" width={90} height={25} />
            <span className={scss.subtitle}>Delicious</span>
            <Image src="/Frame 9.svg" alt="image" width={90} height={25} />
          </div>
          <h1 className={scss.title}>Italian Cuisine</h1>
          <p className={scss.text}>
            Classic steak & delicious with delightfully unexpected twists. The
            restaurant’s sunny decor was inspired by the diners.
          </p>
          <button className={scss.button}>RESERVE YOUR TABLE</button>
        </div>
        {/* Location & Phone */}
        <div className={scss.footerInfo}>
          <div className={scss.item}>
            <span className={scss.label}>Location ------ 📍</span>
            <p>Rua Da Moeda 1g, 1200-275, Portugal</p>
          </div>

          <div className={scss.item}>
            <span className={scss.label}>Hotline----- 📞</span>
            <p>+7 771 219 9000</p>
          </div>
        </div>
      </div>
    </section>
  );
};