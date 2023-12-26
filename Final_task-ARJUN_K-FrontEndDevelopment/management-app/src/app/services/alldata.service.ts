import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlldataService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }
  constructor(private http: HttpClient) { }

  public getallhrdata(): Observable<any[]> {
    console.log("Hr database working")
    return this.http.get<any[]>("http://localhost:3000/hr");
  }

  public getdoughchartinfo(): Observable<any> {
    return this.http.get("http://localhost:3000/activeemp");
  }
  public gethrinfo(hrid: any) {
    return this.http.get("http://localhost:3000/hr/" + hrid);
  }

}
