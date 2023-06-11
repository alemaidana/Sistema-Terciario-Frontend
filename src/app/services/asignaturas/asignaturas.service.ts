import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Asignatura } from '../../models/asignatura.interface';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  private myAppUrl:string;
  private myApiUrl:string;

  constructor(private http:HttpClient) 
  {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/asignaturas/';
  }

  getAllAsignaturas():Observable<Asignatura[]>
  {
     return this.http.get<Asignatura[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getAsignatura(id:number):Observable<Asignatura>
  {
    return this.http.get<Asignatura>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  createAsignatura(asignatura:Asignatura):Observable<void>
  {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, asignatura);
  }

  updateAsignatura(id:number, asignatura:Asignatura):Observable<void>
  {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, asignatura);
  }

  deleteAsignatura(id:number):Observable<void>
  {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

}
