import { Component } from '@angular/core';
import { AlumnosData } from 'src/app/mocks/alumnosData.mock';
import { Alumno } from 'src/app/models/data.interface';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  alumnos:Alumno[] = AlumnosData

}
