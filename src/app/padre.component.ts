import { Component, OnInit } from '@angular/core';
import { ComunicationService } from './comunication.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  constructor( public comunicationService : ComunicationService) { }

  ngOnInit(): void {
  }

}
