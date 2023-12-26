import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  public getallemps(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/employee");
  }
  public getallhr(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/hr");
  }
  isLogin: boolean = false;
  login() {
    this.isLogin = true;
  }
  logout() {
    this.isLogin = false;
  }
  isAuthenticated() {
    return this.isLogin;
  }
}
