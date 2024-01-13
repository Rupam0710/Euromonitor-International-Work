import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {

  constructor(private communicationService: CommunicationService) { }

  public sendMessage() {
    this.communicationService.sendMessage('Components Connected!');
    console.log('clicked');

  }
}
