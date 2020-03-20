import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionRoutes } from './collection.routing';
import { CollectionComponent } from './pages/collection/collection.component';
// import { CollectionAddProductDialogComponent } from './components';   // CollectionCreateDialogComponent, 
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxMaskModule } from 'ngx-mask';
import { NbDialogModule, NbButtonModule, NbInputModule, NbIconModule, NbCardModule } from '@nebular/theme';

const PAGES = [ 
  CollectionComponent
];
const COMPONENTS = [
  // CollectionCreateDialogComponent,
  // CollectionAddProductDialogComponent
];
@NgModule({
  imports: [
    CommonModule,
    CollectionRoutes,
    NgxDatatableModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NgxMaskModule.forRoot(),
    NbDialogModule.forChild(),
  ],
  declarations: [...PAGES, ...COMPONENTS, ],
  // entryComponents: [CollectionAddProductDialogComponent]  // CollectionCreateDialogComponent, 
})
export class CollectionModule { }
