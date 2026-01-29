"use client";

import { FC, useEffect, useState } from "react";
import scss from "./Menu.module.scss";
import { useGetMenusQuery } from "@/api/menu";
import { useGetCategoriesQuery } from "@/api/category";
import { useSearchParams } from "next/navigation";

const mockExtras = [
  { title: "Cherry", price: 0.9 },
  { title: "Cherry", price: 0.9 },
];

const mockDrinks = [
  { title: "Coca Cola", price: 0.9 },
  { title: "Coca Cola", price: 0.9 },
];

const Menu: FC = () => {
  const { data: menuData, isLoading: menuLoading } = useGetMenusQuery();
  const { data: categoryData, isLoading: categoryLoading } =
    useGetCategoriesQuery();

  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [selectedProduct, setSelectedProduct] = useState<MENU.Menu | null>(
    null
  );

  const menus = menuData?.data || [];
  const categories = Array.isArray(categoryData)
    ? categoryData
    : categoryData?.data || [];

  const filteredMenus =
    selectedCategoryId === null
      ? menus
      : menus.filter((item) => item.category?.id === selectedCategoryId);

  useEffect(() => {
    if (!selectedCategoryId && categories.length > 0) {
      setSelectedCategoryId(categories[0].id);
    }
  }, [categories, selectedCategoryId]);

  useEffect(() => {
    if (!productId || !menus.length) return;
    const product = menus.find((i) => i.id === Number(productId));
    if (product) {
      setSelectedProduct(product);
      setSelectedCategoryId(product.category?.id || null);
    }
  }, [productId, menus]);

  if (menuLoading || categoryLoading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <section className={scss.Menu}>
      {/* CATEGORIES */}
      <aside className={scss.category}>
        {categories.map((cat) => (
          <h3
            key={cat.id}
            onClick={() => {
              setSelectedCategoryId(cat.id);
              setSelectedProduct(null);
            }}
            className={selectedCategoryId === cat.id ? scss.chosen : ""}
          >
            {cat.name}
          </h3>
        ))}
      </aside>

      {/* CONTENT */}
      <div className={scss.content}>
        {selectedProduct ? (
          <>
            {/* DETAIL CARD */}
            <div className={scss.details}>
              {/* LEFT */}
              <div className={scss.left}>
                <img
                  src={selectedProduct.image || "/menu.svg"}
                  alt={selectedProduct.title}
                />

                <div className={scss.header}>
                  <div>
                    <h3>{selectedProduct.title}</h3>
                    <p>{selectedProduct.description}</p>
                  </div>
                  <span className={scss.detailPrice}>
                    ${selectedProduct.price}
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <div className={scss.extrasBox}>
                <h4>Extras</h4>

                {selectedProduct.extras?.map((extra, i) => (
                  <div key={`extra-${i}`} className={scss.row}>
                    <span>{extra.title}</span>
                    <span>${extra.price}</span>
                  </div>
                ))}

                {/* MOCK EXTRAS */}
                {mockExtras.map((item, i) => (
                  <div key={`mock-extra-${i}`} className={`${scss.row} ${scss.mock}`}>
                    <span>{item.title}</span>
                    <span>${item.price}</span>
                  </div>
                ))}

                <h4>Drinks</h4>

                {selectedProduct.drinks?.map((drink, i) => (
                  <div key={`drink-${i}`} className={scss.row}>
                    <span>{drink.title}</span>
                    <span>${drink.price}</span>
                  </div>
                ))}

                {/* MOCK DRINKS */}
                {mockDrinks.map((item, i) => (
                  <div key={`mock-drink-${i}`} className={`${scss.row} ${scss.mock}`}>
                    <span>{item.title}</span>
                    <span>${item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className={scss.similar}>Similar products</h2>
          </>
        ) : (
          <div className={scss.products}>
            {filteredMenus.map((item) => (
              <div
                key={item.id}
                className={scss.product}
                onClick={() => setSelectedProduct(item)}
              >
                <img src={item.image || "/menu.svg"} alt={item.title} />
                <div className={scss.productInfo}>
                  <p>{item.title}</p>
                  <span>${item.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
