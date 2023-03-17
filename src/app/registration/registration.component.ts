import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Registration } from '../model/registration';
import { ZezhaService } from '../service/zezha-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  selectedType: string = '';
  editform1:Registration=new Registration();
  editformlist: any;
  value: any;

  handleSelectionChange(event: any) {
    if (event.value === 'legends') {
      this.selectedType ='legends'
    }else{
      this.selectedType ='heads'
    }
  }


  constructor(private service:ZezhaService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
  }

  form:FormGroup=new FormGroup({
    loginType: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mobileNo: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    workStatus: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  editForm(editform1:any){
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
    if(this.editform1.loginType&&this.editform1.firstName&&this.editform1.lastName&&this.editform1.mobileNo
      &&this.editform1.email&&this.editform1.dob&&this.editform1.gender&&this.editform1.workStatus
      &&this.editform1.password&&this.editform1.confirmPassword){
      sessionStorage.setItem('edititem',JSON.stringify(this.editformlist))
      this.editProduct();
    }
  }

  editProduct(){
    this.value=sessionStorage.getItem('edititem');
    console.log(JSON.stringify(this.value))
    this.service.Registration(JSON.parse(this.value)).subscribe(data=>{
      console.log(data);
      console.log(data.message);
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


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

}
