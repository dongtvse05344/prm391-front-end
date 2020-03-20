import { Component, OnInit } from '@angular/core';
import { CollectionVM } from 'src/app/view-models';
import { CollectionService } from 'src/app/services';
import { NbDialogService } from "@nebular/theme";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  collections: CollectionVM[]= [];
  collectionVs: CollectionVM[]= [];
  constructor(private collectionService: CollectionService, private dialogService: NbDialogService
  ) { }

  ngOnInit() {
    this.collectionService.getAll().then((res) => {
      this.collections = res;
       this.collectionVs = res;
    })
    .catch(e => {
      console.log(e);
    });
  }

  search(textSearch: string) {
      this.collectionVs = this.collections.filter(p => p.name.toLowerCase().includes(textSearch.toLowerCase()));
  }

  // Open "Create new collection" Form
  openCreateDialog()
  {
    // this.dialogService.open(ProductCreateDialogComponent)
    // .onClose.subscribe(data => {
    //   this.newProduct = data[0];
    //   this.productService.create(this.newProduct).then((res) => {
    //     let img = data[1];
    //     let proId = res.Id;
    //     this.productService.setBannerPath(img, proId).then(() => {
    //       this.loadAllProducts();
    //     });
    //   });
    // });
  }
}
