import { Component } from '@angular/core';
import { AlldataService } from '../../services/alldata.service';

@Component({
  selector: 'app-emp-home',
  templateUrl: './emp-home.component.html',
  styleUrls: ['./emp-home.component.scss']
})
export class EmpHomeComponent {
  public showData: any[] = []

  pageval: boolean = false;

  //changing Component to Home
  inDash() {
    this.pageval = false;
    console.log("indash:" + this.pageval)
  }
  //changing component to Leave 
  inLeave() {
    this.pageval = true;
    console.log("inleave:" + this.pageval)
  }

}
