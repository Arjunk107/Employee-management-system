import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ActivatestatusService } from '../services/activatestatus.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: any = {
    email: '',
    password: ''
  }
  flag = 0;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  emplogindata: any[] = [];
  hrlogindata: any[] = [];
  loginid: any;
  empstatus: any = {
    id: '',
    status: 'active'
  };
  constructor(private logindata: LoginService, private router: Router, private status: ActivatestatusService) {

    //Getting all Employee Details
    logindata.getallemps().subscribe(res => {
      this.emplogindata = res;
    })
    //Getting all HR Details
    logindata.getallhr().subscribe(Response => {
      this.hrlogindata = Response;
    })
  }
  //submitting login form
  onSubmit(form: any, formdata: any) {
    //checking whether the user is Employee
    for (let i = 0; i < this.emplogindata.length; i++) {
      if (formdata.email === this.emplogindata[i].empemail && formdata.password === this.emplogindata[i].emppassword) {
        this.flag = 1;
        this.loginid = this.emplogindata[i].id
      }
    }
    //checking whether the user is HR
    for (let i = 0; i < this.hrlogindata.length; i++) {
      if (formdata.email === this.hrlogindata[i].hremail && formdata.password === this.hrlogindata[i].hrpassword) {
        this.loginid = this.hrlogindata[i].id
        this.flag = 2
      }
    }
    //Navigating to Employee Dashboard
    if (this.flag == 1) {
      Swal.fire("Successfully Logged in");
      console.log(this.flag)
      this.logindata.login();
      this.empstatus.id = this.logindata
      this.status.setactive(this.loginid, this.empstatus).subscribe(res => {
      })
      this.router.navigate(['emphome/' + this.loginid]);
    }
    //Navigating to HR Dashboard
    else if (this.flag == 2) {
      Swal.fire("Successfully Logged in");
      console.log(this.flag);
      this.logindata.login();
      this.router.navigate(['hrhome/' + this.loginid]);
    }
    else {
      Swal.fire("Wrong Email or password");
      this.logindata.logout();
    }
  }
}
