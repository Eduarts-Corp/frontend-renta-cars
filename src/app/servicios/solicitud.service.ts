import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloSolicitud } from '../modelos/solicitud.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url = 'http://127.0.0.1:3000';
  token: String = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }

  CrearSolicitud(solicitud: ModeloSolicitud): Observable<ModeloSolicitud>{
    return this.http.post(`${this.url}/solicituds`, solicitud, {
      //headers: new HttpHeaders({
      //  'Authorization': `Bearer ${this.token}`
      //})
      headers: new HttpHeaders({})
    })
  }
  
  ListarSolicitudes(): Observable<ModeloSolicitud[]>{
    return this.http.get<ModeloSolicitud[]>(`${this.url}/solicituds`);
  }

  EliminarSolicitud(id: string): Observable<unknown> {
    return this.http.delete(`${this.url}/solicituds/${id}`);
    //, {
    //  headers: new HttpHeaders({})
    //})
  }
}
