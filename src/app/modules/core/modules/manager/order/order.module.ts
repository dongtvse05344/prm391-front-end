import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './pages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderRoutes } from './order.routing';
import { NgxMaskModule } from 'ngx-mask';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StatusComponent } from './component/status/status.component';
import { NbInputModule, NbButtonModule, NbDialogModule, NbSelectModule, NbIconModule, NbCardModule, NbCheckboxModule } from '@nebular/theme';
import { CreateStatusComponent } from './component/create-status/create-status.component';

const PAGES = [
  OrderComponent
];
const COMPONENTS = [
  StatusComponent,
  CreateStatusComponent
];

@NgModule({
  declarations: [...PAGES, ...COMPONENTS, ],
  imports: [
    CommonModule,
    OrderRoutes,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbSelectModule,
    NbCardModule,
    NbButtonModule,
    NgxMaskModule.forRoot(),
    NbDialogModule.forChild(),
  ],
  entryComponents: [StatusComponent,CreateStatusComponent]

})
export class OrderModule { }
