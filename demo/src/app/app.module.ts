import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './forms/register.component';
import { RLoginComponent } from './forms/rlogin.component';
import { BooksComponent } from './http/books/books.component';
import { WebBooksComponent } from './http/webbooks/webbooks.component';


@NgModule({
  declarations: [
     WebBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [WebBooksComponent]
})
export class AppModule { }
