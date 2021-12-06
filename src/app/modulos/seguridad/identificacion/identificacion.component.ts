import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private servicioSeguridad: SeguridadService, private router: Router) { }

  ngOnInit(): void {
  }

  identificarUsuario(){
    // se obtiene la información q se encuentra en los controles del formulario
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    // se cifra la contraseña q ingrese el usuario
    let claveCifrada = cryptojs.MD5(clave).toString();
    // se invoca el servicio de Identificar que se definió en servicioSeguridad el cual se comunicará con backend
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos: any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(['/inicio']);
    }, ( error: any ) => {
      alert("Datos inválidos");
    })
  }
}
