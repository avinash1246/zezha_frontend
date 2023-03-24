import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Registration } from '../model/registration';
import { ZezhaService } from '../service/zezha-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ZezhaService,private router: Router,private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        "ZezhaTalent",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/ZezhaTalent SVG.svg")
      );
  }

  ngOnInit(): void {
  }

  form: FormGroup= new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
  // username: any;
  // password: any;
  editform1:Registration=new Registration();
  editformlist: any;
  value:any;
  errorMessage! : String;

  editForm(editform1:any){
    this.editform1= new Registration();
    this.editform1.username=this.Username!.value;
    this.editform1.password=this.Password!.value;
    this.editformlist=this.editform1;
    if(this.editform1.username&&this.editform1.password){
      sessionStorage.setItem('edititem',JSON.stringify(this.editformlist))
      this.editProduct();
    }
  }

  editProduct(){
    this.value=sessionStorage.getItem('edititem');
    console.log(JSON.stringify(this.value))
    this.service.Login(JSON.parse(this.value)).subscribe(data=>{
      console.log(data);
      console.log(data.message);
      if (data.message === 'Login Successful') {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Incorrect password. Please try again.';
      }
    })
  }

  get Username(){
    return this.form.get('username');
  }
  get Password(){
    return this.form.get('password');
  }

  selectedGender!: string;

  selectMale() {
    this.selectedGender = 'male';
  }

  selectFemale() {
    this.selectedGender = 'female';
  }

}
