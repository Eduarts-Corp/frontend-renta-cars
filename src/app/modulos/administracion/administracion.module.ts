import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearSolicitudComponent } from './solicitudes/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitudes/editar-solicitud/editar-solicitud.component';
import { ConsultarSolicitudComponent } from './solicitudes/consultar-solicitud/consultar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitudes/eliminar-solicitud/eliminar-solicitud.component';
import { ListarVehiculosComponent } from './vehiculos/listar-vehiculos/listar-vehiculos.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    ConsultarSolicitudComponent,
    EliminarSolicitudComponent,
    ListarVehiculosComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }