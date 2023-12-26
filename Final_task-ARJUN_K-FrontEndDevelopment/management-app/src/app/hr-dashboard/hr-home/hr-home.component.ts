import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-hr-home',
  templateUrl: './hr-home.component.html',
  styleUrls: ['./hr-home.component.scss']
})
export class HrHomeComponent {
  constructor(private data: EmployeesService) { }
  currentpage = 'hrhome'
  //for navigating to add employee component
  addemppage() {
    this.currentpage = 'addemppage'
  }
  //for navigating to view employee component
  viewemppage() {
    this.currentpage = 'viewemppage'
    this.data.viewemp()
  }
  //for naviagating to home component
  home() {
    this.currentpage = 'hrhome'
  }
}
