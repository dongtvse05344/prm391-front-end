import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
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
}
