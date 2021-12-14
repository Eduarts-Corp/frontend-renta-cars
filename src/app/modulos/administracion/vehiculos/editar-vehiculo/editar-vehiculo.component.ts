import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculos.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

  id: string = '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'tipo': ['', [Validators.required]],
    'ruta_foto': ['', [Validators.required]],
    'enlace_video': ['', []],
    'estado': ['', [Validators.required]],
    'valor_alquiler': ['', [Validators.required]],
    'nombre_encargado': ['', [Validators.required]],
    'contacto_encargado': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private vehiculoServicio: VehiculoService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarVehiculo();
  }

  BuscarVehiculo(){
    this.vehiculoServicio.ObtenerRegistroPorId(this.id).subscribe((datos:ModeloVehiculo) => {
      this.fgValidador.controls["id"].setValue(this.id);
      if(datos){
        this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
        this.fgValidador.controls["tipo"].setValue(datos.tipo);
        this.fgValidador.controls["ruta_foto"].setValue(datos.ruta_foto);
        this.fgValidador.controls["enlace_video"].setValue(datos.enlace_video);
        this.fgValidador.controls["estado"].setValue(datos.estado);
        this.fgValidador.controls["valor_alquiler"].setValue(datos.valor_alquiler);
        this.fgValidador.controls["nombre_encargado"].setValue(datos.nombre_encargado);
        this.fgValidador.controls["contacto_encargado"].setValue(datos.contacto_encargado);
      }
    }, (error: any) => {
      alert("Error");
    })
  }

  ActualizarVehiculo() {
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let tipo = this.fgValidador.controls["tipo"].value;
    let foto = this.fgValidador.controls["ruta_foto"].value;
    let video = this.fgValidador.controls["enlace_video"].value;
    let estado = this.fgValidador.controls["estado"].value;
    let alquiler = this.fgValidador.controls["valor_alquiler"].value;
    let encargado = this.fgValidador.controls["nombre_encargado"].value;
    let contacto = this.fgValidador.controls["contacto_encargado"].value;

    let vehiculo = new ModeloVehiculo();
    vehiculo.id = this.id;
    vehiculo.descripcion = descripcion;
    vehiculo.tipo = tipo;
    vehiculo.ruta_foto = foto;
    vehiculo.enlace_video = video;
    vehiculo.estado = estado;
    vehiculo.valor_alquiler = parseInt(alquiler);
    vehiculo.nombre_encargado = encargado;
    vehiculo.contacto_encargado = contacto;
    
    this.vehiculoServicio.ActualizarVehiculo(vehiculo).subscribe((datos:ModeloVehiculo) => {
      alert("Se ha actualizado el vehiculo");
      this.router.navigate(["/administracion/listar-vehiculos"]);
    }, (error: any) => {
      alert("Error en la actualización");
    });
  }
}
