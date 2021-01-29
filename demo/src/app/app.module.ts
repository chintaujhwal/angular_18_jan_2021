import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './forms/register.component';
import { RLoginComponent } from './forms/rlogin.component';

@NgModule({
  declarations: [
    RLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [RLoginComponent]
})
export class AppModule { }
