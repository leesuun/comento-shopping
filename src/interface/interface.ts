/*  interface, types */

/********************************** pages **********************************/
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

/********************************** components **********************************/
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

/***************** basket *****************/
/***************** header *****************/
/***************** global *****************/
