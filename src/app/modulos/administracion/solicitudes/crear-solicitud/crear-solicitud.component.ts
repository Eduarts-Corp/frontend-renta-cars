import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {
/*
  fgValidador: FormGroup = this.fb.group({
    //arreglo de propiedades. Primer campo: valor predeterminado, Segundo campo: validadores
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  });
*/

  fgValidador: FormGroup = this.fb.group({
    'fecha_inicio': ['', [Validators.required]],
    'fecha_final': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private solicitudServicio: SolicitudService ,private router: Router) { }

  ngOnInit(): void {
  }

  GuardarSolicitud(){
    let fecha_inicio = this.fgValidador.controls['fecha_inicio'].value;
    let fecha_final = this.fgValidador.controls['fecha_final'].value;

    let s = new ModeloSolicitud();
    s.fecha_inicio = fecha_inicio;
    s.fecha_final = fecha_final;

    this.solicitudServicio.CrearSolicitud(s).subscribe((datos: ModeloSolicitud) => {
      alert("Solicitud creada correctamente");
    }, (error: any) => {
      alert("Error al crear la solicitud");
    })
  }
}
