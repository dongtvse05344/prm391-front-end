export class CollectionVM {
  id: number;
  Name: string;
  startDate: string;
  banner: string;
}

export class CollectionCM {
  name: string;
  startDate: Date;
  endDate: Date;
}

export class CollectionAM {
  id: number;
  productIds: number[];
}