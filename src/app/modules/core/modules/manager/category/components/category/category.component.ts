import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/services";
import { Category } from "src/app/view-models";
import { environment } from "src/environments/environment";
import { NbDialogService } from "@nebular/theme";
import { CategoryCreateDialogComponent } from '../categoryCreateDialog/categoryCreateDialog.component';

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  env = environment;

  constructor(private categoryService: CategoryService, private dialogService: NbDialogService) {}
  categories: Category[] = [];

  ngOnInit() {
    this.loadAllCategory();
  }

  // Load all category
  loadAllCategory() {
    this.categoryService
      .getAll()
      .then((res) => {
        this.categories = res;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // Search collections by name
  search(textSearch: string) {
    this.categories = this.categories.filter((p) =>
      p.Name.toLowerCase().includes(textSearch.toLowerCase())
    );
  }

  // Open "Create new collection" Form
  openCreateDialog()
  {
    this.dialogService.open(CategoryCreateDialogComponent)
    .onClose.subscribe(data => {
      let newCategory = data[0];
      console.log("newCategory = ", newCategory);
      this.categoryService.create(newCategory).then((res) => {
        console.log("CollectionComponent: openCreateDialog() - res = ", res);
        let img = data[1];
        let proId = res.Id;
        this.categoryService.setLogoPath(img, proId).then(() => {
          this.loadAllCategory();
        });
      });
    });
  }

}
