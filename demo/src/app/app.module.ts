import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddBookComponent } from './http/add-book/add-book.component';
import { CountriesComponent } from './http/countries/countries.component';
import { WebBooks2Component } from './http/webbooks/webbooks2.component.';


@NgModule({
  declarations: [
      CountriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CountriesComponent]
})
export class AppModule { }
