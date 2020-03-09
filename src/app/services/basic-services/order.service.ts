import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { OrderVM } from 'src/app/view-models';
import { LongPressDirective } from '@swimlane/ngx-datatable';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  idSelected : number;
  apiPaths = environment.apiLink;
  constructor(private http: HttpClient) { }

  getAll = (): Promise<OrderVM[]> => {
    return this.http.get<OrderVM[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.order.main}`).toPromise();
  }

  getById  = (): Promise<OrderVM> => {
    return this.http.get<OrderVM>(`${this.apiPaths.endPoint}${this.apiPaths.basic.order.byId}${this.idSelected}`).toPromise();
  }

  updateStatus = (statusId) :Promise<any> => {
    return this.http.put<any>(`${this.apiPaths.endPoint}${this.apiPaths.basic.order.status}`,
    {
      "orderId": this.idSelected,
      "statusId": statusId
    }
    ).toPromise();
  }

}
