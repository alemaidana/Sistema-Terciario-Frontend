import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../../../models/alumno.interface'

@Pipe({
  name: 'getAlumnoFullName'
})
export class GetAlumnoFullNamePipe implements PipeTransform {

  transform(alumno: Alumno | undefined, ...args: unknown[]): unknown {
    return `${alumno?.nombre} ${alumno?.apellido}` ;
  }

}
