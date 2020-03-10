import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductVM, ProductCM } from 'src/app/view-models';

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

  getById = (id: string): Promise<ProductVM[]> => {
    return this.http.get<ProductVM[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.byId}${id}`).toPromise();
  }
  
  // Get all products in a category
  getByCategory = (id: number): Promise<ProductVM[]> => {
    return this.http.get<ProductVM[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.category.main}${id}/Product`).toPromise();
  }

  // Create new product
  create(product: ProductCM): Promise<any>
  {
    // Tại sao dùng body thì bị lỗi nhỉ? Phải dùng trực tiếp là product thì mới chịu
    // const body = new HttpParams()
    //   .set('name', product.name)
    //   .set('description', product.description)
    //   .set('currentPrice', product.currentPrice + "")
    //   .set('oldPrice', product.oldPrice + "")
    //   .set('isSale', product.isSale + "")
    //   .set('colorIds', product.colorIds + "")
    //   .set('genderId', product.genderId + "")
    //   .set('categoryId', product.categoryId + "")
    //   .set('dateSale', product.dateSale + "")

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
}
