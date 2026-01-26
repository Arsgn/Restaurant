"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Menu.module.scss";
import { useGetMenusQuery } from "@/api/menu";
import { useGetCategoriesQuery } from "@/api/category";
import { useSearchParams } from "next/navigation";

const Menu: FC = () => {
  const { data: menuData, isLoading: menuLoading } = useGetMenusQuery();
  const { data: categoryData, isLoading: categoryLoading } =
    useGetCategoriesQuery();

  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );
  const [selectedProduct, setSelectedProduct] = useState<MENU.Menu | null>(
    null,
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

    const product = menus.find((item) => item.id === Number(productId));

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

      <div className={scss.content}>
        {selectedProduct && (
          <>
            <div className={scss.details}>
              <div className={scss.mainInfo}>
                <img
                  src={selectedProduct.image || "/menu.svg"}
                  alt={selectedProduct.title}
                />
                <div className={scss.header}>
                  <div>
                    <h3>{selectedProduct.title}</h3>
                    <p style={{ color: "#BBBBBB" }}>
                      {selectedProduct.description}
                    </p>
                  </div>
                  <p className={scss.detailPrice}>${selectedProduct.price}</p>
                </div>
              </div>

              <div className={scss.extrasBox}>
                <h4 className={scss.extrasTitle}>Extras</h4>
                {selectedProduct.extras?.length ? (
                  selectedProduct.extras.map((extra, index) => (
                    <div className={scss.extraRow} key={`extra-${index}`}>
                      <span>{extra.title}</span>
                      <span>${extra.price}</span>
                    </div>
                  ))
                ) : (
                  <p className={scss.empty}>No extras</p>
                )}

                <h4 className={scss.extrasTitle}>Drinks</h4>
                {selectedProduct.drinks?.length ? (
                  selectedProduct.drinks.map((drink, index) => (
                    <div className={scss.extraRow} key={`drink-${index}`}>
                      <span>{drink.title}</span>
                      <span>${drink.price}</span>
                    </div>
                  ))
                ) : (
                  <p className={scss.empty}>No drinks</p>
                )}
              </div>
            </div>

            <h2 className={scss.similar}>Similar products</h2>
          </>
        )}

        {!selectedProduct && (
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
        )}
      </div>
    </section>
  );
};

export default Menu;
