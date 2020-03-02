import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { environment } from '../../../environments/environment';

const routes: Routes = [
  { path: '', redirectTo: 'navigate' },
  { path: 'login', component: LoginComponent },
  { path: 'navigate', component: NavigateComponent },
];

export const AuthRoutes = RouterModule.forChild(routes);
