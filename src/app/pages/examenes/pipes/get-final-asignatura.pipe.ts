import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura.interface';
import { Examen } from 'src/app/models/examen.interface';
import { Final } from 'src/app/models/final.interface';
import { Materia } from 'src/app/models/materias.interface';

@Pipe({
  name: 'getFinalAsignatura'
})
export class GetFinalAsignaturaPipe implements PipeTransform {

  transform(
    examen: Examen,
    final: Final,
    asignatura: Asignatura,
    materia: Materia
  ): unknown {
    
    return examen.finalId == final.id && final.asignaturaId == asignatura.id && asignatura.subjectId == materia.id
    ? `${ materia.nombre } ${ materia.curso } Año`
    : null; 
  }

}
