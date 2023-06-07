import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura.interface';
import { Docente } from 'src/app/models/docente.interface';

@Pipe({
  name: 'getDatosDocente'
})
export class GetDatosDocentePipe implements PipeTransform {

  transform(docente: Docente, asignatura: Asignatura ): unknown {

    return docente.id == asignatura.docenteId 
    ? `${docente.nombre} ${docente.apellido}`
    : null;

  }

}
