import { atom } from "recoil";
import { productItemsType } from "./mock/productItem";

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
