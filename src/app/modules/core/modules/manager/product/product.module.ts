import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './pages';
import { ListProductComponent } from './components';
import { ProductRoutes } from './product.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxMaskModule } from 'ngx-mask';
import { NbInputModule, NbButtonModule, NbDialogModule } from '@nebular/theme';

const PAGES = [
  ProductComponent
];
const COMPONENTS = [
  ListProductComponent
];
@NgModule({
  imports: [
    CommonModule,
    ProductRoutes,
    NbInputModule,
    NbButtonModule,
    NgxDatatableModule,
    NgxMaskModule.forRoot(),
    NbDialogModule.forChild(),
    
  ],
  declarations: [...PAGES, ...COMPONENTS]
})
export class ProductModule { }
