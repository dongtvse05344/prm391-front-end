import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/index';
import { ProductVM } from 'src/app/view-models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: ProductVM[]= [];
  productVs: ProductVM[]= [];

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.ProductService.getAll().then((res) => {
      this.products = res; this.productVs = res;
    });
  }
  search(textSearch) {
    console.log(textSearch);
    this.productVs = this.products.filter(p => p.Name.toLowerCase().includes(textSearch.toLowerCase()));
  }

}
