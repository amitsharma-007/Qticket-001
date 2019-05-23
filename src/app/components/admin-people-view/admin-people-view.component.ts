import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ShowSection,Incident, Comment, PostComment, User } from '../../services/appModels';


@Component({
  selector: 'app-admin-people-view',
  templateUrl: './admin-people-view.component.html',
  styleUrls: ['./admin-people-view.component.css']
})
export class AdminPeopleViewComponent implements OnInit {

  userDetail:boolean;
  
  @Input() user:User;

  constructor() { }

  ngOnInit() {
    this.userDetail = false;
  }

}
