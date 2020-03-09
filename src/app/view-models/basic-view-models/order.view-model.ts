import { StatusVM } from './order.status.view-model';

export class OrderVM {
    Id: number;
    DateCreated: Date;
    TotalAmount: number;
    Address: String;
    Note: String;
    CurrentStatus: number;
    StatusVMs: StatusVM[];
}
  