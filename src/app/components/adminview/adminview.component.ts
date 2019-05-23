import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../services/adminservice.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  users;
  incidents;
  peopleDetail:boolean;


  constructor(private adminService: AdminserviceService) { }

  ngOnInit() {
    this.peopleDetail = false;

    //fetch all users
    this.adminService.getUsers().subscribe(res =>{
      this.users = res;
      console.log(this.users);
    },
    err=>{
      console.log(err);
    }
    );

    //fetch all incidents
    this.adminService.getIncidents().subscribe(res =>{
      this.incidents = res;
      console.log(this.incidents);
    },
    err=>{
      console.log(err);
    }
    );

  }
  

}
