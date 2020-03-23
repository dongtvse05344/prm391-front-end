import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectionRoutes } from './collection.routing';
import { CollectionComponent } from './pages/collection/collection.component';
import { CollectionCreateDialogComponent, CollectionAddProductDialogComponent } from './components';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxMaskModule } from 'ngx-mask';
import { NbDialogModule, NbButtonModule, NbInputModule, NbIconModule, NbCardModule, NbSelectModule, NbCheckboxModule } from '@nebular/theme';

const PAGES = [ 
  CollectionComponent
];
const COMPONENTS = [
  CollectionCreateDialogComponent,
  CollectionAddProductDialogComponent
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollectionRoutes,
    NgxDatatableModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbSelectModule,
    NbCheckboxModule,
    NgxMaskModule.forRoot(),
    NbDialogModule.forChild(),
  ],
  declarations: [...PAGES, ...COMPONENTS, ],
  entryComponents: [CollectionCreateDialogComponent, CollectionAddProductDialogComponent]
})
export class CollectionModule { }