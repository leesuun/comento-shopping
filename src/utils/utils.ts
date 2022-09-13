import { ProductInfo, productItemsType } from "interface/interface";

export const getProductDetail = (
  productId: number,
  productItems: productItemsType
) => {
  const productItemKeys = Object.keys(productItems);
  const allProductItems: ProductInfo[] = [];

  productItemKeys.forEach((key) => {
    allProductItems.push(...productItems[key].items);
  });

  return allProductItems.find((item) => item.id === productId);
};

export const getTotalProductAmount = (basketItems: ProductInfo[]) => {
  const initialValue = 0;
  const totalProductAmount = String(
    basketItems
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, initialValue)
  );
  return totalProductAmount + "원";
};
