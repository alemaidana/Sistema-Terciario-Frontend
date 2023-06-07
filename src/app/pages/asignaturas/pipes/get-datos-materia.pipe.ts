import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura.interface';
import { Materia } from 'src/app/models/materias.interface';

@Pipe({
  name: 'getDatosMateria'
})
export class GetDatosMateriaPipe implements PipeTransform {

  transform(materia: Materia, asignatura: Asignatura): unknown {
    
    return materia.id == asignatura.subjectId 
    ? `${materia.nombre}`
    : null;
  }

}
