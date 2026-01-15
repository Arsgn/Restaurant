"use client";
import { FC } from "react";
import scss from "./BestSellers.module.scss";
import Image from "next/image";
export const BestSellers: FC = () => {
  return (
    <section className={scss.BestSellers}>
      <div className="container">
        <div className={scss.block}>
          <div className={scss.content}>
            <p>Best Sellers</p>
            <h2>You Only Reserve Exception</h2>
            <p>
              Each location has a menu that`s curated just for them. See what
              new at your Cafesio and You`ll find Cafesio Covent Carden moments.
            </p>
          </div>
          <Image src="/Frame 16.svg" alt="frame" width={100} height={100} />
          <Image src="/Frame 16.svg" alt="frame" width={100} height={100} />
        </div>
      </div>
    </section>
  );
};
