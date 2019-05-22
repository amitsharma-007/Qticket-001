
export class User{
    userId:string;
    name:string;
    email:string;
    authToken:string;
    idToken:string;
    username:string;
    password:string;
    about:string;
    userAdminStatus:string;
    userDepartment:string;
    time:Date;

}



export class Incident{
    submittedBy:string;
    submittedTo:string;
    submittedFrom:string;
    priority:string;
    currentStatus:string;
    assignedTo:string;
    issue:string;
    editedAt:string;
    comments:PostComment;
    time:string;
}

export class Comment{
    id:string;
    email:string;
    comment:string;
    time:string;
}

export class PostComment{
    email:string;
    comment:string;
    time:string;
}

export class ShowSection{
    state:boolean;
}