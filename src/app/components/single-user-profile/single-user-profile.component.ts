import { Component, Input } from '@angular/core';
import { Alumno } from 'src/app/models/data.interface';

@Component({
  selector: 'app-single-user-profile',
  templateUrl: './single-user-profile.component.html',
  styleUrls: ['./single-user-profile.component.css']
})
export class SingleUserProfileComponent {

  @Input() alumno?:Alumno;

}
