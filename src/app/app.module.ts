import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentsComponent } from './components/students/students.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorHelperComponent } from './components/error-helper/error-helper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { DialogStudentComponent } from './components/dialog-student/dialog-student.component';
import { ConcatenatePipePipe } from './pipes/concatenate-pipe.pipe';
import { ThousandSeparatorPipe } from './pipes/thousand-separator.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentsComponent,
    FormComponent,
    ErrorHelperComponent,
    DialogStudentComponent,
    ConcatenatePipePipe,
    ThousandSeparatorPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
