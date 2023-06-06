import { Component, Input } from '@angular/core';
import { Docente } from 'src/app/models/docente.interface';

@Component({
  selector: 'app-docentes-grid',
  templateUrl: './docentes-grid.component.html',
  styleUrls: ['./docentes-grid.component.css']
})
export class DocentesGridComponent {

  @Input() docente?:Docente;
  @Input() link?:number;

}
