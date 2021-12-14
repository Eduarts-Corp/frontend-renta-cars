import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],
    'celular': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, 
    private servicioUsuario: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  AlmacenarUsuario(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let celular = this.fgValidador.controls["celular"].value;
    let correo = this.fgValidador.controls["correo"].value;

    let usuario = new ModeloUsuario();
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.celular = celular;
    usuario.correo = correo;
    
    this.servicioUsuario.CrearUsuario(usuario).subscribe((datos:ModeloUsuario) => {
      alert("Su cuenta se ha creado");
      this.router.navigate(["/inicio"]);
    }, (error: any) => {
      alert("Error en el registro");
    });
  }
}
