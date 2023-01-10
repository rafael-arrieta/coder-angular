import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { StudentsComponent } from './pages/students/students.component';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './pages/courses/courses.component';

import { AuthComponent } from './layouts/auth/auth.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';

const routes: Routes = [
  {
    // Dashboard layout
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'students/:id',
        component: StudentDetailComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      
    ],
  },
  {
    // Auth layout
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
      // {
      //   path: '**',
      //   redirectTo: 'login',
      // },
      // {
      //   path: 'register',
      //   component: RegisterPageComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
