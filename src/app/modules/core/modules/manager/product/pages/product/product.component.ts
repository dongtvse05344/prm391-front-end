import { Component, OnInit } from '@angular/core';
import { ProductService, CategoryService } from 'src/app/services/index';
import { Product, Category } from 'src/app/view-models';
import { NbDialogService } from "@nebular/theme";
import { ProductDetailComponent } from "../../components/product-detail/product-detail.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit 
{
  newProduct: Product;
  products: Product[]= [];  // All products
  productVs: Product[]= []; // List products to show (sort/search )
  categories: Category[] = [];

  constructor(private productService: ProductService, private categoryService : CategoryService,
              private dialogService: NbDialogService) { }

  // Load all products while loading page
  ngOnInit() {
    this.productService.getAll().then((res) => {
      this.products = res;
      this.productVs = res;
    });
    this.categoryService.getAll().then((cate) => {
      this.categories = cate;
    });
  }

  // Search products by name
  search(textSearch : string) {
    console.log(textSearch);
    this.productVs = this.products.filter(p => p.Name.toLowerCase().includes(textSearch.toLowerCase()));
  }

  // Search products by Category
  onCateChange(event: number) {
    console.log(event);
    if (event != 0)
    {
      this.productService.getByCategory(event).then(res => {
        this.productVs = res;
      });
    }
    else  // option = 0 --> All categories
      this.productVs = this.products;
  }
  
  // Open "Create new product" Form
  openCreateDialog()
  {
    this.dialogService.open(ProductDetailComponent)
      .onClose.subscribe(data => {
        this.newProduct = data;
        this.products.push(this.newProduct);
        this.productVs.push(this.newProduct);
      });
    
  }
}
