//  Template driven form 

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    uname : string = "Scott";
    age : number = 30;

    constructor() {
    }

    ngOnInit(): void { }

    register(form : any){
        console.log(form)
        console.log("Uname " + this.uname)
        console.log("Age " + this.age)
    }
}
