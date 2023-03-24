import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ZezhaService {
    //public prodid="";
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

    ExistingDetail():Observable<any>{
        return this.http.get(`${this.baseUrl}`+'updateProfileExisting');
    }

    UpdateProfile(login : object):Observable<any>{
        return this.http.post(`${this.baseUrl}`+`updateProfile`,login);
    }

    uploadFile(file: File) {
        const formData = new FormData();
        formData.append('file', file);
    
        return this.http.post(`${this.baseUrl}`+`uploadResume`, formData);
      }
}
