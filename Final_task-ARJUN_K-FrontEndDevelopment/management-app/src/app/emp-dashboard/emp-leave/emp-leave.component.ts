import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { EmpleaveService } from 'src/app/services/empleave.service';
import { EmployeesService } from 'src/app/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emp-leave',
  templateUrl: './emp-leave.component.html',
  styleUrls: ['./emp-leave.component.scss']
})
export class EmpLeaveComponent implements OnInit {
  constructor(private data: EmployeesService, private route: ActivatedRoute, private empsdata: EmpleaveService) {

  }
  id: any;
  empdata: any[] = []
  formdata: any

  //initializing form data
  leaveform = {
    id: '',
    empname: '',
    leavetype: '',
    startdate: '',
    enddate: '',
    nodays: '',
    reason: '',
    status: ''
  }
  currentdate: any = new Date();
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.data.getallempdata().subscribe(res => {
      this.empdata = res;
    })

  }
  enddays: any;
  startdays: any;
  endday: any;
  startday: any;
  totaldays: any;

  //adding empname from server and adding to leavedetails db
  leavereg(myleave: any, leaveForm: any) {
    for (let i = 0; i < this.empdata.length; i++) {
      if (this.empdata[i].id == this.id) {
        this.leaveform.empname = this.empdata[i].empname;
        this.leaveform.status = 'pending';
      }
    }
    // calculating total days

    this.enddays = this.leaveform.enddate.slice(-2)
    this.startdays = this.leaveform.startdate.slice(-2)
    this.endday = parseInt(this.enddays)
    this.startday = parseInt(this.startdays)
    if (this.endday == this.startday) {
      this.totaldays = 1
    } else {
      this.totaldays = this.endday - this.startday;

    }
    this.leaveform.nodays = this.totaldays;

    this.empsdata.leavereq(leaveForm).subscribe(res => {
      console.log(res);
      Swal.fire("Successfully Registered");
      myleave.reset();
    })


  }

}
