import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.interface';
import { Examen } from 'src/app/models/examen.interface';

@Pipe({
  name: 'getAlumno'
})
export class GetAlumnoPipe implements PipeTransform {

  transform(examen: Examen, alumno: Alumno): unknown {
    
    return examen.alumnoId == alumno.id 
    ? `${ alumno.nombre } ${ alumno.apellido }`
    : null; 
  }

}
