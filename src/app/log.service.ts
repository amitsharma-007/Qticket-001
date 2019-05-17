import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

  login(user) {
    console.log(user);
    return this.http.post('http://localhost:8080/users/register',user);
  }

  getIncidents() {
    return this.http.get('http://localhost:8080/incidents/getallincidents');
  }


}
