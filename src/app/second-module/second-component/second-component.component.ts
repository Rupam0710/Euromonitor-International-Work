import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.scss'
})
export class SecondComponentComponent implements OnInit {
  message: string;

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.communicationService.currentmessage.subscribe((value) => {
      this.message = value;
    })
  }

}
