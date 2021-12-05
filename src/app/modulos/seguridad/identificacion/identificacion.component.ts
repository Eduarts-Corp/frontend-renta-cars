import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as cryptojs from "crypto-js";
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    //arreglo de propiedades. Primer campo: valor predeterminado, Segundo campo: validadores
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
  }

  identificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptojs.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos: any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
    }, ( error: any ) => {
      alert("Datos inválidos");
    })
  }

}
