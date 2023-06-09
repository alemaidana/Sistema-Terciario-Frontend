import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-docentes-nav-bar',
  templateUrl: './docentes-nav-bar.component.html',
  styleUrls: ['./docentes-nav-bar.component.css']
})
export class DocentesNavBarComponent {

  @Input() linkRegreso?:string;
  @Input() linkCrear?:string;
  
}
