import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  errorMessage(event:HttpErrorResponse)
  {
    if(event.error.msg){
      console.log(`${event.error.msg}`);
    }else{
      console.log(`An Error just happened try again later`);
    }
  }
}
