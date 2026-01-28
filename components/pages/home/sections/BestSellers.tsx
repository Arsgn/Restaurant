"use client";
import { FC, useState } from "react";
import scss from "./BestSellers.module.scss";
import Image from "next/image";
import { BiSolidChevronsRight, BiSolidChevronsLeft } from "react-icons/bi";

const images = [
  "/Frame 19.svg",
  "/Frame 20.svg",
  "/Frame 256 (1).svg",
  "/Frame 420.svg",
  "/Frame 421.svg",
  "/Frame 422.svg",
];

export const BestSellers: FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 2;

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + itemsPerPage, images.length - itemsPerPage),
    );
  };
  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };
  const visibleImages = images.slice(startIndex, startIndex + itemsPerPage);
  return (
    <section className={scss.BestSellers}>
      <div className="container">
        <div className={scss.block}>
          <div className={scss.content}>
            <div className={scss.subtitleWrapper}>
              <Image src="/Frame 10.svg" alt="frame" width={100} height={100} />
              <p>Best Sellers</p>
              <Image src="/Frame 9.svg" alt="frame" width={100} height={100} />
            </div>
            <h2>You Only Reserve Exception</h2>
            <span>
              Each location has a menu that`s curated just for them. See what
              new at your Cafesio and You`ll find Cafesio Covent Carden moments.
            </span>
          </div>

          <div
            className={scss.imagesWrapper}
            style={{ display: "flex", gap: "16px", alignItems: "center" }}
          >
            <BiSolidChevronsLeft
              className={scss.icon}
              style={{ fontSize: "50px", cursor: "pointer", color: "white" }}
              onClick={handlePrev}
            />
            <div
              className={scss.images}
              style={{ display: "flex", gap: "16px" }}
            >
              {visibleImages.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`frame ${i}`}
                  width={340}
                  height={230}
                />
              ))}
            </div>
            <BiSolidChevronsRight
              className={scss.icon}
              style={{ fontSize: "50px", cursor: "pointer", color: "white" }}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
