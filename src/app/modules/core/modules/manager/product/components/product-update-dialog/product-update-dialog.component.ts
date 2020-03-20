import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NbDialogRef } from "@nebular/theme";
import { ProductUM, Category, Gender, Color } from "src/app/view-models";
import { CategoryService, ColorService, GenderService } from 'src/app/services/index';

@Component({
  selector: 'app-product-update-dialog',
  templateUrl: './product-update-dialog.component.html',
  styleUrls: ['./product-update-dialog.component.scss']
})
export class ProductUpdateDialogComponent implements OnInit 
{
  @Input() selectedProduct; // : ProductVM
  updateProductForm: FormGroup;
  // categories: Category[] = []; // Ko biết có phải do API bất đồng bộ nên nó chạy sau cách này ko
  // genders: Gender[] = [];
  // colors: Color[] = [];

  // Sao khai báo array dạng này set default selectedCate được mà viết kiểu lấy API lại ko đc nhỉ?
  categories: Category[] = [    // Ko biết có phải do API bất đồng bộ nên nó chạy sau cách này ko
    {Id: 1, Name: 'Jackets', Logo: 'files/images/categories/jacket.jpg'},
    {Id: 2, Name: 'Dresses', Logo: 'files/images/categories/dress.jpg'},
    {Id: 3, Name: 'Jeans', Logo: 'files/images/categories/jean.png'},
    {Id: 4, Name: 'T-shirts', Logo: 'files/images/categories/t-shirt.png'},
    {Id: 5, Name: 'Shirts', Logo: 'files/images/categories/shirt.jpg'}
  ];
  genders: Gender[] = [
    {Id: 1, Name: 'Male'},
    {Id: 2, Name: 'Female'},
    {Id: 3, Name: 'Child'},
    {Id: 4, Name: 'FreeSize'}
  ];
  colors: Color[] = [
    { Id: 1, Name: 'Red', R: 163, G: 22, B: 33, O: 1},
    { Id: 2, Name: 'Blue', R: 149, G: 184, B: 209, O: 1},
    { Id: 3, Name: 'Green', R: 33, G: 137, B: 126, O: 1},
    { Id: 4, Name: 'Pink', R: 228, G: 217, B: 255, O: 1},
    { Id: 5, Name: 'Grey', R: 60, G: 73, B: 63, O: 1},
    { Id: 6, Name: 'Beige', R: 224, G: 214, B: 204, O: 1},
    { Id: 7, Name: 'Dark Orange', R: 233, G: 78, B: 70, O: 1},
    { Id: 8, Name: 'Aquamarine', R: 139, G: 221, B: 219, O: 1},
    { Id: 9, Name: 'Teal', R: 32, G: 90, B: 104, O: 1},
    { Id: 10, Name: 'White Lemon', R: 237, G: 235, B: 211, O: 1},
    { Id: 11, Name: 'Dark Yellow', R: 243, G: 193, B: 86, O: 1},
    { Id: 12, Name: 'Light Brown', R: 177, G: 161, B: 136, O: 1},
    { Id: 13, Name: 'Dark Blue', R: 32, G: 41, B: 69, O: 1},
    { Id: 14, Name: 'Dark Green', R: 93, G: 95, B: 84, O: 1},
    { Id: 15, Name: 'White', R: 244, G: 244, B: 245, O: 1}
  ];
  // colorIds: number[] = [1, 3, 4]; // Giả sử   // Làm sao để set đc multi selected colors nhỉ?
  // selectedColor = 1;  // Giả sử
  // selectedCategory = 1;  // Giả sử

  constructor(protected dialogRef: NbDialogRef<ProductUpdateDialogComponent>,
              private fb: FormBuilder, private colorService: ColorService,
              private genderService: GenderService, private categoryService : CategoryService,
  ) { }

  ngOnInit() 
  {
    this.updateProductForm = this.fb.group({
      id: new FormControl(this.selectedProduct.id),
      name: new FormControl(this.selectedProduct.name),
      currentPrice: new FormControl(this.selectedProduct.currentPrice),
      oldPrice: new FormControl(this.selectedProduct.oldPrice),
      isSale: new FormControl(this.selectedProduct.isSale),
      colorIds: new FormControl(this.selectedProduct.colorIds),
      genderId: new FormControl(this.selectedProduct.genderId),
      categoryId: new FormControl(this.selectedProduct.categoryId),
      description: new FormControl(this.selectedProduct.description)
    });
    console.log("Update Dialog: ", this.selectedProduct);


    // Load all categories into cbCategory
    // this.categoryService.getAll().then((res: Category[]) => {
    //   this.categories = res;
    //   // this.selectedCategory = this.categories[2];    // Giả sử mặc định là Jeans
    //   // console.log("selectedCategory: ", this.selectedCategory); // Ở đây vẫn lấy đc nhưng lại ko set lên UI đc
    // });
    this.genderService.getAll().then((res: Gender[]) => {
      this.genders = res;
    });
    this.colorService.getAll().then((res: Color[]) => {
      this.colors = res;
    });

    /* Note: 
      1. new FormControl("AAAA") (nbInput) hoặc new FormControl(101) (nbInput type="number") hoặc
         new FormControl(true) (nb-checkbox) có nhận gtrị set default bằng cách này nhưng
         new FormControl(this.selectedCategory) (nb-select) ko nhận.
      2. Nếu dùng [(ngModel)] để binding song song vs kiểu set default bằng new FormControl("abc") thế này
         thì ngModel sẽ được ưu tiên hơn.
      3. [(selected)] ko dùng chung cùng formControlName nhưng lại có thể dùng cùng [formControl] được. Tại sao nhỉ?
    */
  }

  update()
  {
    if (this.updateProductForm.valid) 
    {
      let editedProduct : ProductUM = {
        id: this.selectedProduct.id,
        name: this.updateProductForm.get('name').value,
        description: this.updateProductForm.get('description').value,
        currentPrice: this.updateProductForm.get('currentPrice').value,
        oldPrice: this.updateProductForm.get('oldPrice').value,
        isSale: this.updateProductForm.get('isSale').value != null ? this.updateProductForm.get('isSale').value : false,
        colorIds: this.updateProductForm.get('colorIds').value,   // Chưa xóa được màu cũ để add màu mới. Hiện tại là nó ghi thêm
        genderId: this.updateProductForm.get('genderId').value,
        categoryId: this.updateProductForm.get('categoryId').value,
        dateSale: new Date(Date.now())  // ngày này đúng ko nhỉ?
      }
      console.log("After update: ", editedProduct);
      this.dialogRef.close(editedProduct);
    }
  }

  close()
  {
    this.dialogRef.close();
  }
}