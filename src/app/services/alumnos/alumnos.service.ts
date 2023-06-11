import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private myAppUrl:string;
  private myApiUrl:string;

  constructor(private http:HttpClient) 
  {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/alumnos/';
  }

  getAllAlumnos():Observable<Alumno[]>
  {
     return this.http.get<Alumno[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getAlumno(id:number):Observable<Alumno>
  {
    return this.http.get<Alumno>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  createAlumno(alumno:Alumno):Observable<void>
  {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, alumno);
  }

  updateAlumno(id:number, alumno:Alumno):Observable<void>
  {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, alumno);
  }

  deleteAlumno(id:number):Observable<void>
  {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

}
