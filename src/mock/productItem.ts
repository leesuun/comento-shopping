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

export const getProductDetail = (productId: number) => {
  const productItemKeys = Object.keys(productItems);
  const allProductItems: ProductInfo[] = [];

  productItemKeys.forEach((key) => {
    allProductItems.push(...productItems[key].items);
  });

  return allProductItems.find((item) => item.id === productId);
};
