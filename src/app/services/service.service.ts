import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dispositivo, Conexion, Historico } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private urlEndPoint: string = 'http://localhost:9080';
  constructor(private http: HttpClient) {

  }
  getDispositivos(): Observable<Dispositivo[]> {
    return this.http.get<Dispositivo[]>(this.urlEndPoint + '/dispositivo');
  }
  eliminarDispositivo(id: number) {
    return this.http.delete(this.urlEndPoint + '/dispositivo/' + id);
  }
  getConexiones(): Observable<Conexion[]> {
    return this.http.get<Conexion[]>(this.urlEndPoint + '/conexion');
  }
  registrarDispositivo(dispositivo: Dispositivo): Observable<Dispositivo> {
    return this.http.post<Dispositivo>(this.urlEndPoint + '/dispositivo', dispositivo);
  }
  eliminarConexion(id: number) {
    return this.http.delete(this.urlEndPoint + '/conexion/' + id);
  }
  registrarConexion(conexion: Conexion): Observable<Conexion> {
    return this.http.post<Conexion>(this.urlEndPoint + '/conexion', conexion);
  }
  findDispositivoById(id: number): Observable<Dispositivo> {
    return this.http.get<Dispositivo>(this.urlEndPoint + '/dispositivo/' + id);
  }
  editarDispositivo(id: number, dispositivo: Dispositivo): Observable<Dispositivo> {
    return this.http.put<Dispositivo>(this.urlEndPoint + '/dispositivo/' + id, dispositivo);
  }
  findConexionById(id: number): Observable<Conexion> {
    return this.http.get<Conexion>(this.urlEndPoint + '/conexion/' + id);
  }
  editarConexion(id: number, conexion: Conexion): Observable<Conexion> {
    return this.http.put<Conexion>(this.urlEndPoint + '/conexion/' + id, conexion);
  }
  getHistorico():Observable<Historico[]>{
    return this.http.get<Historico[]>(this.urlEndPoint + '/historico');
  }
  filtroConexion(term: string):Observable<Historico[]>{
    return this.http.get<Historico[]>(this.urlEndPoint + '/historico/' + 'filtro-red/' + term);
  }
  filtroMac(term: string):Observable<Historico[]>{
    return this.http.get<Historico[]>(this.urlEndPoint + '/historico/' + 'filtro-mac/' + term);
  }
}
