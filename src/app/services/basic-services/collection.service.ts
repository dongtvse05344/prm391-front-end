import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CollectionVM, CollectionCM, CollectionAM } from 'src/app/view-models';

@Injectable({
  providedIn: 'root'
})
export class CollectionService
{
  idSelected : number;
  apiPaths = environment.apiLink;
  constructor(private http: HttpClient) { }

  getAll = (): Promise<CollectionVM[]> => {
    return this.http.get<CollectionVM[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.collection.main}`).toPromise();
  }

  // Create new collection
  create(collection: CollectionCM): Promise<any>
  {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return new Promise(resolve => {
      this.http.post(`${this.apiPaths.endPoint}${this.apiPaths.basic.collection.admin}`, collection, { headers : reqHeader})
      .subscribe(data => {
        resolve(data);
        alert("New Collection has been created successfully.");
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
  addProducts(collection: CollectionAM): Promise<any>
  {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return new Promise(resolve => {
      this.http.post(`${this.apiPaths.endPoint}${this.apiPaths.basic.collection.admin}/Products`, collection, { headers : reqHeader})
      .subscribe(data => {
        resolve(data);
        alert("Products has been added successfully.");
      }, error => {
        console.error('Error at CollectionService - addProducts(): ' + JSON.stringify(error));
      });
    });
  }
}
