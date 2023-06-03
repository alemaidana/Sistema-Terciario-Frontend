import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../../../models/alumno.interface';
import { carreras } from '../../../mocks/carrera.mock';

@Pipe({
  name: 'getCarrera'
})
export class GetCarreraPipe implements PipeTransform {

  transform(alumno: Alumno, ...args: unknown[]): unknown {
    return carreras[alumno?.carreraId];
  }

}
