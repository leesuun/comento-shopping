export interface ProductInfo {
  name: string;
  description: string;
  thumbnail: string;
  price: number;
  id: number;
}

export interface productItemsType {
  [category: string]: {
    [items: string]: ProductInfo[];
  };
}

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
