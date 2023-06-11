import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Final } from 'src/app/models/final.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FinalesService {

  private myAppUrl:string;
  private myApiUrl:string;

  constructor(private http:HttpClient) 
  {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/examenFinal/';
  }

  getAllFinales():Observable<Final[]>
  {
     return this.http.get<Final[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getFinales(id:number):Observable<Final>
  {
    return this.http.get<Final>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  createFinal(final:Final):Observable<void>
  {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, final);
  }

  updateFinal(id:number, final:Final):Observable<void>
  {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, final);
  }

  deleteFinal(id:number):Observable<void>
  {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

}
