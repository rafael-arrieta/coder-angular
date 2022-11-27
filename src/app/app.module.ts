import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentsComponent } from './components/students/students.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardModuleComponent } from './components/card-module/card-module.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentsComponent,
    FooterComponent,
    CardModuleComponent,
    ProgressBarComponent,
    SectionTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
