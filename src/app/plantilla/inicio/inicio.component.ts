import { Component, OnInit } from '@angular/core';
import { ModeloVehiculo } from 'src/app/modelos/vehiculos.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listadoVehiculos: ModeloVehiculo[] = [];
  constructor(private vehiculoServicio: VehiculoService) { }

  ngOnInit(): void {
    this.ObtenerListadoVehiculos();
  }

  ObtenerListadoVehiculos(){
    this.vehiculoServicio.ObtenerRegistros().subscribe((datos:ModeloVehiculo[]) => {
      this.listadoVehiculos = datos;
    })
  }

}
