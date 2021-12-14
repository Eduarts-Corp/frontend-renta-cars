import { Component, OnInit } from '@angular/core';
import { ModeloVehiculo } from 'src/app/modelos/vehiculos.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';


@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent implements OnInit {

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

  confirmarEliminacion(id:string){
    let message = "¿Está seguro/a que desea eliminar el vehículo?"
    let action = confirm(message) ? true : '';

    if(action == true) {
      this.vehiculoServicio.EliminarVehiculo(id).subscribe(() => {
        // si la eliminación es exitosa se busca la fila correspondiente en la tabla y se elimina
        // TODO: consultar si Angular podría eliminarlo automáticamente del DOM
        let filaEliminar = document.getElementById(id);
        filaEliminar ? filaEliminar.remove():'';
      }, (error:any) => {
        alert("No se pudo eliminar el vehículo");
      });
    }
  }

}
