import { atom } from "recoil";
import { productCountProps, productItemsType } from "interface/interface";

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

export const categoryAtom = atom<string>({
  key: "category",
  default: "cup",
});

export const productCountAtom = atom<productCountProps[]>({
  key: "productCount",
  default: [],
});
