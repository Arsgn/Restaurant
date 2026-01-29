"use client";
import { FC } from "react";
import scss from "./About.module.scss";
import Image from "next/image";
import { useLangStore } from "@/store/lang.store";

export const About: FC = () => {
  const t = useLangStore((s) => s.t);
  return (
    <section className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.leftSide}>
            <div className={scss.header}>
              <div className={scss.line}></div>
              <h3>{t("about.subtitle")}</h3>

            </div>
            <h2>{t("about.title")}</h2>
          </div>

          <div className={scss.rightSide}>
            <div className={scss.descriptionBox}>
              <p>{t("about.text")}</p>
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
