import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloUsuario } from '../modelos/usuario.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = "http://localhost:3000";
  token = "";
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerListaUsuarios(): Observable<ModeloUsuario[]> {
      return this.http.get<ModeloUsuario[]>(`${this.url}/usuarios`);
  }

  CrearUsuario(usuario: ModeloUsuario): Observable<ModeloUsuario>{
    return this.http.post<ModeloUsuario>(`${this.url}/usuarios`, usuario, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
