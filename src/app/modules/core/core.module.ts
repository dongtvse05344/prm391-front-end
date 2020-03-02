import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { CoreRoutes } from './core.routing';
import { ShareModule } from 'src/app/share/share.module';
import { NbMenuModule } from '@nebular/theme';
import { LayoutComponent } from './pages';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutes,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModulesPro,
    ShareModule,
    NbMenuModule
  ],
  declarations: [LayoutComponent]
})
export class CoreModule { }
