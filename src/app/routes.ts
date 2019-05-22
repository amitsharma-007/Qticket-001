import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import { IncidentComponent } from '../app/components/incident/incident.component'
import { CommentComponent } from '../app/components/comment/comment.component';
import { AdminviewComponent } from '../app/components/adminview/adminview.component';

export const appRoutes: Routes = [
    
    {
        path: 'login', component:LoginComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'home', component:HomeComponent

    },
    {
        path: 'incident', component:IncidentComponent
    },{
        path: 'incident', component:IncidentComponent
    },
    {
        path: 'comment', component:CommentComponent
    },
    {
        path: 'adminview', component:AdminviewComponent
    }
    
];