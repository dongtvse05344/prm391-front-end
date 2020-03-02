import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule) },
  { path: 'service', loadChildren: () => import('./service/service.module').then(mod => mod.ServiceModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule) },
];

export const ShopRoutes = RouterModule.forChild(routes);
