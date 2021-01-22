import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-interest',
  templateUrl: './interest.component.html'
})
export class InterestComponent {
  interest : number = 0;
  constructor() { }

  calculate(amount : number, rate : number)
  {
     this.interest = amount * rate / 100; 
  }

  
}
