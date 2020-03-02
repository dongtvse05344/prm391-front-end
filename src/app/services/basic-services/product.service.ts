import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductVM, ProductCM, ProductUM } from 'src/app/view-models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiPaths = environment.apiLink;
  constructor(private http: HttpClient) { }
  getAll = (): Promise<ProductVM[]> => {
    return this.http.get<ProductVM[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.main}`).toPromise();
  }
  getById = (id: string): Promise<ProductVM[]> => {
    return this.http.get<ProductVM[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.byId}${id}`).toPromise();
  }
  create = (data: ProductCM): Promise<any> => {
    return this.http.post<any>(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.main}`, data).toPromise();
  }
  update = (data: ProductUM): Promise<any> => {
    return this.http.post<any>(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.main}`, data).toPromise();
  }

}
