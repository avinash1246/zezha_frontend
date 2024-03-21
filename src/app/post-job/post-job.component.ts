import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder,  FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostJob } from '../model/postJob';
import { ZezhaService } from '../service/zezha-service';
import { Fruit } from '../update-profile/update-profile.component';
import { bulkdatas } from '../utils/bulkdatas';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  constructor(private service:ZezhaService,private _snackBar: MatSnackBar,private router: Router,
    private http: HttpClient) { }

  editformlist!:any;
  value!:any;
  visible = true;
  selectable = true;
  removable = true;
  selectable1 = true;
  removable1 = true;
  addOnBlur = true;
  myClass!: bulkdatas;
  years!:any;
  salaries!:any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [];
  location:Location [] = [];
  editform1:PostJob=new PostJob();
  LoginType!:any;
  roles!:any;
  isLoading=true;

  ngOnInit(): void {
    if(sessionStorage.getItem("name")!=null){
      this.LoginType = null;
      this.myClass = new bulkdatas();
      this.myClass.doSomething();
      this.years = this.myClass.years;
      this.salaries = this.myClass.salary;
      this.roles = this.myClass.role;
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  form: FormGroup=new  FormGroup({
    jobHeadline: new  FormControl(''),
    employmentType: new  FormControl(''),
    jobDescription: new  FormControl(''),
    candidateProfile: new  FormControl(''),
    minYear: new  FormControl(''),
    maxyear: new  FormControl(''),
    minSalary: new  FormControl(''),
    maxSalary: new  FormControl(''),
    location: new  FormControl(''),
    industry: new  FormControl(''),
    functionalArea: new  FormControl(''),
    role: new  FormControl(''),
    eduQualification: new  FormControl(''),
    companyName: new  FormControl(''),
    companyProfile: new  FormControl(''),
    companyAddress: new  FormControl(''),
    vacancies : new  FormControl(''),
    organisationSize: new  FormControl(''),
    organisationType : new  FormControl('')
  })

  editForm(editform1:any){
    const data = this.fruits;
    const names = data.map((obj) => obj.name);
    const result = names.join(", ");
    const username: string | null = String(sessionStorage.getItem("username"));
    console.log(result);

    this.editform1= new PostJob();
    console.log(this.form.get('employmentType')?.value);
    this.editform1.jobHeadline=this.form.get('jobHeadline')?.value;
    this.editform1.employmentType=this.form.get('employmentType')?.value;
    this.editform1.jobDescription=this.form.get('jobDescription')?.value;
    this.editform1.candidateProfile=this.form.get('candidateProfile')?.value;
    this.editform1.minYear=this.form.get('minYear')?.value;
    this.editform1.maxyear=this.form.get('maxyear')?.value;
    this.editform1.minSalary=this.form.get('minSalary')?.value;
    this.editform1.maxSalary=this.form.get('maxSalary')?.value;
    this.editform1.location=this.form.get('location')?.value;
    this.editform1.industry=this.form.get('industry')?.value;
    this.editform1.functionalArea=this.form.get('functionalArea')?.value;
    this.editform1.eduQualification=this.form.get('eduQualification')?.value;
    this.editform1.companyName=this.form.get('companyName')?.value;
    this.editform1.companyProfile=this.form.get('companyProfile')?.value;
    this.editform1.companyAddress=this.form.get('companyAddress')?.value;
    this.editform1.vacancies = this.form.get('vacancies')?.value;
    this.editform1.organisationSize=this.form.get('organisationSize')?.value;
    this.editform1.organisationType = this.form.get('organisationType')?.value;
    this.editform1.keySkills = result;
    this.editform1.jobPostedBy =  username;
    console.log(this.editformlist);
    this.editformlist=this.editform1;
    sessionStorage.setItem('edititem',JSON.stringify(this.editformlist));
    this.editProduct();
  }

  editProduct(){
    this.value=sessionStorage.getItem('edititem');
    console.log(JSON.stringify(this.value))
    this.service.PostJob(JSON.parse(this.value)).subscribe(data=>{
      console.log(data);
      this.isLoading = false;
      console.log(data.message);
      if(data.message=="Job Posted"){
        this.router.navigate(['/dashboard']);
      }
    })
  }

  onFileSelected1(event: any) {
    var name:any ;
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    if(sessionStorage.getItem('username')!=null){
      name =sessionStorage.getItem('username');
      formData.append('myString', name);
    }
    this.uploadImage1(formData);
  }

  uploadImage1(formData: FormData) {
    this.http.post('http://localhost:8081/zezha/uploadLogoFile', formData).subscribe((data: any) => {
      console.log(data); // Handle the response from the server
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
