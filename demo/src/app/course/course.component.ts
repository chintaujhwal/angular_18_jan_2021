import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-course',
    templateUrl: './course.component.html',

})
export class CourseComponent {
    title : string = "Angular"
    trainer : string = "Srikanth"
    
    constructor() { }

}
