import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/view-models';

@Injectable({
  providedIn: 'root'
})
export class ProductService 
{
  apiPaths = environment.apiLink;

  constructor(private http: HttpClient) { }

  // Get all products from database by calling API
  getAll = (): Promise<Product[]> => {
    return this.http.get<Product[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.main}`).toPromise();
  }


  getById = (id: string): Promise<Product[]> => {
    return this.http.get<Product[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.byId}${id}`).toPromise();
  }
  
  // Get all products in a category
  getByCategory = (id: number): Promise<Product[]> => {
    return this.http.get<Product[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.category.main}${id}/Product`).toPromise();
  }

  // Create new product
  // create = (data: Product): Promise<Product> => {
    
  //   return Promise.resolve(data);
  // }

  // Update a product
  // update = (data: Product): Promise<any> => {
  //   return this.http.post<any>(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.main}`, data).toPromise();
  // }

}
