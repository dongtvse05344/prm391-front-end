import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'product',
      pathMatch: 'full'
    },
    {
      path: 'product',
      loadChildren: () => import('src/app/modules/core/modules/manager/product/product.module').then(mod => mod.ProductModule)
    },
];

export const ManagerRoutes = RouterModule.forChild(routes);
