import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Color } from 'src/app/view-models';

@Injectable({
    providedIn: 'root'
  })
  export class ColorService 
  {
    apiPaths = environment.apiLink;
  
    constructor(private http: HttpClient) { }
  
    // Get all colors
    getAll = (): Promise<Color[]> => {
      return this.http.get<Color[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.color.main}`).toPromise();
    }
  
  }