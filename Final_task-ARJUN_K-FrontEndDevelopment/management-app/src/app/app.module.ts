import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmpHomeComponent } from './emp-dashboard/emp-home/emp-home.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HrHomeComponent } from './hr-dashboard/hr-home/hr-home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmpLeaveComponent } from './emp-dashboard/emp-leave/emp-leave.component';
import { EmpDashComponent } from './emp-dashboard/emp-dash/emp-dash.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AddEmployeesComponent } from './hr-dashboard/add-employees/add-employees.component';
import { ViewEmployeesComponent } from './hr-dashboard/view-employees/view-employees.component';
import { EmployeeFormComponent } from './hr-dashboard/employee-form/employee-form.component';
import { LeaveReqComponent } from './hr-dashboard/leave-req/leave-req.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { EditProfileComponent } from './emp-dashboard/edit-profile/edit-profile.component';
import { BarchartComponent } from './charts/barchart/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmpHomeComponent,
    LoginComponent,
    HrHomeComponent,
    PagenotfoundComponent,
    EmpLeaveComponent,
    EmpDashComponent,
    AddEmployeesComponent,
    ViewEmployeesComponent,
    EmployeeFormComponent,
    LeaveReqComponent,
    DoughnutChartComponent,
    EditProfileComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
