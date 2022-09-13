import {
  productCountProps,
  ProductInfo,
  productItemsType,
} from "interface/interface";

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

export const getTotalProductAmount = (
  basketItems: ProductInfo[],
  productCount: productCountProps[]
) => {
  const initialValue = 0;
  const totalProductAmount = basketItems
    .map((item) => {
      const total = productCount.find((info) => item.id === info.id);
      if (total) return total.count * item.price;
      return null;
    })
    .reduce((prev, curr) => (prev || 0) + (curr || 0), initialValue);

  return totalProductAmount + "원";
};
