import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { MaterialModule } from '../modules/material.module';
import { ThousandSeparatorPipe } from '../pipes/thousand-separator.pipe';
import { ConcatenatePipePipe } from '../pipes/concatenate-pipe.pipe';
import { CoursesComponent } from './courses/courses.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StudentsComponent,
    ThousandSeparatorPipe,
    ConcatenatePipePipe,
    CoursesComponent,
    LoginPageComponent,
    RegisterPageComponent,
    StudentDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    StudentsComponent,
    StudentDetailComponent,
    CoursesComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ]
})
export class PagesModule { }
