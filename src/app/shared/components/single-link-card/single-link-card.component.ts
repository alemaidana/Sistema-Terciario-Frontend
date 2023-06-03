import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-link-card',
  templateUrl: './single-link-card.component.html',
  styleUrls: ['./single-link-card.component.css']
})
export class SingleLinkCardComponent {

  @Input() title:string = '';
  @Input() icon:string = '';
  @Input() link:string = '';

}
