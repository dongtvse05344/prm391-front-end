import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionRoutes } from './collection.routing';
import { CollectionComponent } from './pages/collection/collection.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxMaskModule } from 'ngx-mask';
import { NbDialogModule, NbButtonModule, NbInputModule } from '@nebular/theme';

const PAGES = [ 
  CollectionComponent
];
const COMPONENTS = [
];
@NgModule({
  imports: [
    CommonModule,
    CollectionRoutes,
    NgxDatatableModule,
    NbInputModule,
    NbButtonModule,
    NgxMaskModule.forRoot(),
    NbDialogModule.forChild(),
  ],
  declarations: [...PAGES, ...COMPONENTS, ]
})
export class CollectionModule { }
