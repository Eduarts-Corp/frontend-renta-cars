import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehiculos.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  vehiculo_id : string = "";

  fgValidador: FormGroup = this.fb.group({
    'fecha_inicio': ['', [Validators.required]],
    'fecha_final': ['', [Validators.required]]
  });

  fgValidador1: FormGroup = this.fb.group({
    'total_alquiler': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, 
    private solicitudServicio: SolicitudService, 
    private vehiculoServicio: VehiculoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.vehiculo_id = this.route.snapshot.params["vehiculo_id"];
  }

  GuardarSolicitud(){
    this.vehiculoServicio.ConsultarVehiculo(this.vehiculo_id).subscribe((vehiculo: ModeloVehiculo) => {
      let s = new ModeloSolicitud();
      let fecha_inicio = this.fgValidador.controls['fecha_inicio'].value;
      let fecha_final = this.fgValidador.controls['fecha_final'].value;
      let alquiler = vehiculo.valor_alquiler ? vehiculo.valor_alquiler : 0;
      s.total_alquiler = this.CalcularTotalAlquiler(fecha_inicio, fecha_final, alquiler)
      s.fecha_inicio = fecha_inicio;
      s.fecha_final = fecha_final;
      s.estado = 'Enviada';
      s.vehiculoId = this.vehiculo_id;
      this.solicitudServicio.CrearSolicitud(s).subscribe((datos: ModeloSolicitud) => {
        alert("Solicitud creada correctamente");
        this.router.navigate(["/administracion/listar-solicitudes"]);
      }, (error: any) => {
        alert("Error al crear la solicitud");
      })
    }, (error: any) => {
      alert("Error al consultar el vehículo");
    })
  }

  CalcularTotalAlquiler(inicio: string, final: string, alquiler: number)
  {
    let cantidadDias = this.CalcularDiasEntreFechas(inicio, final);
    return cantidadDias * alquiler;
  }

  CalcularDiasEntreFechas(inicio: string, final: string){
    let fecha_inicial = new Date(inicio);
    let fecha_final = new Date(final);
    // ya que el método getTime retorna un valor en milisegundos es necesario hacer este proceso para calcular la cantidad de días
    let cantidad_dias = Math.round((fecha_final.getTime()-fecha_inicial.getTime())/(1000*60*60*24));
    return cantidad_dias;
  }
}
