import { Pipe, PipeTransform } from '@angular/core';
import { Examen } from 'src/app/models/examen.interface';
import { Final } from 'src/app/models/final.interface';

@Pipe({
  name: 'getPrimerLLamado'
})
export class GetPrimerLLamadoPipe implements PipeTransform {

  transform(examen:Examen, final:Final): unknown {
    
    return examen.finalId == final.id
    ? `Primer Llamado ${ new Date( final.primer_llamado ).toDateString() }`
    : null;
    ;
  }

}
