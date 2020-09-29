import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultyComponent } from './faculty/faculty.component';
import { LandingComponent } from './components/landing/landing.component';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TeachersArenaComponent } from './components/teacher-dashboard-elements/teachers-arena/teachers-arena.component';
import { TeacherClassesComponent } from './components/teacher-dashboard-elements/teacher-classes/teacher-classes.component';
import { TeachersClassDetailsComponent } from './components/teacher-dashboard-elements/teachers-class-details/teachers-class-details.component';
import { TeacherResponsesComponent } from './components/teacher-dashboard-elements/teacher-responses/teacher-responses.component';
import { StudentHomeComponent } from './lazy/components/StudentComponents/student-home/student-home.component';
import { StudentTestDetailsComponent } from './lazy/components/StudentComponents/student-test-details/student-test-details.component';
import { TestStartComponent } from './lazy/components/StudentComponents/test-start/test-start.component';

const routes: Routes = [
  { path: 'faculty', component: FacultyComponent },
  { path: '', component: LandingComponent},
  { path: 'teacherLogin', component: TeacherLoginComponent},
  { path: 'studentlogin', component: StudentLoginComponent},
  { path: 'reg', component: RegistrationComponent},
  { path: 'teacherDashboard', component: TeachersArenaComponent},
  { path: 'teacherClasses', component: TeacherClassesComponent},
  { path: 'teacherClassDetails', component: TeachersClassDetailsComponent},
  { path: 'responses', component: TeacherResponsesComponent},
  { path: 'studentDashboard', component: StudentHomeComponent },
  { path: 'studentClasses', component: StudentTestDetailsComponent},
  { path: 'testStart', component: TestStartComponent},
  { path:'lazy',loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
