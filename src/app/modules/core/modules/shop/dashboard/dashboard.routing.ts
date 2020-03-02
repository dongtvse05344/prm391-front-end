import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages';

const routes: Routes = [
  { path: '', component: DashboardComponent },
];

export const DashboardRoutes = RouterModule.forChild(routes);
