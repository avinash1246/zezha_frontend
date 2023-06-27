import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ZezhaService {
    private baseUrl = 'http://localhost:8081/zezha/';

    constructor(private http:HttpClient) { }

    Registration(registration : object):Observable<any>{
        return this.http.post(`${this.baseUrl}`+`registration`,registration);
    }

    Login(login : object):Observable<any>{
        return this.http.post(`${this.baseUrl}`+`login`,login);
    }

    displayLegends():Observable<any>{
      return this.http.get(`${this.baseUrl}`+'displayLegends');
    }

    Logout():Observable<any>{
        return this.http.get(`${this.baseUrl}`+'logout');
    }

    ExistingDetail(login : object):Observable<any>{
        return this.http.post(`${this.baseUrl}`+`updateProfileExisting`,login);
    }

    UpdateProfile(login : object):Observable<any>{
        return this.http.post(`${this.baseUrl}`+`updateProfile`,login);
    }

    UpdateProfileLast(login : object):Observable<any>{
        return this.http.post(`${this.baseUrl}`+`updateProfileLast`,login);
    }

    uploadFile(file: File) {
        const formData = new FormData();
        formData.append('file', file);
    
        return this.http.post(`${this.baseUrl}`+`uploadResume`, formData);
    }

    getMoreDetails(mobileNo: string): Observable<any> {
        return this.http.get(`${this.baseUrl}moreDetails?mobileNo=${mobileNo}`);
    }

    getMoreJobDetails(id: string): Observable<any> {
        return this.http.get(`${this.baseUrl}moreJobDetails?id=${id}`);
    }

    PostJob(login : object):Observable<any>{
        return this.http.post(`${this.baseUrl}`+`postJob`,login);
    }

    OtpVerification(login : object):Observable<any>{
        return this.http.post(`${this.baseUrl}`+`otpVerification`,login);
    }

    EmailVerification(login : object):Observable<any>{
        return this.http.post(`${this.baseUrl}`+`emailVerification`,login);
    }

    displayJobs():Observable<any>{
        return this.http.get(`${this.baseUrl}`+'displayJobs');
    }

    logo():Observable<any>{
        return this.http.get(`${this.baseUrl}`+'downloadImage/tbAHWTw4.jpeg');
    }

    ApplyJob(login : object):Observable<any>{
        return this.http.post(`${this.baseUrl}`+`applyJob`,login);
    }

    DisplayJobsOnCompany(login : object):Observable<any>{
        return this.http.post(`${this.baseUrl}`+`displayJobsOnCompanies`,login);
    }

    displayCompanies():Observable<any>{
        return this.http.get(`${this.baseUrl}`+'displayCompanies');
    }

    ExistingData(login : object):Observable<any>{
        return this.http.post(`${this.baseUrl}`+`updateProfileExistingData`,login);
    }

    CheckDataForResume(login : object):Observable<any>{
        return this.http.post(`${this.baseUrl}`+`checkDataForResume`,login);
    }

    CheckMobileNoExist(mobileNo: string): Observable<any> {
        return this.http.get(`${this.baseUrl}checkMobileNoExist?mobileNo=${mobileNo}`);
    }

    CheckEmailExist(mobileNo: string): Observable<any> {
        return this.http.get(`${this.baseUrl}checkEmailExist?email=${mobileNo}`);
    }

}
