import { Component, OnInit } from '@angular/core';
import {KlikServiceService} from '../services/klik-service.service';

@Component({
  selector: 'app-kliker1',
  templateUrl: './kliker1.component.html',
  styleUrls: ['./kliker1.component.css']
})
export class Kliker1Component implements OnInit {

  count: number = 0;

  constructor(private klikServiceService: KlikServiceService) { }

  ngOnInit() {
  }

  add() {
    this.count += 1 ;
    this.klikServiceService.add();
  }

}
