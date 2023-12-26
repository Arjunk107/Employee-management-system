import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit {
  constructor(private data: EmployeesService, private http: HttpClient) { }
  formdata: any;
  EmpregForm: any = {
    id: '',
    empname: '',
    emprole: "",
    empdob: "",
    empgender: "",
    empphnumber: "",
    empemail: "",
    emppassword: ""
  }
  //Patterns for Validation of data 
  namePattern = "^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$";
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  passwordPtn = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  ngOnInit(): void {

  }

  //Posting new Employee stails to employee db
  addEmp(regform: any, EmpregForm: any) {


    this.formdata = JSON.stringify(EmpregForm)
    this.data.addemployee(this.formdata).subscribe(res => {
      Swal.fire("Successfully Registered");
      regform.reset();
    })


  }
}
