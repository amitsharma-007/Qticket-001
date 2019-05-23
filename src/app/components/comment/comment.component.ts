import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShowSection,Incident, Comment, PostComment } from '../../services/appModels';

import { CommentService } from '../../services/comment.service';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() incident:Incident;
  @Output('pushComment') pushComment= new EventEmitter<Object>();
  showSucessMessage: boolean;
  serverErrorMessages: string;
  hideme:ShowSection[];
  _id:string;
  postComment:PostComment;
  constructor( private commentService: CommentService, private incidentService:IncidentService) { }
  hide:boolean;
  hideCommentForm:boolean;
  
  ngOnInit() {
    this.hide = false;
    this.hideCommentForm = false;
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
    this.hideCommentForm = !this.hideCommentForm;
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

}
