import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculos.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'descripcion': ['', [Validators.required]],
    'tipo': ['', [Validators.required]],
    'ruta_foto': ['', [Validators.required]],
    'enlace_video': ['', []],
    'estado': ['', [Validators.required]],
    'valor_alquiler': ['', [Validators.required]],
    'nombre_encargado': ['', [Validators.required]],
    'contacto_encargado': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private vehiculoServicio: VehiculoService, private router: Router) { }

  ngOnInit(): void {
  }

  AlmacenarVehiculo(){
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let tipo = this.fgValidador.controls["tipo"].value;
    let foto = this.fgValidador.controls["ruta_foto"].value;
    let video = this.fgValidador.controls["enlace_video"].value;
    let estado = this.fgValidador.controls["estado"].value;
    let alquiler = this.fgValidador.controls["valor_alquiler"].value;
    let encargado = this.fgValidador.controls["nombre_encargado"].value;
    let contacto = this.fgValidador.controls["contacto_encargado"].value;

    let vehiculo = new ModeloVehiculo();
    vehiculo.descripcion = descripcion;
    vehiculo.tipo = tipo;
    vehiculo.ruta_foto = foto;
    vehiculo.enlace_video = video;
    vehiculo.estado = estado;
    vehiculo.valor_alquiler = parseInt(alquiler);
    vehiculo.nombre_encargado = encargado;
    vehiculo.contacto_encargado = contacto;
    
    this.vehiculoServicio.GuardarVehiculo(vehiculo).subscribe((datos:ModeloVehiculo) => {
      alert("Se ha creado el vehiculo");
      this.router.navigate(["/administracion/listar-vehiculos"]);
    }, (error: any) => {
      alert("Error en el registro");
    });
  }

}
