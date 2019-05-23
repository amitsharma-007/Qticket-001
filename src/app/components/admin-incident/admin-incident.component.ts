import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShowSection,Incident, Comment, PostComment, User, UpdateIncident } from '../../services/appModels';

import { NgForm } from '@angular/forms';

import { CommentService } from '../../services/comment.service';
import { IncidentService } from '../../services/incident.service';



@Component({
  selector: 'app-admin-incident',
  templateUrl: './admin-incident.component.html',
  styleUrls: ['./admin-incident.component.css']
})
export class AdminIncidentComponent implements OnInit {
  @Input() incident:Incident;
  incidentDetail:boolean;
  showComments:boolean;
  showCommentForm:boolean;
  hide:boolean;

  @Output('pushComment') pushComment= new EventEmitter<Object>();
  showSucessMessage: boolean;
  serverErrorMessages: string;
  hideme:ShowSection[];
  _id:string;
  postComment:PostComment;


  constructor(private commentService: CommentService, private incidentService:IncidentService) { }

  ngOnInit() {
    this.hide = false;
    this.incidentDetail = false;
    this.showComments = false;
    this.showCommentForm = false;
  }

  onSubmitComment(form: NgForm){
    console.log(form.value);
    this._id = form.value._id;
    let postComment = {
      email:form.value.email,
      comment:form.value.comment,
      time:new Date().toLocaleDateString()
    }
    console.log(postComment)
    this.incidentService.createComment(postComment, this._id).subscribe(
      res => {
        this.showSucessMessage = true;
        this.pushComment.emit(postComment);
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'There is an error while posting the comment';
      }
    );
    this.showCommentForm = !this.showCommentForm;
  }
  resetForm(form: NgForm) {
    this.commentService.commentSelect = {
      id:'',
      email:'',
      comment:'',
      time : '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }


//Function for editing the incident


  onSubmitEditIncident(form: NgForm){
    console.log(form.value);
    this._id = form.value._id;
    let editIncident = {
      submittedBy:form.value.submittedBy,
      submittedTo:form.value.submittedTo,
      submittedFrom:form.value.submittedFrom,
      priority:form.value.priority,
      currentStatus:form.value.currentStatus,
      assignedTo:form.value.assignedTo,
      issue:form.value.issue,
      editedAt:new Date().toLocaleDateString()
    }
    console.log(editIncident)
    this.incidentService.editIncident(editIncident, this._id).subscribe(
      res => {
        this.showSucessMessage = true;
        // this.pushComment.emit(editIncident);
        console.log(res);
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'There is an error while editing the incident';
      }
    );
    this.showCommentForm = !this.showCommentForm;
  }
  resetEditIncident(form: NgForm) {
    this.incidentService.editIncidentSelect = {
    submittedBy:'',
    submittedTo:'',
    submittedFrom:'',
    priority:'',
    currentStatus:'',
    assignedTo:'',
    issue:'',
    editedAt:''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
