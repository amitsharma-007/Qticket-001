import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider  } from 'angularx-social-login';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { IncidentComponent } from './components/incident/incident.component';
import { CommentComponent } from './components/comment/comment.component';
import { AdminviewComponent } from './components/adminview/adminview.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminPeopleViewComponent } from './components/admin-people-view/admin-people-view.component';
import { AdminIncidentComponent } from './components/admin-incident/admin-incident.component';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IncidentComponent,
    CommentComponent,
    AdminviewComponent,
    AdminDashboardComponent,
    AdminPeopleViewComponent,
    AdminIncidentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
