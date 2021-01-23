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
        if (this.topics.includes(topic))
        {
          alert("Topics is already existing!")
          return;
        }

        this.topics.push(topic)
    }

    deleteTopic(topic : string) {
        console.log(topic)
        // find index of topic
        var idx = this.topics.indexOf(topic)
        this.topics.splice(idx,1)

    }

}
