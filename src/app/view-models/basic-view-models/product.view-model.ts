// Products model for View (like DTO in Java)
export class ProductVM {
  Id: number;
  Name: string;
  Description: string;
  CurrentPrice: number;
  OldPrice: number;
  IsSale: boolean;
  BannerPath: string;
  Star: number;
  CategoryId: number;
}

// Products model for Create
export class ProductCM {
  name: string;
  description: string;
  currentPrice: number;
  oldPrice: number;
  isSale: boolean;
  smellIds: number[];
  genderId: number;
  categoryId: number;
  dateSale: Date;
}

// Products model for Update
export class ProductUM {
  id: number;
  name: string;
  description: string;
  currentPrice: number;
  oldPrice: number;
  isSale: boolean;
  smellIds: number[];
  genderId: number;
  categoryId: number;
  dateSale: Date;
}