import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosData } from 'src/app/mocks/alumnosData.mock';
import { Alumno } from 'src/app/models/data.interface';

@Component({
  selector: 'app-alumno-detail',
  templateUrl: './alumno-detail.component.html',
  styleUrls: ['./alumno-detail.component.css']
})
export class AlumnoDetailComponent {
  
  id:string | null;
  alumno:Alumno[];

  constructor(private route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');//this how i get the id
    this.alumno = AlumnosData.filter( (alumno) => alumno.id == <unknown>this.id );
    console.log(this.alumno);
  }
}
