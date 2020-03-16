import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductVM, ProductCM, ProductUM } from 'src/app/view-models';

@Injectable({
  providedIn: 'root'
})
export class ProductService 
{
  apiPaths = environment.apiLink;

  constructor(private http: HttpClient) { }

  // Get all products from database by calling API
  getAll = (): Promise<ProductVM[]> => {
    return this.http.get<ProductVM[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.main}`).toPromise();
  }

  getById = (id: number): Promise<ProductVM[]> => {
    return this.http.get<ProductVM[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.byId}${id}`).toPromise();
  }
  
  // Get all products in a category
  getByCategory = (id: number): Promise<ProductVM[]> => {
    return this.http.get<ProductVM[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.category.main}${id}/Product`).toPromise();
  }

  // Create new product
  create(product: ProductCM): Promise<any>
  {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return new Promise(resolve => {
      this.http.post(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.main}`, product, { headers : reqHeader})
      .subscribe(data => {
        resolve(data);
        alert("New Product has been added successfully.");
      }, error => {
        console.error('Error at ProductService - create(): ' + JSON.stringify(error));
      });
    });
  }

  // Set BannerPath (image) for the newest product
  setBannerPath(img: File, id: number) : Promise<any>
  {
    let formData = new FormData();
    formData.append("image", img);

    return new Promise(resolve => {
      this.http.post(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.img}?id=${id}&isHighlight=true`, formData)
      .subscribe((data: any) => {
        resolve(data);
      }, error => {
        console.error('Error at ProductService - setBannerPath(): ' + JSON.stringify(error));
      });
    });
  }

  // Update a product
  update(product: ProductUM): Promise<any>
  {
    console.log("update API: ", product);
    return new Promise(resolve => {
      this.http.put(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.main}`, product)
      .subscribe((data: any) => {
        resolve(data);
        alert("Update product successfully.");
      }, error => {
        console.error('Error at ProductService - update(): ' + JSON.stringify(error));
      });
    });
  }
}
