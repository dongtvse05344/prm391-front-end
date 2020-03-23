import { Component, OnInit } from '@angular/core';
import { CollectionVM } from 'src/app/view-models';
import { CollectionService } from 'src/app/services';
import { NbDialogService } from "@nebular/theme";
import { CollectionCreateDialogComponent, CollectionAddProductDialogComponent } from "../../components";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit
{
  collections: CollectionVM[]= [];
  collectionVs: CollectionVM[]= [];
  selectedCollection: any = null;

  constructor(private collectionService: CollectionService, private dialogService: NbDialogService)
  { }

  ngOnInit() {
    this.loadAllCollections();
  }

  // Load all collections
  loadAllCollections()
  {
    this.collectionService.getAll().then((res) => {
      this.collections = res;
       this.collectionVs = res;
    })
    .catch(e => {
      console.log(e);
    });
  }

  // Search products by name
  search(textSearch: string) {
      this.collectionVs = this.collections.filter(p => p.name.toLowerCase().includes(textSearch.toLowerCase()));
  }

  // Open "Create new collection" Form
  openCreateDialog()
  {
    this.dialogService.open(CollectionCreateDialogComponent)
    .onClose.subscribe(data => {
      let newCollection = data[0];
      console.log("newCollection = ", newCollection);
      this.collectionService.create(newCollection).then((res) => {
        console.log("CollectionComponent: openCreateDialog() - res = ", res);
        let img = data[1];
        let proId = res.Id;
        this.collectionService.setBannerPath(img, proId).then(() => {
          this.loadAllCollections();
        });
      });
    });
  }

  // Open "openAddProductsDialog" Form
  openAddProductsDialog(id: number)
  {
    this.dialogService.open(CollectionAddProductDialogComponent, { context: { selectedId: id, selectedCollection: this.selectedCollection}, hasScroll: true})
    .onClose.subscribe(data => {
      if (data != null)  // data == null khi bấm nút "Cancel"
      {
        console.log("openAddProductsDialog() for colID = ", id);
        console.log("collection = ", data);
        this.collectionService.addProducts(data).then((res) => {
          console.log("CollectionComponent: openAddProductsDialog() - res = ", res);
        });
      }
    });
  }

  // Select a collection to enable button "Add Products"
  onSelect(event)
  {
    this.selectedCollection = event.selected[0];  // Allow only 1 selected at a time
    // console.log("Selected collection: ", this.selectedCollection);
  }
}
