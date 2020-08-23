import { Component, OnInit } from '@angular/core';
import { ProductService, CategoryService, ColorService, CollectionService } from 'src/app/services/index';
import { ProductVM, ProductCM, ProductUM, Category, Color, CollectionVM } from 'src/app/view-models';
import { NbDialogService } from "@nebular/theme";
import { ProductCreateDialogComponent, ProductUpdateDialogComponent } from "../../components";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit 
{
  env = environment;
  newProduct: ProductCM;
  selectedProduct : any;
  products: ProductVM[] = [];  // All products
  productVs: ProductVM[] = []; // List products to show (sort/search )
  categories: Category[] = [];
  collections: CollectionVM[] = [];

  constructor(private productService: ProductService, private categoryService : CategoryService,
              private colorService: ColorService, private collectionService: CollectionService,
              private dialogService: NbDialogService) { }

  // Load all products while loading page
  ngOnInit() {
    this.loadAllProducts();
    
    this.categoryService.getAll().then((cate) => {
      this.categories = cate;
    });

    this.collectionService.getAll().then(collections => {
      this.collections = collections;
    })
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
  search(textSearch: string) {
    this.productVs = this.products.filter(p => p.Name.toLowerCase().includes(textSearch.toLowerCase()));
  }

  // Search products by Category
  searchByCategory(event: number) {
    if (event != 0)
    {
      this.productService.getByCategory(event).then(res => {
        this.productVs = res;
      });
    }
    else  // option = 0 --> All categories
      this.productVs = this.products;
  }

  // Search products by Collection
  searchByCollection(event: number) {
    if (event != 0)
    {
      this.productService.getByCollection(event).then(res => {
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
        this.newProduct = data[0];
        this.productService.create(this.newProduct).then((res) => {
          let img = data[1];
          let proId = res.Id;
          this.productService.setBannerPath(img, proId).then(() => {
            this.loadAllProducts();
          });
        });
      });
  }

  // Update products' information
  openUpdateDialog()
  {
    this.selectedProduct = this.setSelectedProduct();   // (*)
    this.dialogService.open(ProductUpdateDialogComponent, { context: { selectedProduct: this.selectedProduct}})
      .onClose.subscribe(data => {
        if (data != null) // data == null khi bấm nút "Cancel"
        {
          console.log("openUpdateDialog(): data = ", data);
          this.productService.update(data).then((res) => {
            console.log("Res: ", res);
            this.loadAllProducts();
          });
        }
      });
  }

  // Get selected product in table
  onSelect(event)
  {
    this.selectedProduct = event.selected[0]; // Allow only 1 selected at a time
    // console.log("The selected product is: ", this.selectedProduct);
    /* Note: Ở đây chỉ nhận 1 lần. Nếu chọn sp này, mở modal update lên xong bấm "Cancel" thì sau đó muốn mở
             lại modal update, nó lại ko nhận đc selectedID.
    */
  }

  setSelectedProduct() // : ProductUM
  {    
    return {
      id: this.selectedProduct.Id,
      name: this.selectedProduct.Name,
      currentPrice: this.selectedProduct.CurrentPrice,
      oldPrice: this.selectedProduct.OldPrice,
      isSale: this.selectedProduct.IsSale,
      colorIds: this.getColorsOfAProduct(this.selectedProduct.Id),  // API này bị lấy sau bước (*) nên ko truyền đc qua modal
      categoryId: this.selectedProduct.CategoryId,
      genderId: this.selectedProduct.GenderId,
      description: this.selectedProduct.Description,
      dateSale: new Date(Date.now())
    };
  }

  private getColorsOfAProduct(proID: number) : Color[]
  {
    let colors: Color[] = [];
    this.colorService.getByProductId(proID).then((res : Color[]) => {
      console.log("List colors: ", res);
      colors = res;
    });

    return colors;
  }
}