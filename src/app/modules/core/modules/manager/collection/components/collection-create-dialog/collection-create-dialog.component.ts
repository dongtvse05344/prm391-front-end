import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { CollectionCM } from 'src/app/view-models';

@Component({
  selector: 'app-collection-create-dialog',
  templateUrl: './collection-create-dialog.component.html',
  styleUrls: ['./collection-create-dialog.component.scss']
})
export class CollectionCreateDialogComponent implements OnInit 
{
  createCollectionForm: FormGroup;
  fileToUpload: File = null;
  imgPath: string;

  constructor(private fb: FormBuilder,
              protected dialogRef: NbDialogRef<CollectionCreateDialogComponent>)
  { }

  ngOnInit()
  {
    this.createCollectionForm = this.fb.group({
      name: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      bannerPath: new FormControl()
    });
  }

  create()
  {
    if (this.createCollectionForm.valid) 
    {
      let newCollection : CollectionCM = {
        name: this.createCollectionForm.get('name').value,
        startDate: this.createCollectionForm.get('startDate').value,
        endDate: this.createCollectionForm.get('endDate').value
      }
      this.dialogRef.close([newCollection, this.fileToUpload]);
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
    this.imgPath = "files/images/collections/" + this.fileToUpload.name;
    this.createCollectionForm.get("bannerPath").setValue(this.imgPath);
    console.log("File upload name: ", this.fileToUpload);
  }
}