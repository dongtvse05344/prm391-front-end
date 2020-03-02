import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './pages';
import { OrderRoutes } from './order.routing';
import { NbInputModule, NbButtonModule, NbDialogModule } from '@nebular/theme';
import { NgxMaskModule } from 'ngx-mask';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const PAGES = [
  OrderComponent
];
const COMPONENTS = [
];

@NgModule({
  declarations: [...PAGES, ...COMPONENTS],
  imports: [
    CommonModule,
    OrderRoutes,
    NgxDatatableModule,
    NbInputModule,
    NbButtonModule,
    NgxMaskModule.forRoot(),
    NbDialogModule.forChild(),
  ],

})
export class OrderModule { }
