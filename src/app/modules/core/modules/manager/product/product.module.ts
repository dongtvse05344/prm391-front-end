import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './pages';
import { ProductDetailComponent } from './components';
import { ProductRoutes } from './product.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxMaskModule } from 'ngx-mask';
import { NbInputModule, NbButtonModule, NbDialogModule, NbSelectModule, NbIconModule, NbCardModule } from '@nebular/theme';

const PAGES = [
  ProductComponent
];
const COMPONENTS = [
  ProductDetailComponent
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutes,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbCardModule,
    NgxDatatableModule,
    NgxMaskModule.forRoot(),
    NbDialogModule.forChild(),
  ],
  declarations: [...PAGES, ...COMPONENTS],
  entryComponents: [ProductDetailComponent]
})
export class ProductModule { }
