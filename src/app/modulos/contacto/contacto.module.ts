import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { EnvioMensajeComponent } from './envio-mensaje/envio-mensaje.component';


@NgModule({
  declarations: [
    EnvioMensajeComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule { }
