import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpleaveService } from 'src/app/services/empleave.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-emp-dash',
  templateUrl: './emp-dash.component.html',
  styleUrls: ['./emp-dash.component.scss']
})
export class EmpDashComponent implements OnInit {
  constructor(private empleavedata: EmpleaveService, private empdata: EmployeesService, private route: ActivatedRoute) { }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  empleavedetails: any[] = []
  empdetails: any;
  currentempdetail: any[] = []
  id: any;
  ngOnInit(): void {
    this.getempdetails();
    this.getempleavedetails();
  }

  //Getting the Employee details using their id
  getempdetails() {
    this.id = this.route.snapshot.params['id'];
    this.empdata.getEmpinfo(this.id).subscribe(res => {
      this.empdetails = res;
      console.log(res)

    })
    console.log(this.empdetails)
  }

  //Taking all leave deatils data from Server 
  getempleavedetails() {
    this.empleavedata.getleavereq().subscribe(res => {
      this.empleavedetails = res
    })

    //taking the leave details of Employee who logged in
    for (let i = 0; i < this.empleavedetails.length; i++) {
      console.log("cemp" + this.currentempdetail)
      console.log("" + this.empleavedetails[i])
      if (this.empleavedetails[i].empname == this.empdetails.empname) {

        this.currentempdetail = this.empleavedetails[i];

      }
    }
  }
}
