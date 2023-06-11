import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Docente } from 'src/app/models/docente.interface';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  private myAppUrl:string;
  private myApiUrl:string;

  constructor(private http:HttpClient) 
  {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/docentes/';
  }

  getAllDocentes():Observable<Docente[]>
  {
     return this.http.get<Docente[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getDocente(id:number):Observable<Docente>
  {
    return this.http.get<Docente>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  createDocente(docente:Docente):Observable<void>
  {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, docente);
  }

  updateDocente(id:number, docente:Docente):Observable<void>
  {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, docente);
  }

  deleteDocente(id:number):Observable<void>
  {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
}
