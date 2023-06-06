import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura.interface';
import { Docente } from 'src/app/models/docente.interface';
import { DocentesService } from 'src/app/services/docentes.service';

@Pipe({
  name: 'getDatosDocente'
})
export class GetDatosDocentePipe implements PipeTransform {

  transform(docente: Docente ): unknown {
  
    return docente.nombre;
  }

}
