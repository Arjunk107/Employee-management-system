import { Component, OnInit, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  constructor(private data: EmployeesService, private route: ActivatedRoute) { }
  @ViewChildren('empprofileupdateform') dataform!: NgForm;
  public empdetails: any;
  EmpUpdateForm: any = {
    empname: '',
    empdob: "",
    empgender: "",
    empphnumber: "",
    empemail: "",
    emppasword: ''
  }
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getempdata(this.id);
  }
  getempdata(id: any) {
    this.data.getEmpinfo(id).subscribe(res => {
      console.log(res);
      this.empdetails = res;
      this.currentval = JSON.stringify(this.empdetails)
      console.log("hi" + this.currentval)
      this.updateemp(id, res);
    })
  }
  currentval: any;
  updateemp(id: any, empdetail: any) {
    this.dataform.setValue({
      empname: empdetail.empname,
    })
  }
  updateEmp(upform: any, updatedData: any) {
    this.data.Updateemployee(this.id, updatedData).subscribe(res => {
      Swal.fire("Successfully Updated");

    })
  }
}
