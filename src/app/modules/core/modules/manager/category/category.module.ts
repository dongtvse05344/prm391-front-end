import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { CategoryCreateDialogComponent } from './components/categoryCreateDialog/categoryCreateDialog.component';

import { CategoryRoutes } from './category.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NbDialogModule, NbButtonModule, NbInputModule, NbIconModule, NbCardModule, NbSelectModule, NbCheckboxModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutes,
    NgxDatatableModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbDialogModule.forChild(),NbSelectModule,
    NbCheckboxModule
  ],
  declarations: [CategoryComponent,CategoryCreateDialogComponent],
  entryComponents: [CategoryCreateDialogComponent]
})
export class CategoryModule { }
