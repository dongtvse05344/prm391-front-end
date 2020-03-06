import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: 'app-product-update-dialog',
  templateUrl: './product-update-dialog.component.html',
  styleUrls: ['./product-update-dialog.component.scss']
})
export class ProductUpdateDialogComponent implements OnInit 
{
  

  constructor(protected dialogRef: NbDialogRef<ProductUpdateDialogComponent>
  ) { }

  ngOnInit() {
    
  }

  close()
  {
    this.dialogRef.close();
  }
}
