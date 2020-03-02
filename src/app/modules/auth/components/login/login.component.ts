import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService, AuthService } from 'src/app/services';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .then(
          (res) => {
            this.globalService.setToken(res, this.loginForm.value.username);
            this.router.navigateByUrl('auth/navigate');
          }
        ).catch(
          (e) => swal.fire(
            e.error.message,
            'Please check again !',
            'error'
          )
        );
    } else {
      swal.fire(
        'Data input is not valid',
        'Please check validation!',
        'error'
      );
    }
  }

}
