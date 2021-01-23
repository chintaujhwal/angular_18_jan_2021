import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DirectivesComponent } from './directivesdemo/directives.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    DirectivesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CourseComponent]
})
export class AppModule { }
