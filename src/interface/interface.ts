/*  interface, types */

/***************************************** pages *****************************************/

/***************** home *****************/
export enum Category {
  "cup" = "cup",
  "winter" = "winter",
}

/***************** productdetail *****************/
export interface IProductDetailProps {
  id: string;
}

/***************** basket *****************/

/***************************************** components *****************************************/

/***************** home *****************/
/* ThemeBtn */
export interface ThemeBtnProps {
  themeName: string;
  type: string;
  onClick: (type: string) => void;
}
/* productItem */
export interface ProductItemProps {
  name: string;
  thumbnail: string;
  description: string;
}

/***************** detail *****************/
/* paymentdata */
export interface IPaymentDataProps {
  info: string;
  price: string;
}

/***************** header *****************/
/* navigation */
export enum Pages {
  "home" = "/",
  "product" = "/product/:id",
  "basket" = "/basket",
}

/***************** basket *****************/
/***************** global *****************/

/************************************* productItem types *********************************/
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
