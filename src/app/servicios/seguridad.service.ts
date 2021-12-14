import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  url = 'http://localhost:3000';
  datosUsuarioSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());
  constructor(private http: HttpClient) { 
    this.VerificarSesionActual();
  }
  
  VerificarSesionActual(){
    let datos = this.ObtenerInformacionSesion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  // retorna un observable que contiene una estructura definida por los datos del usuario y el token 
  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarUsuario`, {
      usuario: usuario,
      contrasena: clave
    }, {
      headers: new HttpHeaders({})
    });
  }

  // se guardan los datos de sesión en el localStorage como una cadena de texto
  AlmacenarSesion(datos: ModeloIdentificar) {
    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  // acceder a los datos de la sesión q están almacenados en el localStorage
  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;
    } else {
      return null;
    }
  }

  EliminarInformacionSesion(){
      localStorage.removeItem("datosSesion");
      this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  SesionIniciada(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioSesion.next(datos);
  }

  ObtenerDatosUsuarioSesion(){
    return this.datosUsuarioSesion.asObservable();
  }

  ObtenerToken() {
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos.tk;
    } else {
      return '';
    }
  }
}
