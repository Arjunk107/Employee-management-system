import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HrHomeComponent } from './hr-dashboard/hr-home/hr-home.component';
import { LoginGuard } from './Guard/login.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmpLeaveComponent } from './emp-dashboard/emp-leave/emp-leave.component';
import { EmpDashComponent } from './emp-dashboard/emp-dash/emp-dash.component';
import { EmpHomeComponent } from './emp-dashboard/emp-home/emp-home.component';
import { AddEmployeesComponent } from './hr-dashboard/add-employees/add-employees.component';
import { ViewEmployeesComponent } from './hr-dashboard/view-employees/view-employees.component';
import { EditProfileComponent } from './emp-dashboard/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "emphome/:id",
    canActivate: [LoginGuard],
    component: EmpHomeComponent,
    children: [
      {
        path: "dash",
        component: EmpDashComponent
      },
      {
        path: "leave",
        component: EmpLeaveComponent
      }
    ]
  },
  {
    path: "editprofile/:id",
    component: EditProfileComponent
  },
  {
    path: "hrhome/:id",
    canActivate: [LoginGuard],
    component: HrHomeComponent,
    children: [
      {
        path: 'addemplys',
        component: AddEmployeesComponent
      },
      {
        path: 'viewemplys',
        component: ViewEmployeesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
