import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NbDialogRef } from "@nebular/theme";
import { ProductCM, Category, Gender, Color } from "src/app/view-models";
import { CategoryService, GenderService, ColorService } from 'src/app/services';

@Component({
  selector: 'app-product-create-dialog',
  templateUrl: './product-create-dialog.component.html',
  styleUrls: ['./product-create-dialog.component.scss']
})
export class ProductCreateDialogComponent implements OnInit 
{
  createProductForm: FormGroup;
  // newProduct: Product;
  categories: Category[] = [];
  genders: Gender[] = [];
  colors: Color[] = [];
  colorIds: number[] = [];
  fileToUpload: File = null;
  imgPath: string;

  constructor(private categoryService : CategoryService, private genderService : GenderService,
              private colorService : ColorService,
              protected dialogRef: NbDialogRef<ProductCreateDialogComponent>,
              private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createProductForm = this.fb.group({
      name: new FormControl(),
      currentPrice: new FormControl(),
      oldPrice: new FormControl(),
      isSale: new FormControl(),
      description: new FormControl(),
      colorIds: new FormControl(),
      genderId: new FormControl(),
      categoryId: new FormControl(),
      bannerPath: new FormControl()
    });

    this.categoryService.getAll().then((res) => {
      this.categories = res;
    });
    this.genderService.getAll().then((res) => {
      this.genders = res;
    });
    this.colorService.getAll().then((res) => {
      this.colors = res;
    });
  }

  add()
  {
    if (this.createProductForm.valid) 
    {
      let newProduct : ProductCM = {
        name: this.createProductForm.get('name').value,
        description: this.createProductForm.get('description').value,
        currentPrice: this.createProductForm.get('currentPrice').value,
        oldPrice: this.createProductForm.get('oldPrice').value,
        isSale: this.createProductForm.get('isSale').value != null ? this.createProductForm.get('isSale').value : false,
        smellIds: this.createProductForm.get('colorIds').value,
        genderId: this.createProductForm.get('genderId').value,
        categoryId: this.createProductForm.get('categoryId').value,
        dateSale: new Date(Date.now())
      }
      this.dialogRef.close([newProduct, this.fileToUpload]);
    }
  }

  close()
  {
    this.dialogRef.close();
  }

  // Get new image
  uploadFile(files: FileList) 
  {
    this.fileToUpload = files.item(0);
    this.imgPath = "files/images/products/" + this.fileToUpload.name;
    this.createProductForm.get("bannerPath").setValue(this.imgPath);
    console.log("File upload name: ", this.fileToUpload);
  }
}