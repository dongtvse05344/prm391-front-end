import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './pages/collection/collection.component';

const routes: Routes = [
  { path: '', component: CollectionComponent},
];

export const CollectionRoutes = RouterModule.forChild(routes);
