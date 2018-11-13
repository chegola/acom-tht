import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'acomTakeHomeTest';
  digit = 1;
  startRange = 1;
  endRange = 9;
  limitOfRange = 9;
  Math: any;
  submitted = false;
  constructor() {
    this.Math = Math;
  }
  onSubmit() {
    this.submitted = true;
    this.getRandom();
  }

  private getRandom(): void {
    const a = new Array();
    for (let i = this.startRange ; i <= this.endRange; i++) {
      let isRepeat = true;
      console.log('i ='  + i);
      while (isRepeat) {
        const n = this.getNextRandomNumber();
        if (a.indexOf(n) === -1) {
          console.log('random  :' + n.toString());
          a.push( n.toString());
          isRepeat = false;
        } else {
          console.log('Found duplicate number.. re-random' );
          isRepeat = true;
        }
      }
    }
    console.log('End');
  }

  private getNextRandomNumber(): number {
    const n = Math.round(Math.random() * (this.endRange - this.startRange)) + this.startRange;
    return n;
  }
}
