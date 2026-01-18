"use client";
import { FC } from "react";
import scss from "./BestSellers.module.scss";
import Image from "next/image";
import { BiSolidChevronsRight } from "react-icons/bi";

export const BestSellers: FC = () => {
  return (
    <section className={scss.BestSellers}>
      <div className="container">
        <div className={scss.block}>
          <div className={scss.content}>
            <div className={scss.subtitleWrapper}>
              <Image src="/Frame 10.svg" alt="frame" width={100} height={100} />
              <p>Best Sellers</p>
            </div>
            <h2>You Only Reserve Exception</h2>
            <p>
              Each location has a menu that`s curated just for them. See what
              new at your Cafesio and You`ll find Cafesio Covent Carden moments.
            </p>
          </div>
          <div className={scss.images}>
            <Image src="/Frame 19.svg" alt="frame" width={340} height={230} />
            <Image src="/Frame 20.svg" alt="frame" width={340} height={230} />
          </div>
          <BiSolidChevronsRight style={{ fontSize: "110px", color:"white"}} />
        </div>
      </div>
    </section>
  );
};
