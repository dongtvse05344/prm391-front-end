import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CollectionVM } from 'src/app/view-models';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  apiPaths = environment.apiLink;
  constructor(private http: HttpClient) { }

  getAll = (): Promise<CollectionVM[]> => {
    return this.http.get<CollectionVM[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.collection.main}`).toPromise();
  }

  // Create new collection
  create(collection: CollectionVM): Promise<any>
  {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return new Promise(resolve => {
      this.http.post(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.main}`, collection, { headers : reqHeader})
      .subscribe(data => {
        resolve(data);
        alert("New Collection has been added successfully.");
      }, error => {
        console.error('Error at CollectionService - create(): ' + JSON.stringify(error));
      });
    });
  }

  // Set BannerPath (image) for the newest product
  setBannerPath(img: File, id: number) : Promise<any>
  {
    let formData = new FormData();
    formData.append("image", img);

    return new Promise(resolve => {
      this.http.post(`${this.apiPaths.endPoint}${this.apiPaths.basic.collection.img}?id=${id}&isHighlight=true`, formData)
      .subscribe((data: any) => {
        resolve(data);
      }, error => {
        console.error('Error at CollectionService - setBannerPath(): ' + JSON.stringify(error));
      });
    });
  }

  // Add products into collection
  addProducts(collection: CollectionVM): Promise<any>
  {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return new Promise(resolve => {
      this.http.post(`${this.apiPaths.endPoint}${this.apiPaths.basic.product.main}`, collection, { headers : reqHeader})
      .subscribe(data => {
        resolve(data);
        alert("New Collection has been added successfully.");
      }, error => {
        console.error('Error at CollectionService - create(): ' + JSON.stringify(error));
      });
    });
  }
}
