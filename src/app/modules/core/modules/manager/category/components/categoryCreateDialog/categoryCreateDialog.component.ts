import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Category, CategoryCM } from 'src/app/view-models';

@Component({
  selector: 'app-categoryCreateDialog',
  templateUrl: './categoryCreateDialog.component.html',
  styleUrls: ['./categoryCreateDialog.component.scss']
})
export class CategoryCreateDialogComponent implements OnInit {
  createCategoryForm: FormGroup;
  fileToUpload: File = null;
  imgPath: string;
  
  constructor(private fb: FormBuilder,
    protected dialogRef: NbDialogRef<CategoryCreateDialogComponent>) { }

  ngOnInit() {
    this.createCategoryForm = this.fb.group({
      name: new FormControl(),
      logoPath: new FormControl()
    });
  }

  create()
  {
    if (this.createCategoryForm.valid) 
    {
      let newCategory : CategoryCM = {
        Name: this.createCategoryForm.get('name').value,
      }
      this.dialogRef.close([newCategory, this.fileToUpload]);
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
    this.imgPath = "files/images/categories/" + this.fileToUpload.name;
    this.createCategoryForm.get("logoPath").setValue(this.imgPath);
    console.log("File upload name: ", this.fileToUpload);
  }

}
