"use client";
import { FC } from "react";
import scss from "./Welcome.module.scss";
import Image from "next/image";
import { useLangStore } from "@/store/lang.store";

const Welcome: FC = () => {
  const t = useLangStore((s) => s.t);
  console.log(t("welcome.title"));
  const lang = useLangStore((s) => s.lang);
  console.log("LANG:", lang);
  console.log("DICT:", useLangStore.getState());

  return (
    <section className={scss.Welcome}>
      <div className={scss.imageWrapper}>
        <Image src="/logo.png" alt="Banner" fill priority />

        <div className={scss.overlay} />

        <div className={scss.content}>
          <div className={scss.subtitleWrapper}>
            <Image src="/Frame 10.svg" alt="image" width={90} height={25} />
            <span className={scss.subtitle}>{t("welcome.subtitle")}</span>
            <Image src="/Frame 9.svg" alt="image" width={90} height={25} />
          </div>

          <h1 className={scss.title}>{t("welcome.title")}</h1>

          <p className={scss.text}>{t("welcome.text")}</p>

          <button className={scss.button}>{t("welcome.button")}</button>
        </div>

        <div className={scss.footerInfo}>
          <div className={scss.item}>
            <span className={scss.label}>{t("welcome.location")}</span>
          </div>
          <div className={scss.item}>
            <span className={scss.label}>{t("welcome.hotline")}</span>
            <p>+7 771 219 9000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
