import { Injectable } from '@angular/core';
import { Comment } from './appModels';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentSelect :Comment = {
    id:'',
    email:'',
    comment:'',
    time : new Date().toLocaleDateString()
  };

  constructor(private http: HttpClient) { }

  addComment(comment:Comment){
    return this.http.post(environment.incidents+'/createcomment',comment);
    }
}
