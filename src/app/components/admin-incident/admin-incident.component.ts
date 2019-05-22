import { Component, OnInit, Input } from '@angular/core';
import { ShowSection,Incident, Comment, PostComment, User } from '../../services/appModels';

@Component({
  selector: 'app-admin-incident',
  templateUrl: './admin-incident.component.html',
  styleUrls: ['./admin-incident.component.css']
})
export class AdminIncidentComponent implements OnInit {
  @Input() incident:Incident;
  constructor() { }

  ngOnInit() {
  }

}
