import { Component, OnInit } from '@angular/core';
import { StackService } from './stack.service';

@Component({
    selector: 'st-stack',
    templateUrl: './stack.component.html',
    providers : [StackService]
})
export class StackComponent   {
    value : number;
    constructor(private stack : StackService) 
    { }

    pushValue(value) {
       this.stack.push(value)
    }

    popValue() {
      if (this.length() == 0)
          return;
           
       this.value = this.stack.pop() 
    }

    length() : number {
        return this.stack.length();
    }
}

