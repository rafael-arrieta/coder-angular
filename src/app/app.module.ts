import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentsComponent } from './components/students/students.component';

import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorHelperComponent } from './components/error-helper/error-helper.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentsComponent,
    FormComponent,
    ErrorHelperComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
