"use client";

import { FC, useState } from "react";
import scss from "./Delicious.module.scss";
import Image from "next/image";
import { useGetMenusQuery } from "@/api/menu";
import { useGetCategoriesQuery } from "@/api/category";

const Delicious: FC = () => {
  const { data: menuData, isLoading: menuLoading } = useGetMenusQuery();
  const { data: categoryData, isLoading: categoryLoading } =
    useGetCategoriesQuery();

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );

  if (menuLoading || categoryLoading) {
    return (
      <section className={scss.Delicious}>
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </section>
    );
  }

  const menus = menuData?.data || [];
  const categories = Array.isArray(categoryData)
    ? categoryData
    : categoryData?.data || [];

  const filteredMenus = selectedCategoryId
    ? menus.filter((m) => m.category?.id === selectedCategoryId)
    : menus;

  return (
    <section className={scss.Delicious}>
      <div className="container">
        <div className={scss.title}>
          <div className={scss.content}>
            <Image src="/Frame 9.svg" alt="left" width={60} height={30} />
            <h2>Main Menu</h2>
            <Image src="/Frame 10.svg" alt="right" width={60} height={30} />
          </div>
          <h1>Exceptional Quality. Delightfully Delicious</h1>
        </div>

        <div className={scss.menu_block}>
          <div className={scss.menu}>
            {categories.map((cat) => {
              const count = menus.filter(
                (m) => m.category?.id === cat.id,
              ).length;

              return (
                <p
                  key={cat.id}
                  className={selectedCategoryId === cat.id ? scss.active : ""}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  style={{ opacity: count === 0 ? 0.4 : 1 }}
                >
                  {cat.name}
                </p>
              );
            })}
          </div>
          <div className={scss.Allmenu}>
            {filteredMenus.length === 0 ? (
              <p className={scss.empty}>No items in this category</p>
            ) : (
              filteredMenus.map((menu) => (
                <div key={menu.id} className={scss.box_menu}>
                  <div className={scss.box_menu1}>
                    <h3>{menu.title}</h3>
                    <span>${menu.price}</span>
                  </div>

                  <p>{menu.description}</p>

                  <button>Order Now</button>
                </div>
              ))
            )}

            <div className={scss.full}>
              <button className={scss.buttonOutline}>View Full Menu</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delicious;
