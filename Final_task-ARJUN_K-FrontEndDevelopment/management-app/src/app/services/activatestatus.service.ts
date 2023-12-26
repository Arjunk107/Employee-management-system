import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivatestatusService {

  constructor(private http: HttpClient) { }
  public setactive(id: any, data: any) {
    return this.http.put<any>("http://localhost:3000/activeemp/" + id, data)
  }
}
