import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
