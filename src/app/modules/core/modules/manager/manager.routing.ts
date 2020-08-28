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
    {
      path: 'collection',
      loadChildren: () => import('src/app/modules/core/modules/manager/collection/collection.module').then(mod => mod.CollectionModule)
    },
    {
      path: 'order',
      loadChildren: () => import('src/app/modules/core/modules/manager/order/order.module').then(mod => mod.OrderModule)
    },
    {
      path: 'category',
      loadChildren: () => import('src/app/modules/core/modules/manager/category/category.module').then(mod => mod.CategoryModule)
    },
];

export const ManagerRoutes = RouterModule.forChild(routes);
