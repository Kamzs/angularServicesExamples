import { Component, OnInit } from '@angular/core';
import { KlikServiceService } from './services/klik-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  title = 'projektSerwisy';
  sumOfClicks: number;
  constructor(private service: KlikServiceService) {
  }

  ngOnInit(): void {
    this.service.listenInfoOnClicks().subscribe(newClickNo => {
      this.sumOfClicks = newClickNo;
    });
   }


}
