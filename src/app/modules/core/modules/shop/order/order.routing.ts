import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './pages';

const routes: Routes = [
  { path: '', component: OrderComponent },
];

export const OrderRoutes = RouterModule.forChild(routes);
