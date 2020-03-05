// Products model for View (like DTO in Java)
export class Product {
  Id: number;
  Name: string;
  Description: string;
  CurrentPrice: number;
  OldPrice: number;
  IsSale: boolean;
  BannerPath: string;
  Star: number;
}