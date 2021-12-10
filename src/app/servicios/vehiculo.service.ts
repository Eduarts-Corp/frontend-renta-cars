import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelVehiculo } from '../modelos/vehiculo.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  url = 'http://localhost:3000';
  token: string = '';

  constructor(private http: HttpClient,
   private seguridadServicios: SeguridadService) {
    this.token = this.seguridadServicios.ObtenerToken();
   } 
   CrearVehiculo(vehiculo:ModelVehiculo): Observable<ModelVehiculo>{  // Metodo para crear Vehiculo
    return this.http.post<ModelVehiculo>(`${this.url}/vehiculos`, vehiculo,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
    })
  }) 
}
  ObtenerRegistros(): Observable<ModelVehiculo[]>{    //Metodo para Buscar Vehiculos(listar)
    return this.http.get<ModelVehiculo[]>(`${this.url}/vehiculos`);
  }
}  
