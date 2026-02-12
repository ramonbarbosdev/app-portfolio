import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RevealService {

  private readySubject = new BehaviorSubject<boolean>(false);

  ready$ = this.readySubject.asObservable();

  unlock() {
    console.log('Reveal unlocked'); // debug
    this.readySubject.next(true);
  }

}