export class ProductVM {
  Id: number;
  Name: string;
  Description: string;
  CurrentPrice: number;
  OldPrice: number;
  IsSale: boolean;
  BannerPath: string;
  Star: number;
}

export class ProductUM {
  Id: number;
  Name: string;
  Description: string;
  CurrentPrice: number;
  OldPrice: number;
  IsSale: boolean;
  BannerPath: string;
  Star: number;
}

export class ProductCM {
  Name: string;
  Description: string;
  CurrentPrice: number;
  OldPrice: number;
  IsSale: boolean;
  BannerPath: string;
  Star: number;
}
