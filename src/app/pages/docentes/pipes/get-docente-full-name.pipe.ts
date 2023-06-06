import { Pipe, PipeTransform } from '@angular/core';
import { Docente } from 'src/app/models/docente.interface';

@Pipe({
  name: 'getDocenteFullName'
})
export class GetDocenteFullNamePipe implements PipeTransform {

  transform(docente: Docente, ...args: unknown[]): unknown {
    return `${docente?.nombre} ${docente?.apellido}` ;
  }

}
