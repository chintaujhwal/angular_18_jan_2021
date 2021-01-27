import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './counter/counter.service';
import { Counter2Component } from './counter/counter2.component';
import { OneComponent } from './icc/one.component';
import { TwoComponent } from './icc/two.component';
import { OuterComponent } from './icc/outer.component';
import { InnerComponent } from './icc/inner.component';
import { FirstComponent } from './icc/first.component';
import { SecondComponent } from './icc/second.component';

@NgModule({
  declarations: [
        FirstComponent,
        SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FirstComponent]
})
export class AppModule { }
