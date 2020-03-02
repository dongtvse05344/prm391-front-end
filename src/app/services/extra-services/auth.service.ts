import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenVM, UserTokenVM } from 'src/app/view-models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiPaths = environment.apiLink;
  constructor(private http: HttpClient) { }

  getInfo = (): Promise<UserTokenVM> => {
    return this.http.get<UserTokenVM>(`${this.apiPaths.endPoint}${this.apiPaths.extra.auth.info}`).toPromise();
  }

  login = (data: { username: string, password: string }): Promise<TokenVM> => {
    return this.http.post<TokenVM>(`${this.apiPaths.endPoint}${this.apiPaths.extra.auth.token}`, data).toPromise();
  }
}
