import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Registration } from '../model/registration';
import { ZezhaService } from '../service/zezha-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isDisabled = true;
  selectedType: string = '';
  editform1:Registration=new Registration();
  editformlist: any;
  value: any;
  json : any;
  showOtp:any;
  message:any;
  emailVerified:any;
  showSumbit:any;
  textboxValue : any;
  emailVerification : any;
  formSubmitted = false;
  isLoading=true;

  handleSelectionChange(event: any) {
    if (event.value === 'legends') {
      this.selectedType ='legends'
    }else{
      this.selectedType ='heads'
    }
  }


  constructor(private service:ZezhaService, private _snackBar: MatSnackBar,private router: Router,
    private dialog: MatDialog) { }
  ngOnInit(): void {
    this.isLoading = false;
  }

  form:FormGroup=new FormGroup({
    loginType: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mobileNo: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl(''),
    gender: new FormControl(''),
    workStatus: new FormControl(''),
    password: new FormControl('',[Validators.required, Validators.pattern('((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15})')]),
    confirmPassword: new FormControl(''),
    otp: new FormControl('')
  })

  editForm(editform1:any){
    this.formSubmitted = true;
    this.editform1= new Registration();
    this.editform1.loginType=this.LoginType!.value;
    this.editform1.firstName=this.FirstName!.value;
    this.editform1.lastName=this.LastName!.value;
    this.editform1.mobileNo=this.MobileNo!.value;
    this.editform1.email=this.Email!.value;
    this.editform1.dob=this.Dob!.value;
    this.editform1.gender=this.Gender!.value;
    this.editform1.workStatus=this.WorkStatus!.value;
    this.editform1.password=this.Password!.value;
    this.editform1.confirmPassword=this.ConfirmPassword!.value;
    console.log(this.selectedType)
    this.editformlist=this.editform1;
    if(this.selectedType=="heads"){
      if(this.editform1.loginType&&this.editform1.firstName&&this.editform1.lastName&&this.editform1.mobileNo
        &&this.editform1.email&&this.editform1.password&&this.editform1.confirmPassword){
          sessionStorage.setItem('edititem',JSON.stringify(this.editformlist))
          this.editProduct();
      }
    }else{
      if(this.editform1.loginType&&this.editform1.firstName&&this.editform1.lastName&&this.editform1.mobileNo
        &&this.editform1.email&&this.editform1.dob&&this.editform1.gender&&this.editform1.workStatus
        &&this.editform1.password&&this.editform1.confirmPassword){
          sessionStorage.setItem('edititem',JSON.stringify(this.editformlist));
          this.editProduct();
      }
    }

  }

  editProduct(){
    this.value=sessionStorage.getItem('edititem');
    console.log(JSON.stringify(this.value))
    this.service.Registration(JSON.parse(this.value)).subscribe(data=>{
      console.log(data);
      this.isLoading = false;
      console.log(data.message);
      if(data.message=="Registration Successful"){
        this.router.navigate(['/login']);
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 3000
    });
  }

  mobileNoCheck(){
    console.log( this.form.get('mobileNo')?.value);
    this.value=sessionStorage.getItem('edititem');
    console.log(JSON.stringify(this.value))
    console.log(this.value)
    if (this.MobileNo!.value && this.json.mobileNo.length === 10) {
      const mobileNoExist = {
        mobileNo: this.json.mobileNo
      };
      // this.service.CheckEmailExist(mobileNoExist).subscribe(data1=>{
      //   alert('hii')
      // });
    }
  }

  onChangeEvent(event: any){
    console.log(event.target.value);
    var mobileNo = event.target.value;
    this.service.CheckMobileNoExist(mobileNo).subscribe((data) => {
      console.log(data);
      this.isLoading = false;
      if(data.message == 'Mobile No Exist'){
        this.textboxValue = "Mobile No Already Exist, Please Login and Continue";
      }else if(data.message == 'Please Enter valid Mobile No'){
        this.textboxValue = "Please Enter valid Mobile No";
      }else{
        this.textboxValue = "";
      }
    });

  }

  myClickFunction(){
    this.isLoading = true;
    const emailOtp = {
      email: this.Email?.value,
      otp : this.Otp?.value
    };
    console.log(emailOtp)
    this.service.OtpVerification(emailOtp).subscribe(data1=>{
      console.log(data1);
      this.isLoading = false;
      this.isLoading = false;
      if(data1.message == 'Email Verified'){
        this.showSumbit = data1.message
      }
    });
  }

  myClickFunction1(){
    this.isLoading = true;
    const email = {
      email: this.Email?.value
    };
    this.service.CheckEmailExist(this.Email?.value).subscribe((data1) => {
      console.log(data1);
      if(data1.message == 'New Email Id'){
        sessionStorage.setItem('email', this.Email?.value);
        this.service.EmailVerification(email).subscribe(data=>{
          console.log(data);
          this.isLoading = false;
          if(data.message == 'Sent Successfully'){
            this.showOtp = data.message;
          }
        });
      }else{
        this.isLoading = false;
        this.emailVerification = "Email Id Already Exist";
      }
    });

  }

  // openDialog() {
  //   this.dialog.open(DialogBoxComponent);
  //   const button = document.getElementById("myButton");
  //   if (button) {
  //     button.style.visibility = "hidden";
  //   }
  //   this.showOtp="hii";
  //   const email = {
  //     email: this.Email?.value
  //   };
  //   sessionStorage.setItem('email', this.Email?.value);
  //   this.service.EmailVerification(email).subscribe(data=>{
  //     console.log(data);
  //   });
    
  // }



  get LoginType(){
    return this.form.get('loginType');
  }
  get FirstName(){
    return this.form.get('firstName');
  }
  get LastName(){
    return this.form.get('lastName');
  }
  get MobileNo(){
    return this.form.get('mobileNo');
  }
  get Email(){
    return this.form.get('email');
  }
  get Dob(){
    return this.form.get('dob');
  }
  get Gender(){
    return this.form.get('gender');
  }
  get WorkStatus(){
    return this.form.get('workStatus');
  }
  get Password(){
    return this.form.get('password');
  }
  get ConfirmPassword(){
    return this.form.get('confirmPassword');
  }
  get Otp(){
    return this.form.get('otp');
  }

}
