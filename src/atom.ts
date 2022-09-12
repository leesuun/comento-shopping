import { atom } from "recoil";
import { ProductInfo, productItemsType } from "interface/interface";

export const productItemAtom = atom<productItemsType>({
  key: "productItem",
  default: {
    cup: {
      items: [],
    },
    winter: {
      items: [],
    },
  },
});

export const basketItemAtom = atom<ProductInfo[]>({
  key: "basketItem",
  default: [],
});

export const categoryAtom = atom<string>({
  key: "category",
  default: "cup",
});
