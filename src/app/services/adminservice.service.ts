import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor( private http: HttpClient ) { }

  getUsers() {
    return this.http.get(environment.users+'/getallusers');
  }
  
  getIncidents() {
    return this.http.get(environment.incidents+'/getallincidents');
  }
}
