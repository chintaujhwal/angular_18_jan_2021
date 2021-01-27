import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
    selector: 'st-counter2',
    templateUrl: './counter2.component.html',
    providers :[CounterService]
})
export class Counter2Component implements OnInit {
    constructor(private counterService : CounterService) { }

    ngOnInit(): void { }

    inc() {
        this.counterService.increment();
    }
    dec() {
        this.counterService.decrement();
    }

    getCounter() {
        return  this.counterService.counter;
    }
}
