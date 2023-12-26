import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleaveService {
  url = "http://localhost:3000/employeeLeave";
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }
  constructor(private http: HttpClient) { }
  public leavereq(leavedata: any) {
    return this.http.post<any[]>(this.url, leavedata, this.httpOptions);
  }
  public getleavereq() {
    return this.http.get<any[]>(this.url);
  }
  public statusUpdate(id: any, data: any) {
    return this.http.put<any>(this.url + "/" + id, data)
  }
}
