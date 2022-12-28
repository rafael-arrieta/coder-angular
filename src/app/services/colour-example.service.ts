import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ColourExampleService {
  
  private colours = new BehaviorSubject<string>('green');
  public colours$ = this.colours.asObservable()
  private lastValue: string | null = 'green';
  
  private timeValue: number = 7000;
  constructor() {
      this.colours.subscribe((value) => (this.lastValue = value));
      interval(this.timeValue).subscribe(() => {
        if (this.lastValue === 'green') {
          this.colours.next('yellow');
          setTimeout(() => {this.colours.next('red')}, 1000)
        }
        else if (this.lastValue === 'red') {
          this.colours.next('yellow');
          setTimeout(() => {this.colours.next('green')}, 1000)
        }
      })
      //this.lastValue ? this.colours.next('red') : this.colours.next('green'));
  }
}
