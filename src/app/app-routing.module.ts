import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




import { GoalComponent } from './goal/goal.component'
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component'
import { NotFoundComponent } from  './not-found/not-found.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';




const routes: Routes = [
  {path: 'goals',component:GoalComponent},
  {path: 'about',component:AboutComponent},
  {path: 'goal/:id',component:GoalDetailsComponent},
  {path:'',redirectTo:"/goals",pathMatch:"full"},
  {path:'**', component:NotFoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
