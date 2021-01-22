import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { InterestComponent } from './interest/interest.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
       HelloComponent,
       InterestComponent,
       CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CourseComponent]
})
export class AppModule { }
