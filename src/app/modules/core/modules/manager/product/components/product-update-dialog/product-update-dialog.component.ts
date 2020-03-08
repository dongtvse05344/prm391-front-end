import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NbDialogRef } from "@nebular/theme";
import { ProductVM } from "src/app/view-models";

@Component({
  selector: 'app-product-update-dialog',
  templateUrl: './product-update-dialog.component.html',
  styleUrls: ['./product-update-dialog.component.scss']
})
export class ProductUpdateDialogComponent implements OnInit 
{
  @Input() selectedProduct : ProductVM;
  updateProductForm: FormGroup;
  fileToUpload: File = null;
  imgPath: string;

  constructor(protected dialogRef: NbDialogRef<ProductUpdateDialogComponent>,
              private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.updateProductForm = this.fb.group({
      id: new FormControl(),
      name: new FormControl(),
      currentPrice: new FormControl(),
      oldPrice: new FormControl(),
      isSale: new FormControl(),
      bannerPath: new FormControl(),
      description: new FormControl(),
    });
    console.log("Update Dialog: ", this.selectedProduct);
  }

  update()
  {
    if (this.updateProductForm.valid) 
    {
      let editedProduct : ProductVM = {
        Id: this.selectedProduct.Id,
        Name: this.updateProductForm.get("name").value,
        Description: this.updateProductForm.get("description").value,
        CurrentPrice: this.updateProductForm.get("currentPrice").value,
        OldPrice: this.updateProductForm.get("oldPrice").value,
        IsSale: this.updateProductForm.get("isSale").value,
        BannerPath: this.updateProductForm.get("bannerPath").value,
        Star: this.selectedProduct.Star
      }
      console.log("Call updateProduct API.")
      console.log("After update: ", editedProduct);
      this.dialogRef.close(editedProduct);
    }
  }

  close()
  {
    this.dialogRef.close();
  }

  // Get new image
  handleFileInput(files: FileList) 
  {
    this.fileToUpload = files.item(0);
    this.imgPath = "files/images/products/" + this.fileToUpload.name;
    this.updateProductForm.get("bannerPath").setValue(this.imgPath);
    console.log("File upload name: ", this.updateProductForm.get("bannerPath").value);
  }
}