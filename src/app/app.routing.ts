import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: 'core',
    loadChildren: () => import('src/app/modules/core/core.module').then(mod => mod.CoreModule),
  },
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
