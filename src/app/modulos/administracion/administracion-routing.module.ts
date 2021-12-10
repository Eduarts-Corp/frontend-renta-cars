import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearSedeComponent } from './sedes/crear-sede/crear-sede.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { BuscarVehiculoComponent } from './vehiculos/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculos/crear-vehiculo/crear-vehiculo.component';


const routes: Routes = [
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  
  {
    path: 'crear-vehiculo',
    component:CrearVehiculoComponent
  },

  {
    path: 'buscar-vehiculo',
    component:BuscarVehiculoComponent
  },

  {
    path: 'crear-sede',
    component:CrearSedeComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
