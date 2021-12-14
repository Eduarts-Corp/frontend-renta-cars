import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehiculos.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  sesionIniciada: boolean = false;

  subs: Subscription = new Subscription();
  
  listadoVehiculos: ModeloVehiculo[] = [];
  constructor(private vehiculoServicio: VehiculoService, private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.ObtenerListadoVehiculos();
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioSesion().subscribe((datos:ModeloIdentificar) => {
      this.sesionIniciada = datos.estaIdentificado;
    })
  }

  ObtenerListadoVehiculos(){
    this.vehiculoServicio.ObtenerRegistros().subscribe((datos:ModeloVehiculo[]) => {
      this.listadoVehiculos = datos;
    })
  }

}
