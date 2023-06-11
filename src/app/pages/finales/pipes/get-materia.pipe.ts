import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura.interface';
import { Final } from 'src/app/models/final.interface';
import { Materia } from 'src/app/models/materias.interface';

@Pipe({
  name: 'getMateria'
})
export class GetMateriaPipe implements PipeTransform {

  transform(materia: Materia, asignatura:Asignatura, final:Final): unknown {
    
    return final.asignaturaId == asignatura.id && asignatura.subjectId == materia.id
    ? `${materia.nombre}`
    : null;
  }

}
