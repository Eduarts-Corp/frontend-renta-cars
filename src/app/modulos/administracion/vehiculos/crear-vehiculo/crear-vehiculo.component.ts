import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {
 

  fgValidador: FormGroup = this.fb.group({ 
    'nombre':['',[Validators.required]],
    'tipo':['',[Validators.required]],        
    'ruta_foto':['',[Validators.required]],
    'enlace_video':['',[Validators.required]],
    'estado':['',[Validators.required]],
    'valor_alquiler':['',[Validators.required]],
    'nombre_encargado':['',[Validators.required]],
    'contacto_encargado':['',[Validators.required]],

  });

  constructor(private fb: FormBuilder,
    private servicioVehiculo: VehiculoService,
    private router: Router) {

     }

  ngOnInit(): void {
  }



  GuardarVehiculo(){
    let nombre= this.fgValidador.controls["nombre"].value;
    let tipo = this.fgValidador.controls["tipo"].value;     
    let ruta_foto = this.fgValidador.controls["ruta_foto"].value;
    let enlace_video = this.fgValidador.controls["enlace_video"].value;
    let estado = this.fgValidador.controls["estado"].value;    
    let valor_alquiler = parseInt(this.fgValidador.controls["valor_alquiler"].value); 
    let nombre_encargado = this.fgValidador.controls["nombre_encargado"].value;
    let contacto_encargado = this.fgValidador.controls["contacto_encargado"].value; 
    
    let p = new ModelVehiculo();

    p.nombre= nombre;
    p.tipo= tipo;
    p.ruta_foto= ruta_foto;
    p.enlace_video= enlace_video;    
    p.estado= estado;   
    p.valor_alquiler= valor_alquiler;
    p.nombre_encargado= nombre_encargado;  
    p.contacto_encargado = contacto_encargado;

    this.servicioVehiculo.CrearVehiculo(p).subscribe((datos: ModelVehiculo) =>{
      alert("Vehiculo Almacenado Correctamente");     
    }, (error:any) => {
      alert ("Error almacenando el vehiculo");

   })
  }
  }
