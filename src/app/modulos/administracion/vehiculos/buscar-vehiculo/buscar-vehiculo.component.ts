import { Component, OnInit } from '@angular/core';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-buscar-vehiculo',
  templateUrl: './buscar-vehiculo.component.html',
  styleUrls: ['./buscar-vehiculo.component.css']
})
export class BuscarVehiculoComponent implements OnInit {


  listadoRegistros : ModeloVehiculo[] = [];

//Aqui construimos el segundo metodo para poderlo consultar, antes fue necesario ir a Vehiculos.service.ts para crear alla el metodo

  constructor(private vehiculoServicio : VehiculoService)  { 
    
  }

  ngOnInit(): void {
    this.ObtenerListadoVehiculos();  
  }
  ObtenerListadoVehiculos(){
    this.vehiculoServicio.ObtenerRegistros().subscribe((datos:ModeloVehiculo[])=>{
      this.listadoRegistros = datos;    
    })
  }
}


