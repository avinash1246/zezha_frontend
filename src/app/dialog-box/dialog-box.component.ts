import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Registration } from '../model/registration';
import { ZezhaService } from '../service/zezha-service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,private service:ZezhaService) { }

  value!:any;
  shouldClose!:any;
  ngOnInit(): void {
  }

  editform1:Registration=new Registration();
  editformlist: any;
  form:UntypedFormGroup=new UntypedFormGroup({
    otp: new UntypedFormControl(''),
  });

  editForm(editform1:any){
    this.editform1= new Registration();
    this.editform1.otp=this.form.get('otp')?.value;
    this.editformlist = this.editform1;
    sessionStorage.setItem('otp',this.form.get('otp')?.value);
    this.editFormList();
  }
  
  editFormList(){
    this.value= sessionStorage.getItem('otp');
    const emailOtp = {
      email: sessionStorage.getItem('email'),
      otp : this.value
    };
    this.service.OtpVerification(emailOtp).subscribe(data1=>{
      console.log(data1);
      if(data1.message = "Email Verified"){
        this.shouldClose = "true";
      }
      sessionStorage.setItem('message',data1.message);
    });
  }
}
