"use client";

import { FC, useEffect, useState } from "react";
import scss from "./Menu.module.scss";
import { useGetMenusQuery } from "@/api/menu";
import { useGetCategoriesQuery } from "@/api/category";

const Menu: FC = () => {
  const { data: menuData, isLoading: menuLoading } = useGetMenusQuery();
  const { data: categoryData, isLoading: categoryLoading } =
    useGetCategoriesQuery();

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [selectedProduct, setSelectedProduct] =
    useState<MENU.Menu | null>(null);

  const menus = menuData?.data || [];
  const categories = Array.isArray(categoryData)
    ? categoryData
    : categoryData?.data || [];

  useEffect(() => {
    if (categories.length && selectedCategoryId === null) {
      setSelectedCategoryId(categories[0].id);
    }
  }, [categories, selectedCategoryId]);

  const filteredMenus =
    selectedCategoryId === null
      ? menus
      : menus.filter((item) => item.categoryId === selectedCategoryId);

  if (menuLoading || categoryLoading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <section className={scss.Menu}>
      <aside className={scss.category}>
        {categories.map((cat) => (
          <p
            key={cat.id}
            onClick={() => {
              setSelectedCategoryId(cat.id);
              setSelectedProduct(null);
            }}
            className={selectedCategoryId === cat.id ? scss.chosen : ""}
          >
            {cat.name}
          </p>
        ))}
      </aside>

      <div className={scss.content}>
        {selectedProduct && (
          <div className={scss.details}>

            <div className={scss.info}>
              <div className={scss.mainInfo}>
            <img
              src={selectedProduct.image || "/menu.svg"}
              alt={selectedProduct.title}
            />
                <div className={scss.header}>
                  <h2>{selectedProduct.title}</h2>
                  <span className={scss.detailPrice}>
                    ${selectedProduct.price}
                  </span>
                </div>
                <div className={scss.bottomProduct}>
                  <h3>{selectedProduct.title}</h3>
                  <p>
                    {selectedProduct.ingredients ||
                      selectedProduct.description ||
                      "No description"}
                  </p>
                </div>


                <button
                  className={scss.close}
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
              </div>

              <div className={scss.extrasBox}>
                <h4 className={scss.extrasTitle}>Extras</h4>

                <div className={scss.extraRow}>
                  <span>Cherry</span>
                  <span>$0.90</span>
                </div>
                <div className={scss.extraRow}>
                  <span>Cherry</span>
                  <span>$0.90</span>
                </div>

                <h4 className={scss.extrasTitle}>Drinks</h4>

                <div className={scss.extraRow}>
                  <span>Coca Cola</span>
                  <span>$0.90</span>
                </div>
                <div className={scss.extraRow}>
                  <span>Coca Cola</span>
                  <span>$0.90</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={scss.products}>
          {filteredMenus.map((item) => (
            <div
              key={item.id}
              className={scss.product}
              onClick={() => setSelectedProduct(item)}
            >
              <img src={item.image || "/menu.svg"} alt={item.title} />

              <div className={scss.description}>
                <p>{item.title}</p>
                <span className={scss.price}>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
