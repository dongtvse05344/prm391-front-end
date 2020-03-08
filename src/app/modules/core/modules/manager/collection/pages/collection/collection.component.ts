import { Component, OnInit } from '@angular/core';
import { CollectionVM } from 'src/app/view-models';
import { CollectionService } from 'src/app/services';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  collections: CollectionVM[]= [];
  collectionVs: CollectionVM[]= [];
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.collectionService.getAll().then((res) => {
      this.collections = res;
       this.collectionVs = res;
    })
    .catch(e => {
      console.log(e);
    });
  }

  search(textSearch) {
    console.log(textSearch);
    this.collectionVs = this.collections.filter(p => p.name.toLowerCase().includes(textSearch.toLowerCase()));
  }

}
