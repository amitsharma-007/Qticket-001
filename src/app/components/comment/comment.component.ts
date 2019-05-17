import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }
  onSubmitComment(form: NgForm){
    console.log(form);
    this.commentService.addComment(form.value).subscribe(
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
          this.serverErrorMessages = 'There is an error while posting the comment';
      }
    );
  }
  resetForm(form: NgForm) {
    this.commentService.commentSelect = {
      email:'',
      comment:'',
      time : '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
