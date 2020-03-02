import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService, GlobalService } from 'src/app/services';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly globalService: GlobalService,
    private router: Router,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const accessRole: Array<string> = next.data.roles;
    return this.authService.getInfo()
      .then(
        (res) => {
          return true;
        }
      )
      .catch(
        (e) => {
          this.router.navigateByUrl('auth/navigate');
          return false;
        }
      );
  }

}
