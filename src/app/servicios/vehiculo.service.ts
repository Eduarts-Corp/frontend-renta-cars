import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVehiculo } from '../modelos/vehiculos.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})

export class VehiculoService {
  url = 'http://127.0.0.1:3000';
  constructor(private http: HttpClient, private seguridadServicios: SeguridadService) { }

  ObtenerRegistros(): Observable<ModeloVehiculo[]>{
    return this.http.get<ModeloVehiculo[]>(`${this.url}/vehiculos`);
  }

  ObtenerRegistroPorId(id:string): Observable<ModeloVehiculo>{
    return this.http.get<ModeloVehiculo>(`${this.url}/vehiculos/${id}`);
  }

  GuardarVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo>{
    return this.http.post(`${this.url}/vehiculos`, vehiculo, {});
  }
  
  ActualizarVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo>{
    return this.http.put(`${this.url}/vehiculos/${vehiculo.id}`, vehiculo, {});
  }

  ConsultarVehiculo(id:string): Observable<ModeloVehiculo>{
    return this.http.get<ModeloVehiculo>(`${this.url}/vehiculos/${id}`);
  }

  EliminarVehiculo(id: string): Observable<unknown> {
    return this.http.delete(`${this.url}/vehiculos/${id}`);
    //, {
    //  headers: new HttpHeaders({})
    //})
  }
}
