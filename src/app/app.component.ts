import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'acomTakeHomeTest';
  randomNumbers = new Array();
  digit = 1;
  startRange = 1;
  endRange = 9;
  Math: any;
  submitted = false;
  MAX_RETRY = 1000;
  noOfRetry = 0;

  constructor() {
    this.Math = Math;
  }
  onSubmit() {
    this.submitted = true;
    this.getRandom();
  }

  public doReset(): void {
    this.randomNumbers = [];
  }

  private getRandom(): void {
    this.noOfRetry = 0;
    for (let i = this.startRange ; i <= this.endRange; i++) {
      let isRepeat = true;
      console.log('i = '  + i);
      while (isRepeat) {
        const n = this.getNextRandomNumber();
        const strNumber = n.toString().padStart(this.digit, '0');
        if (this.randomNumbers.indexOf(strNumber) === -1) {
          console.log('random number  :' + strNumber);
          this.randomNumbers.push(strNumber);
          isRepeat = false;
        } else {
          console.log('Found duplicate number.. re-random' );
          isRepeat = true;
          this.noOfRetry++;
          if (this.noOfRetry > this.MAX_RETRY) {
            isRepeat = false;
            console.log('Exceed maximum number of retry.' );
          }
        }
      }
      this.submitted = false;
    }
    console.log('End');
  }

  private getNextRandomNumber(): number {
    const n = Math.round(Math.random() * (this.endRange - this.startRange)) + this.startRange;
    return n;
  }
}
