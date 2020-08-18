import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { CollectionAM, ProductVM } from 'src/app/view-models';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-collection-add-product-dialog',
  templateUrl: './collection-add-product-dialog.component.html',
  styleUrls: ['./collection-add-product-dialog.component.scss']
})
export class CollectionAddProductDialogComponent implements OnInit 
{
  @Input() selectedCollection; // : ProductVM
  @Input() selectedId: number;
  collectionName: string;
  addProductForm: FormGroup;
  products: ProductVM[] = [];
  proIdsSelected: number[] = [];
  productIds: any;
  
  constructor(private fb: FormBuilder, private productService: ProductService,
              protected dialogRef: NbDialogRef<CollectionAddProductDialogComponent>)
  { }

  ngOnInit()
  {
    this.addProductForm = this.fb.group({
      id: new FormControl(this.selectedId),
      productIds: new FormControl()
    });

    this.loadAllProducts();
    this.collectionName = this.selectedCollection.Name;
  }

  loadAllProducts()
  {
    this.productService.getAll().then((res) => {
      this.products = res;
    });
  }

  selectProduct(event, proId)
  {
    let isSelected = event.target.checked;
    console.log("proId = ", proId);
    console.log("isChosen = ", isSelected);
    if (this.proIdsSelected.includes(proId))  // product đã đc add trước đó
    {
      if (isSelected === false) // unchecked
        this.unselectedProduct(proId);
    }
    else  // product chưa đc add trước đó
    {
      if (isSelected === true) // checked
        this.proIdsSelected.push(proId);
    }

    console.log("proIdsSelected = ", this.proIdsSelected);
    this.addProductForm.get('productIds').setValue(this.proIdsSelected);
  }

  unselectedProduct(proId: number)
  {
    var index = this.proIdsSelected.indexOf(proId);
    console.log("unselectedProduct - index = ", index);
    if (index !== -1)
    this.proIdsSelected.splice(index, 1);
  }

  addProducts()
  {
    if (this.addProductForm.valid) 
    {
      let editedCollection : CollectionAM = {
        id: this.selectedId,
        productIds: this.addProductForm.get('productIds').value
      }
      console.log("After add products: ", editedCollection);
      this.dialogRef.close(editedCollection);
    }
  }

  close()
  {
    this.dialogRef.close();
  }
}