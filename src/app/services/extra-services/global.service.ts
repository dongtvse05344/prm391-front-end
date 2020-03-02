import { Injectable } from '@angular/core';
import { TokenVM } from '../../view-models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
  ) { }
  setToken(token: TokenVM, userName: string): void {
    localStorage.setItem(environment.roles, JSON.stringify(token.roles));
    localStorage.setItem(environment.token, JSON.stringify(token.access_token));
    localStorage.setItem(environment.fullname, JSON.stringify(token.fullname));
    localStorage.setItem(environment.username, JSON.stringify(userName));
  }
  clearToken(): void {
    localStorage.clear();
  }
  getToken(): TokenVM {
    return JSON.parse(localStorage.getItem(environment.token));
  }
  getUserName(): string {
    return JSON.parse(localStorage.getItem(environment.username));
  }
  getFullName(): string {
    return JSON.parse(localStorage.getItem(environment.fullname));
  }
  getRoles(): string[] {
    return JSON.parse(localStorage.getItem(environment.roles));
  }

}
