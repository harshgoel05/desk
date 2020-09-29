import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';
import { CreatequizComponent } from './components/createquiz/createquiz.component';
import { StudentComponent } from './components/student/student.component';
import { StudentHomeComponent } from './components/StudentComponents/student-home/student-home.component';
const routes: Routes = [{ path: '', component: LazyComponent },{path:"createtest",component:CreatequizComponent},{path:"test",component:StudentComponent},{path:"studentdash",component:StudentHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
