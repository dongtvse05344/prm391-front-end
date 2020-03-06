import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NbDialogService, NbDialogRef } from "@nebular/theme";
import { Product, Category, Gender } from "src/app/view-models";
import { CategoryService, GenderService } from 'src/app/services';
import swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit 
{
  createProductForm: FormGroup;
  // newProduct: Product;
  categories: Category[] = [];
  genders: Gender[] = [];

  // Error messages when form's fields are not in right format
  error_messages = {
    'name': 
      {type: 'required', message: 'Product name is required.'}
    ,
    'price': [
      {type: 'required', message: 'Product price is required.'},
      {type: 'pattern', message: 'Price must be a positive number.'}
    ]
  }

  constructor(private categoryService : CategoryService, private genderService : GenderService,
              private dialogService: NbDialogService, protected dialogRef: NbDialogRef<ProductDetailComponent>,
              private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createProductForm = this.fb.group({
      name: new FormControl('', Validators.compose([Validators.required])),
      price: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(0)
      ]))
    });

    this.categoryService.getAll().then((res) => {
      this.categories = res;
    });
    this.genderService.getAll().then((res) => {
      this.genders = res;
    });
  }

  add()
  {
    if (this.createProductForm.valid) 
    {
      console.log("Add product here");
      // this.authService.login(this.loginForm.value)
      //   .then(
      //     (res) => {
      //       this.globalService.setToken(res, this.loginForm.value.username);
      //       this.router.navigateByUrl('auth/navigate');
      //     }
      //   ).catch(
      //     (e) => swal.fire(
      //       e.error.message,
      //       'Please check again!',
      //       'error'
      //     )
      //   );
    }
    else {
      console.log("Error: Add product failed");
      swal.fire(
        'Data input is not valid.',
        'Please check validation!',
        'error'
      );
    }
  }

  close()
  {
    this.dialogRef.close();
  }
}
