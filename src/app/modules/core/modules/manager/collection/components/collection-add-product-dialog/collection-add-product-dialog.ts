import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-add-product-dialog',
  templateUrl: './collection-add-product-dialog.component.html',
  styleUrls: ['./collection-add-product-dialog.component.scss']
})
export class CollectionAddProductDialogComponent implements OnInit 
{
  collectionName: string;
  constructor(
  ) { }

  ngOnInit() {}
}