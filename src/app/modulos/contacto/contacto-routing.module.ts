import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvioMensajeComponent } from './envio-mensaje/envio-mensaje.component';

const routes: Routes = [
  {
    path: 'envio-mensaje',
    component: EnvioMensajeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
