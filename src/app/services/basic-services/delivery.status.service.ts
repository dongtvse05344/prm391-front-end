import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DeliveryStatusVM } from 'src/app/view-models';
@Injectable({
  providedIn: 'root'
})
export class DeliveryStatusService {

  apiPaths = environment.apiLink;
  
  constructor(private http: HttpClient) { }

  // Get all colors
  getAll = (): Promise<DeliveryStatusVM[]> => {
    return this.http.get<DeliveryStatusVM[]>(`${this.apiPaths.endPoint}${this.apiPaths.basic.deliveryStatus.main}`).toPromise();
  }

}
