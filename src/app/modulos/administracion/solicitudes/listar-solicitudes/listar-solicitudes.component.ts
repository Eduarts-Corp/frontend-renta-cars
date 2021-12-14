import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehiculos.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.css']
})
export class ListarSolicitudesComponent implements OnInit {
  listadoSolicitudes: ModeloSolicitud[] = [];
  // TODO: se podría refactorizar definiendo un modelo con los elementos q se requieren
  vehiculoSolicitud: any = {};
  listadoSolicitudVehiculo: any = [];

  constructor(private solicitudServicio: SolicitudService, private vehiculoServicio: VehiculoService,
    private router: Router) { }

  ngOnInit(): void {
    this.ListarSolicitudes();
  }

  ListarSolicitudes(){
    this.listadoSolicitudes = [];
    // se consultan las solicitudes
    this.solicitudServicio.ListarSolicitudes().subscribe((datos: ModeloSolicitud[]) => {
      this.listadoSolicitudes = datos;
      // TODO: refactor
      // se recorre el array de tipo ModeloSolicitud para formar el array con todos los datos q se necesitan en la vista
      datos.forEach((elemento) => {
        let vehiculo_id = elemento.vehiculoId ? elemento.vehiculoId : '';
        this.vehiculoServicio.ConsultarVehiculo(vehiculo_id).subscribe((vehiculo: ModeloVehiculo) => {
          // una vez se obtiene la información del vehiculo se llena el objeto con toda la info q se debe mostrar en la vista
          this.vehiculoSolicitud.id=elemento.id;
          this.vehiculoSolicitud.fecha_inicio = elemento.fecha_inicio;
          this.vehiculoSolicitud.fecha_final = elemento.fecha_final;
          this.vehiculoSolicitud.total_alquiler = elemento.total_alquiler;
          this.vehiculoSolicitud.estado = elemento.estado;
          this.vehiculoSolicitud.tipoVehiculo = vehiculo.tipo;
          this.vehiculoSolicitud.fotoVehiculo = vehiculo.ruta_foto;
          this.listadoSolicitudVehiculo.push(this.vehiculoSolicitud);
          this.vehiculoSolicitud = {};
        }, (error: any) => {
        })
      })
    })
  }

  confirmarEliminacion(id:string){
    let message = "¿Está seguro/a que desea eliminar la solicitud?"
    let action = confirm(message) ? true : '';

    if(action == true) {
      this.solicitudServicio.EliminarSolicitud(id).subscribe(() => {
        // si la eliminación es exitosa se busca la fila correspondiente en la tabla y se elimina
        // TODO: consultar si Angular podría eliminarlo automáticamente del DOM
        let filaEliminar = document.getElementById(id);
        filaEliminar ? filaEliminar.remove():'';
      }, (error:any) => {
        alert("No se pudo eliminar la solicitud");
      });
    }
  }
}