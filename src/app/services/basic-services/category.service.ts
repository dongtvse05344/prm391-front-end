import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/view-models';

@Injectable({
    providedIn: 'root'
  })
  export class CategoryService 
  {
    apiPaths = environment.apiLink;
  
    constructor(private http: HttpClient) { }
  
    // Get all categories
    getAll = (): Promise<Category[]> => {
      return this.http.get<Category[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.category.main}`).toPromise();
    }
  
  }