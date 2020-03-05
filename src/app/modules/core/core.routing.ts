import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LayoutComponent } from './pages';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '',
        redirectTo: 'manager',
        pathMatch: 'full'
      },
      {
        path: 'manager',
        loadChildren: () => import('src/app/modules/core/modules/manager/manager.module').then(mod => mod.ManagerModule)
      }     
    ]
  },
];

export const CoreRoutes = RouterModule.forChild(routes);
