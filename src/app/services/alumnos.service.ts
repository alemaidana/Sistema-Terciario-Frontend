import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/data.interface';
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

  getAlumnos():Observable<Alumno[]>
  {
     return this.http.get<Alumno[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

}
