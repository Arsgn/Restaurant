"use client";
import { FC, useState, useEffect } from "react";
import scss from "./Delicious.module.scss";
import Image from "next/image";
import { useGetMenusQuery } from "@/api/menu";
import { useGetCategoriesQuery } from "@/api/category";
import { useLangStore } from "@/store/lang.store";

const Delicious: FC = () => {
  const { data: menuData, isLoading: menuLoading } = useGetMenusQuery();
  const { data: categoryData, isLoading: categoryLoading } =
  useGetCategoriesQuery();
  const t = useLangStore((s) => s.t);

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const categories = Array.isArray(categoryData)
    ? categoryData
    : categoryData?.data || [];
  const menus = menuData?.data || [];

  useEffect(() => {
    if (!selectedCategoryId && categories.length > 0) {
      setSelectedCategoryId(categories[0].id);
    }
  }, [categories, selectedCategoryId]);

  if (menuLoading || categoryLoading) {
    return (
      <section className={scss.Delicious}>
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </section>
    );
  }

  const filteredMenus = selectedCategoryId
    ? menus.filter((m) => m.category?.id === selectedCategoryId)
    : [];

  return (
    <section className={scss.Delicious}>
      <div className="container">
        <div className={scss.title}>
          <div className={scss.content}>
            <Image src="/Frame 9.svg" alt="left" width={60} height={30} />
            <h2>{t("delicious.menu")}</h2>
            <Image src="/Frame 10.svg" alt="right" width={60} height={30} />
          </div>
          <h1>{t("delicious.title")}</h1>
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
                  onClick={() => {
                    setSelectedCategoryId(cat.id);
                    setSelectedProduct(null);
                  }}
                  style={{ opacity: count === 0 ? 0.4 : 1 }}
                >
                  {cat.name} ({count})
                </p>
              );
            })}
          </div>

          <div className={scss.Allmenu}>
            {selectedProduct ? (
              <div className={scss.details}>
                <div className={scss.box_menu1}>
                  <h3>{selectedProduct.title}</h3>
                  <span>${selectedProduct.price}</span>
                </div>
                <p>{selectedProduct.description}</p>
                <button onClick={() => setSelectedProduct(null)}>Back</button>

                {selectedProduct.extras?.length > 0 && (
                  <div className={scss.extrasBox}>
                    <h4>Extras</h4>
                    {selectedProduct.extras.map((extra: any, index: number) => (
                      <p key={`extra-${index}`}>
                        {extra.title} - ${extra.price}
                      </p>
                    ))}
                  </div>
                )}

                {selectedProduct.drinks?.length > 0 && (
                  <div className={scss.extrasBox}>
                    <h4>Drinks</h4>
                    {selectedProduct.drinks.map((drink: any, index: number) => (
                      <p key={`drink-${index}`}>
                        {drink.title} - ${drink.price}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ) : filteredMenus.length === 0 ? (
              <p>{t("delicious.empty")}</p>
            ) : (
              filteredMenus.map((menu) => (
                <div
                  key={menu.id}
                  className={scss.box_menu}
                  onClick={() => setSelectedProduct(menu)}
                >
                  <div className={scss.box_menu1}>
                    <h3>{menu.title}</h3>
                    <span>${menu.price}</span>
                  </div>
                  <p>{menu.description}</p>
                  <button>{t("delicious.order")}</button>
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
