import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examen } from 'src/app/models/examen.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  private myAppUrl:string;
  private myApiUrl:string;

  constructor(private http:HttpClient) 
  {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/registroExamen/';
  }

  getAllExamenes():Observable<Examen[]>
  {
     return this.http.get<Examen[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getExamen(id:number):Observable<Examen>
  {
    return this.http.get<Examen>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  createExamen(examen:Examen):Observable<void>
  {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, examen);
  }

  updateExamen(id:number, examen:Examen):Observable<void>
  {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, examen);
  }

  deleteExamen(id:number):Observable<void>
  {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
}
