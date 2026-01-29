"use client";

import { FC, useState } from "react";
import scss from "./BestSellers.module.scss";
import Image from "next/image";
import { useLangStore } from "@/store/lang.store";

const images = [
  "/Frame 19.svg",
  "/Frame 20.svg",
  "/Frame 16.svg",
  "/Frame 15.svg",
  "/Frame 19.svg",
  "/Frame 16.svg",
];

const ArrowIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 14L28 24L20 34"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BestSellers: FC = () => {
  const t = useLangStore((s) => s.t);
  const [page, setPage] = useState(0);

  const next = () => {
    if (page < images.length - 2) setPage((p) => p + 1);
  };

  const prev = () => {
    if (page > 0) setPage((p) => p - 1);
  };

  return (
    <section className={scss.BestSellers}>
      <div className="container">
        <div className={scss.block}>
          <div className={scss.content}>
            <div className={scss.subtitleWrapper}>
              <Image src="/Frame 10.svg" alt="frame" width={50} height={30} />
              <p>{t("best.subtitle")}</p>
            </div>

            <h2>{t("best.title")}</h2>
            <p>{t("best.text")}</p>
          </div>

          <div className={scss.slider}>
            <button
              onClick={prev}
              className={`${scss.arrow} ${scss.arrowLeft}`}
              disabled={page === 0}
            >
              <ArrowIcon />
            </button>

            <div className={scss.imagesWrapper}>
              <div
                className={scss.images}
                style={{
                  transform: `translateX(-${page * (260 + 24)}px)`,
                }}
              >
                {images.map((src, i) => (
                  <div key={i} className={scss.card}>
                    <Image src={src} alt="dish" fill />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={next}
              className={scss.arrow}
              disabled={page >= images.length - 2}
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
