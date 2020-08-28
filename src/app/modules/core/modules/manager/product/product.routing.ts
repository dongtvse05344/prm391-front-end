import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './pages';

const routes: Routes = [
  { path: '', component: ProductComponent},
];

export const ProductRoutes = RouterModule.forChild(routes);