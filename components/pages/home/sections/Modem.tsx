"use client";
import { FC } from "react";
import scss from "./Modem.module.scss";
import Image from "next/image";
import { useLangStore } from "@/store/lang.store";
const Modem: FC = () => {
  const t = useLangStore((s) => s.t);
  return (
    <section className={scss.Modem}>
      <div className="container">
        <div className={scss.content}>
          <Image src="/Frame 9.svg" alt="logo" width={60} height={30} />
          <h2 className={scss.title}>{t("modem.title")}</h2>
  
          <Image src="/Frame 10.svg" alt="logo1" width={60} height={30} />
        </div>
        <div className={scss.gallery}>
          <div className={`${scss.item} ${scss.big}`}>
            <Image src="/Component 86.svg" alt="" fill />
          </div>

          <div className={scss.item}>
            <Image src="/Component 87.svg" alt="" fill />
          </div>

          <div className={scss.item}>
            <Image src="/Component 88.svg" alt="" fill />
          </div>

          <div className={scss.item}>
            <Image src="/logo1.svg" alt="" fill />
          </div>

          <div className={`${scss.item} ${scss.big}`}>
            <Image src="/Component 90.svg" alt="" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modem;
