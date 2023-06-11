import { Pipe, PipeTransform } from '@angular/core';
import { carreras } from 'src/app/mocks/carrera.mock';
import { Asignatura } from 'src/app/models/asignatura.interface';
import { Materia } from 'src/app/models/materias.interface';

@Pipe({
  name: 'getCarrera'
})
export class GetCarreraPipe implements PipeTransform {

  transform(materia: Materia, asignatura:Asignatura): unknown {
    
    return asignatura.subjectId == materia.id 
    ?`${carreras[materia.careraId]}`
    : null;
  }

}
