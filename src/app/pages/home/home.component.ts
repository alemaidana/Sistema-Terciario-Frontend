import { Component } from '@angular/core';
import { alumnosPanel } from 'src/app/mocks/panelData.mock';
import { cardData } from 'src/app/models/extra/cardData.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  homeData: cardData[] = alumnosPanel;
}
