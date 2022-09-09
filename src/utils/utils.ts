import { ProductInfo, productItemsType } from "interface/interface";

export const getProductDetail = (
  productId: number,
  productItem: productItemsType
) => {
  const productItemKeys = Object.keys(productItem);
  const allProductItems: ProductInfo[] = [];

  productItemKeys.forEach((key) => {
    allProductItems.push(...productItem[key].items);
  });

  return allProductItems.find((item) => item.id === productId);
};
