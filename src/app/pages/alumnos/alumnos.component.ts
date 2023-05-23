import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/data.interface';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos:Alumno[] = [];

  constructor(private _alumnosService:AlumnosService){}
  
  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos()
  {
    this._alumnosService.getAlumnos().subscribe({
      next: (alumnos:Alumno[]) => {this.alumnos = alumnos},
      error: (error:Error) => {console.log(`An error just happened ${error}`);}
    });
  }

}
