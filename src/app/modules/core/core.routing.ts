import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LayoutComponent } from './pages';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '',
        redirectTo: 'shop',
        pathMatch: 'full'
      },
      {
        path: 'manager',
        loadChildren: () => import('src/app/modules/core/modules/manager/manager.module').then(mod => mod.ManagerModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('src/app/modules/core/modules/shop/shop.module').then(mod => mod.ShopModule)
      },
     
    ]
  },
];

export const CoreRoutes = RouterModule.forChild(routes);
