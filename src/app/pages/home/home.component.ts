import { Component } from '@angular/core';
import { cardData } from 'src/app/models/cardData.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cardData:cardData[] = [
    {title: 'Examenes', icon: 'bi bi-person-fill'},
    {title: 'Asistencias', icon: 'bi bi-journal-check'},
    {title: 'Blog', icon: 'bi bi-pencil-square'},
    {title: 'Biblioteca', icon: 'bi bi-book'},
    {title: 'Desafios', icon: 'bi bi-controller'},
    {title: 'Documentacion', icon: 'bi bi-file-earmark-spreadsheet-fill'},
    {title: 'Documentacion', icon: 'bi bi-file-earmark-spreadsheet-fill'},
  ]
}
