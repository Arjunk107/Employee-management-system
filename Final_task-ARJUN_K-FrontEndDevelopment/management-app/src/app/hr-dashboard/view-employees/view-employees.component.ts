import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.scss']
})
export class ViewEmployeesComponent implements OnInit {
  @ViewChild('empupdateform') form!: NgForm;
  userdata: any = {
    empname: '',
    empdob: '',
    empgender: '',
    empphnumber: '',
    empemail: ''
  }

  constructor(private empdata: EmployeesService) { }
  empdetails: any[] = [];
  display = "none";
  ngOnInit(): void {
    this.getempdetails()
  }

  //getting all employee details
  getempdetails() {
    this.empdata.getallempdata().subscribe(res => {
      this.empdetails = res;
      console.log("hiiiiii")
    });
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }


  //async await for delete button
  async onclickdel() {
    const results = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return new Promise((resolve, reject) => {
        if (result.isConfirmed) {
          resolve(Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }))
        }
        else {
          reject('cancelled')
        }
      })

    });

  }
  newvalues: any;
  empid: any;

  //for getting datas of form
  updateForm(id: any) {
    this.empid = id;
    this.newvalues = this.empdetails.find((p) => { return p.id == id })
    this.form.setValue({
      empname: this.newvalues.empname,
      empdob: this.newvalues.empdob,
      empgender: this.newvalues.empgender,
      empphnumber: this.newvalues.empphnumber,
      empemail: this.newvalues.empemail
    })
  }


  Updatedform(valform: any, formdatas: any) {
    this.empdata.Updateemployee(this.empid, formdatas).subscribe(res => {
      Swal.fire("Successfully Updated");
      this.onCloseHandled()
      this.getempdetails()
    })
  }

  //delete function 
  deleteEmp(id: any) {
    this.empdata.deleteemployee(id).subscribe(data => {
      this.empdata.getallempdata().subscribe(res => {
        this.empdetails = res;
      })
    });

  }
  async deleteemply(id: any) {
    try {
      const response = await this.onclickdel()
      const secresponse = await this.deleteEmp(id)
    } catch (error) {
      console.error(error)
    }
  }
}