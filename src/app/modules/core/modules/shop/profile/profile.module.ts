import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutes } from './profile.routing';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutes,
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
