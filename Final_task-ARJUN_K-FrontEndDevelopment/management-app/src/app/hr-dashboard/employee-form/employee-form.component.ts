import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  constructor(private empdata: EmployeesService) { }

  user: any;
  // getting details for specific employee
  updateEmp(id: any) {
    this.empdata.getEmpinfo(id).subscribe(data => {
      this.user = data;
      console.log("user" + this.user)
    })
  }
}
