import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url = "http://localhost:3000/employee";
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }
  constructor(private http: HttpClient) { }
  public getallempdata(): Observable<any[]> {
    console.log("employee database working")
    return this.http.get<any[]>(this.url);
  }
  public getEmpinfo(empid: any) {
    return this.http.get(this.url + "/" + empid);
  }
  public addemployee(empdata: any) {
    console.log("empdata: " + empdata)
    return this.http.post<any>(this.url, empdata, this.httpOptions)
  }
  public Updateemployee(id: any, updateddata: any) {
    return this.http.put<any>(this.url + "/" + id, updateddata);
  }
  public deleteemployee(id: any) {
    return this.http.delete<any>("http://localhost:3000/employee/" + id, this.httpOptions)
  }
  value = false
  public viewemp() {
    return this.value = true;
  }
}
