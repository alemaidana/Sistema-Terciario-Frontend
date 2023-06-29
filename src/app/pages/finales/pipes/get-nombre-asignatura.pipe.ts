import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura.interface';
import { Docente } from 'src/app/models/docente.interface';
import { Final } from 'src/app/models/final.interface';
import { Materia } from 'src/app/models/materias.interface';

@Pipe({
  name: 'GetNombreAsignaturaPipe'
})
export class GetNombreAsignaturaPipe implements PipeTransform {

  transform(materia: Materia, asignatura:Asignatura): unknown {
    
    return materia.id == asignatura.id 
    ? `${materia.nombre} ${materia.curso}`
    : null;
  }

}
