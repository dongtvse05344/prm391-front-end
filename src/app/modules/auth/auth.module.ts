import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { LoginComponent } from './components/login/login.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { NbIconModule, NbLayoutModule, NbCheckboxModule, NbAlertModule, NbInputModule, NbButtonModule, NbCardModule } from '@nebular/theme';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    NbLayoutModule,
    NbCheckboxModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    MDBBootstrapModulesPro,
    ShareModule,
    NbCardModule
  ],
  declarations: [LoginComponent, NavigateComponent]
})
export class AuthModule { }
