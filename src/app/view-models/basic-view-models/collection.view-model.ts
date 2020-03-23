export class CollectionVM {
  id: number;
  name: string;
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
