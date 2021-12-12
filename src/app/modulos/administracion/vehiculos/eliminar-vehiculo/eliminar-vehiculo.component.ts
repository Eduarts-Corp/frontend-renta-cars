import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-eliminar-vehiculo',
  templateUrl: './eliminar-vehiculo.component.html',
  styleUrls: ['./eliminar-vehiculo.component.css']
})
export class EliminarVehiculoComponent implements OnInit { 

    id: string='';
  
    fgValidador: FormGroup = this.fb.group({
      'id':['',[Validators.required]], 
      'nombre':['',[Validators.required]],
      'tipo':['',[Validators.required]],        
      'ruta_foto':['',[Validators.required]],
      'enlace_video':['',[Validators.required]],
      'estado':['',[Validators.required]],
      'valor_alquiler':['',[Validators.required]],
      'nombre_encargado':['',[Validators.required]],
      'contacto_encargado':['',[Validators.required]],
  
    })


  constructor(private fb: FormBuilder,
    private servicioVehiculo: VehiculoService,
    private router: Router,
    private route: ActivatedRoute) { 

    }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarVehiculo();
  };
  
  BuscarVehiculo(){
    this.servicioVehiculo.ObtenerRegistrosPorId(this.id).subscribe((datos:ModeloVehiculo) =>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["tipo"].setValue(datos.tipo);
      this.fgValidador.controls["ruta_foto"].setValue(datos.ruta_foto);
      this.fgValidador.controls["enlace_video"].setValue(datos.enlace_video);
      this.fgValidador.controls["estado"].setValue(datos.estado);
      this.fgValidador.controls["valor_alquiler"].setValue(datos.valor_alquiler);
      this.fgValidador.controls["nombre_encargado"].setValue(datos.nombre_encargado);
      this.fgValidador.controls["contacto_encargado"].setValue(datos.contacto_encargado);

    });
  }

  

  EliminarVehiculo(){

  let nombre= this.fgValidador.controls["nombre"].value;
  let tipo = this.fgValidador.controls["tipo"].value;     
  let ruta_foto = this.fgValidador.controls["ruta_foto"].value;
  let enlace_video = this.fgValidador.controls["enlace_video"].value;
  let estado = this.fgValidador.controls["estado"].value;    
  let valor_alquiler = parseInt(this.fgValidador.controls["valor_alquiler"].value); 
  let nombre_encargado = this.fgValidador.controls["nombre_encargado"].value;
  let contacto_encargado = this.fgValidador.controls["contacto_encargado"].value;

  let p = new ModeloVehiculo();

  p.id= this.id;
  p.nombre= nombre;
  p.tipo= tipo;
  p.ruta_foto= ruta_foto;
  p.enlace_video= enlace_video;    
  p.estado= estado;   
  p.valor_alquiler= valor_alquiler;
  p.nombre_encargado= nombre_encargado;  
  p.contacto_encargado = contacto_encargado;

  this.servicioVehiculo.EliminarVehiculo(this.id).subscribe((datos:ModeloVehiculo)=>{
  alert("Informacion Eliminada con Exito");
  this.router.navigate(["/administracion/buscar-vehiculo"]);
  },(error:any) => {
  alert("No se ha Podido Eliminar la Informacion del Vehiculo");
    })
  }
}


