import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './pages';

const routes: Routes = [
  { path: '', component: ServiceComponent },
];

export const ServiceRoutes = RouterModule.forChild(routes);
