import { Pipe, PipeTransform } from '@angular/core';
import { Docente } from 'src/app/models/docente.interface';

@Pipe({
  name: 'getDocenteEstado'
})
export class GetDocenteEstadoPipe implements PipeTransform {

  transform(docente: Docente, ...args: unknown[]): unknown {
    return docente.estado ? "Regular" : "Inactivo";
  }

}
