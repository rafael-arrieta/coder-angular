import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogStudentComponent } from './components/dialog-student/dialog-student.component';
import { ErrorHelperComponent } from './components/error-helper/error-helper.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../modules/material.module';
import { RouterModule} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    DialogStudentComponent,
    ErrorHelperComponent,
    NavbarComponent,
    ToolbarComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    DialogStudentComponent,
    ErrorHelperComponent,
    NavbarComponent,
    ToolbarComponent,
  ],
})
export class SharedModule {}
