import { Component } from '@angular/core';
import { materiasCorrelativas } from 'src/app/mocks/correlatividades.mock';
import { Correlatividad } from 'src/app/models/extra/correlativas.interface';

@Component({
  selector: 'app-asignaturas-correlatives',
  templateUrl: './asignaturas-correlatives.component.html',
  styleUrls: ['./asignaturas-correlatives.component.css']
})
export class AsignaturasCorrelativesComponent {

  materias:Correlatividad[] = materiasCorrelativas;
}
