import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor( private incidentService: IncidentService) { }

  ngOnInit() {
  }


  onSubmitIncident(form: NgForm){
    console.log(form.value);
    this.incidentService.addIncident(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'There is an error while posting the incident';
      }
    );
  }

  resetForm(form: NgForm) {
    this.incidentService.incidentSelect = {
      submittedBy:'',
      submittedTo:'',
      submittedFrom:'',
      priority:'',
      currentStatus:'',
      assignedTo:'',
      issue:'',
      editedAt:'',
      comments:{
        email:'',
        comment:'',
        time:''
      },
      time : ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
  

}
