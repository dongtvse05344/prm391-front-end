import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService, AuthService } from 'src/app/services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  constructor(
    private globalService: GlobalService,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    setTimeout(async () => {
      await this.routing();
    }, 1000);
  }
  async routing() {
    await this.authService.getInfo()
      .then(
        (res) => {
          this.router.navigateByUrl('core/manager');
        }
      )
      .catch(
        (e) => {
          this.globalService.clearToken();
          this.router.navigateByUrl('auth/login');
        }
      );
  }

}
