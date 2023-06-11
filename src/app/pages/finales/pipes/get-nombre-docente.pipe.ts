import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura.interface';
import { Docente } from 'src/app/models/docente.interface';
import { Final } from 'src/app/models/final.interface';

@Pipe({
  name: 'getNombreDocente'
})
export class GetNombreDocentePipe implements PipeTransform {

  transform(docente: Docente, asignatura:Asignatura, final:Final): unknown {
    
    return final.asignaturaId == asignatura.id && asignatura.docenteId == docente.id
    ? `• ${docente.nombre} ${ docente.apellido}`
    : null;
  }

}
