import { Component, OnInit } from '@angular/core';
import { EmpleaveService } from 'src/app/services/empleave.service';

@Component({
  selector: 'app-leave-req',
  templateUrl: './leave-req.component.html',
  styleUrls: ['./leave-req.component.scss']
})
export class LeaveReqComponent implements OnInit {
  constructor(private data: EmpleaveService) { }
  leavedetails: any[] = []
  leaveUpdate: any = {
    id: "",
    empname: "",
    type: "",
    startdate: "",
    enddate: "",
    reason: "",
    status: ""
  }
  leaveUpdatedata: any;
  ngOnInit(): void {
    this.showdata();
  }

  //Getting alll Employee leave Request
  showdata() {
    this.data.getleavereq().subscribe(res => {
      this.leavedetails = res;
    })
  }

  //setting leave request status to 'approved'
  approve(id: any) {
    for (let i = 0; i < this.leavedetails.length; i++) {
      if (this.leavedetails[i].id == id) {
        this.leaveUpdate.empname = this.leavedetails[i].empname;
        this.leaveUpdate.type = this.leavedetails[i].type;
        this.leaveUpdate.startdate = this.leavedetails[i].startdate;
        this.leaveUpdate.enddate = this.leavedetails[i].enddate;
        this.leaveUpdate.reason = this.leavedetails[i].reason;
        this.leaveUpdate.status = 'approved';
      }
    }
    this.leaveUpdatedata = this.leaveUpdate

    //Updating Leave requesting
    this.data.statusUpdate(id, this.leaveUpdatedata).subscribe(res => {
      this.showdata()
    })
  }

  //setting leave request status to 'rejected'
  reject(id: any) {
    for (let i = 0; i < this.leavedetails.length; i++) {
      if (this.leavedetails[i].id == id) {
        this.leaveUpdate.empname = this.leavedetails[i].empname;
        this.leaveUpdate.type = this.leavedetails[i].type;
        this.leaveUpdate.startdate = this.leavedetails[i].startdate;
        this.leaveUpdate.enddate = this.leavedetails[i].enddate;
        this.leaveUpdate.reason = this.leavedetails[i].reason;
        this.leaveUpdate.status = 'rejected';
      }
    }
    this.leaveUpdatedata = this.leaveUpdate
    //Updating Leave requesting
    this.data.statusUpdate(id, this.leaveUpdatedata).subscribe(res => {
      this.showdata()
    })
  }
}
