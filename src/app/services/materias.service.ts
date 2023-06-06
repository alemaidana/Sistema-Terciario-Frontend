import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Materia } from '../models/materias.interface';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {
  private myAppUrl:string;
  private myApiUrl:string;

  constructor(private http:HttpClient) 
  {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/materias/';
  }

  getAllMaterias():Observable<Materia[]>
  {
     return this.http.get<Materia[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getMateria(id:number):Observable<Materia>
  {
    return this.http.get<Materia>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  createMateria(materia:Materia):Observable<void>
  {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, materia);
  }

  updateMateria(id:number, materia:Materia):Observable<void>
  {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, materia);
  }

  deleteMateria(id:number):Observable<void>
  {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
}
