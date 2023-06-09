import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alumnos-nav-bar',
  templateUrl: './alumnos-nav-bar.component.html',
  styleUrls: ['./alumnos-nav-bar.component.css']
})
export class AlumnosNavBarComponent {

  @Input() linkRegreso?:string;
  @Input() linkCrear?:string;
  
}
