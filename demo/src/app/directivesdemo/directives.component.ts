import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {
  code : number = 2;
  isBig = true;
  styles = {"color" : 'green', "font-size" : '30pt'};
  topics : string[] = ['Templates','Directives','Form','Ajax','Routing','Services']
  constructor() { }
 

}
