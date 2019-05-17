
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
    comments:Comment;
    time:string;
}

export class Comment{
    email:string;
    comment:string;
    time:string;
}