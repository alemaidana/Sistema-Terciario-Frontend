import { Component } from '@angular/core';
import { adminPanel } from 'src/app/mocks/panelData.mock';
import { cardData } from 'src/app/models/cardData.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  panelData: cardData[] = adminPanel;
}
