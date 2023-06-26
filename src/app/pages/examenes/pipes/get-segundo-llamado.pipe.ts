import { Pipe, PipeTransform } from '@angular/core';
import { Examen } from 'src/app/models/examen.interface';
import { Final } from 'src/app/models/final.interface';

@Pipe({
  name: 'getSegundoLLamado'
})
export class GetSegundoLLamadoPipe implements PipeTransform {

  transform(examen:Examen, final:Final): unknown {
    
    return examen.finalId == final.id
    ? `Segundo Llamado ${ new Date( final.segundo_llamado ).toDateString() }`
    : null;
    ;
  }
}
