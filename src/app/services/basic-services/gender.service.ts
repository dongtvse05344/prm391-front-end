import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Gender } from 'src/app/view-models';

@Injectable({
    providedIn: 'root'
  })
  export class GenderService 
  {
    apiPaths = environment.apiLink;
  
    constructor(private http: HttpClient) { }
  
    // Get all genders
    getAll = (): Promise<Gender[]> => {
      return this.http.get<Gender[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.gender.main}`).toPromise();
    }
  
  }