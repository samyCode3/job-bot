export interface AccountAttributeInterface {
    id?: number,
    username :  string,
    email: string,
    fullname : string,
    password  : string,
    createdAt?: Date,
    updatedAt?: Date ,
    is_email_verified: Boolean,
    role : "USER" | "EMPLOYER" | "ADMIN",
    job_type  : "JOB SEARCH" | "EMPLOYING"
   
}

export interface JobAttributeInterface  {
     id? : number,
     user_id: number,
     job_title : string,
     description : string,
     address : string,
     phone_num: string,
     skills : object,
     resume: string;
     position: string,
     country: string,
     postal_code : string
}

export interface ProfileInfo {

}