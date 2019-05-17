import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LogService } from '../log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  serverErrorMessages: string;
  incidents;

  public showIncidentForm:boolean = false;
  public showCommentForm:boolean = false;
  public showComments:boolean = false;  

  constructor(private authService:AuthService,private router:Router,private logService:LogService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
    //  res=>{ 
    this.user = user;
      console.log(user);
      console.log(user.idToken);
      const userUpdate = {
        userId:user.id,
        name: user.name,
        email: user.email,
        authToken:user.authToken,
        idToken:user.idToken,
        photoUrl:user.photoUrl,          
      }
      //this.logService.setToken(res['token']);
    this.logService.login(userUpdate).subscribe(data => {
      //this.router.navigateByUrl('/home');

    });
  //  }
    /*err=>{
      this.serverErrorMessages = err.error.message; }*/
    });

    this.logService.getIncidents().subscribe(
      res => {
        this.incidents = res//['incident'];
        console.log(this.incidents)
      },
      err => { 
        console.log(err);
        
      }
    );
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

  }


  signOut(): void {
    this.authService.signOut();
  }
  toggleIncidentForm() {
    this.showIncidentForm = !this.showIncidentForm;
  }
  toggleCommentForm() {
    this.showCommentForm = !this.showCommentForm;
  }
  toggleComments() {
    this.showComments = !this.showComments;
  }
}
