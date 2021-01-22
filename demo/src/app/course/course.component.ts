import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-course',
    templateUrl: './course.component.html',

})
export class CourseComponent {
    title : string = "Angular"
    trainer : string = "Srikanth"
    topics  : string [] = ["Templates","Data Binding","Forms","Http"]
    
    constructor() { }

    addTopic(topic : string) 
    {
        // makes sure topic is unique 
        this.topics.push(topic)
    }

    deleteTopic(topic : string) {
        console.log(topic)
        // assignment 
    }

}
