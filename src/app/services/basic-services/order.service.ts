import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { OrderVM } from 'src/app/view-models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiPaths = environment.apiLink;
  constructor(private http: HttpClient) { }

  getAll = (): Promise<OrderVM[]> => {
    return this.http.get<OrderVM[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.order.main}`).toPromise();
  }
}
