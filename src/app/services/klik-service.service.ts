import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class KlikServiceService {

  count: number = 0;

  infoOnClicks = new Subject<number>();

  constructor(private logger: LoggerService) { }

  add() {
    this.count += 1 ;
    this.infoOnClicks.next(this.count);
    this.logger.log('click');
  }

  listenInfoOnClicks(): Observable<number> {
    return this.infoOnClicks.asObservable();
  }
}
