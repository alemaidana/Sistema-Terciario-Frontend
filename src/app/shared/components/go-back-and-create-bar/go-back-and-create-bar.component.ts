import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-go-back-and-create-bar',
  templateUrl: './go-back-and-create-bar.component.html',
  styleUrls: ['./go-back-and-create-bar.component.css']
})
export class GoBackAndCreateBarComponent {

  @Input() linkRegreso?:string;
  @Input() linkCrear?:string;
  
}
