import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../../../models/alumno.interface';

@Pipe({
  name: 'getEstado'
})
export class GetEstadoPipe implements PipeTransform {

  transform(alumno: Alumno, ...args: unknown[]): unknown {
    return alumno.estado ? "Regular" : "Inactivo";
  }

}
