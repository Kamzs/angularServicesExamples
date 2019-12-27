import { Component, OnInit } from '@angular/core';
import { KlikServiceService } from '../services/klik-service.service';

@Component({
  selector: 'app-kliker2',
  templateUrl: './kliker2.component.html',
  styleUrls: ['./kliker2.component.css']
})
export class Kliker2Component implements OnInit {

  count: number = 0;

  constructor(private klikServiceService: KlikServiceService) {}

  ngOnInit() {
  }

  add() {
    this.count += 1 ;
    this.klikServiceService.add();
  }

}
