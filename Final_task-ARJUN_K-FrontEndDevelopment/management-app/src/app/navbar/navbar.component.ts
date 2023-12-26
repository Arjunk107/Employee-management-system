import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AlldataService } from '../services/alldata.service';
import { EmployeesService } from '../services/employees.service';
import { ActivatestatusService } from '../services/activatestatus.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  id: any;
  constructor(private router: Router, private login: LoginService, private route: ActivatedRoute, private data: AlldataService, private empsdata: EmployeesService, private status: ActivatestatusService) { }
  public name: any;
  flag: any;
  empstatus: any = {
    id: '',
    status: 'inactive'
  };

  //Logout function and changing emp status to inactive
  logOut() {
    this.login.logout();
    this.empstatus.id = this.id
    this.status.setactive(this.id, this.empstatus).subscribe(res => {
    })
    this.router.navigate([''])
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    //Setting Navbar for Employee
    if (this.id.length > 3) {
      this.empsdata.getEmpinfo(this.id).subscribe(res => {
        this.name = res;
        this.flag = 'emp'
      })
    }
    //Setting Navbar for HR
    else {
      this.data.gethrinfo(this.id).subscribe(res => {
        this.name = res;
        this.flag = 'hr'
      })
    }
  }
}
