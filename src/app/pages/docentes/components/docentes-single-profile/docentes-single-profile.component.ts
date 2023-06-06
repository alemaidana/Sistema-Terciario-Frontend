import { Component, Input } from '@angular/core';
import { Docente } from 'src/app/models/docente.interface';

@Component({
  selector: 'app-docentes-single-profile',
  templateUrl: './docentes-single-profile.component.html',
  styleUrls: ['./docentes-single-profile.component.css']
})
export class DocentesSingleProfileComponent {

  @Input() docente?:Docente;
  @Input() link?:string;
}
