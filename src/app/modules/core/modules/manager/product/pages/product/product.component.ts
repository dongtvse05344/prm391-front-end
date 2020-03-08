import { Component, OnInit } from '@angular/core';
import { ProductService, CategoryService } from 'src/app/services/index';
import { ProductVM, ProductCM, Category } from 'src/app/view-models';
import { NbDialogService } from "@nebular/theme";
import { ProductCreateDialogComponent, ProductUpdateDialogComponent } from "../../components";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit 
{
  newProduct: ProductCM;
  selectedProduct: ProductVM;
  products: ProductVM[]= [];  // All products
  productVs: ProductVM[]= []; // List products to show (sort/search )
  categories: Category[] = [];

  constructor(private productService: ProductService, private categoryService : CategoryService,
              private dialogService: NbDialogService) { }

  // Load all products while loading page
  ngOnInit() {
    this.loadAllProducts();
    this.categoryService.getAll().then((cate) => {
      this.categories = cate;
    });
  }

  // Load all products
  loadAllProducts()
  {
    this.productService.getAll().then((res) => {
      this.products = res;
      this.productVs = res;
    });
  }

  // Search products by name
  search(textSearch : string) {
    this.productVs = this.products.filter(p => p.Name.toLowerCase().includes(textSearch.toLowerCase()));
  }

  // Search products by Category
  onCateChange(event: number) {
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
    this.dialogService.open(ProductCreateDialogComponent)
      .onClose.subscribe(data => {
        console.log("Main - After add: ", data);
        this.productService.create(data).then(() => {
          this.loadAllProducts(); // Vì ở đây chưa có bannerPath nên sẽ bị báo lỗi 500.
        });
      });
    
  }

  // Update products' information
  openUpdateDialog()
  {
    this.dialogService.open(ProductUpdateDialogComponent, { context: { selectedProduct: this.selectedProduct}})
      .onClose.subscribe(data => {
        this.newProduct = data;
        console.log("Main - After update: ", this.newProduct);
      });
  }

  // Get selected product in table
  onSelect(event)
  {
    this.selectedProduct = event.selected[0]; // Allow only 1 selected at a time
    console.log("The selected product is: ", this.selectedProduct);
  }
}