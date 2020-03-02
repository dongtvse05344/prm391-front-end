import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './pages';
import { ListOrderComponent } from './components';
import { OrderRoutes } from './order.routing';

const PAGES = [
  OrderComponent
];
const COMPONENTS = [
  ListOrderComponent
];
@NgModule({
  imports: [
    CommonModule,
    OrderRoutes
  ],
  declarations: [...PAGES, ...COMPONENTS]
})
export class OrderModule { }
