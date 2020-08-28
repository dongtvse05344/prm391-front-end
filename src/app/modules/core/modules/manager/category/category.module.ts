import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { CategoryRoutes } from './category.routing';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutes
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
