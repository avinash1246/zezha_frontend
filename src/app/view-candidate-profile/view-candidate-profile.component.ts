import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZezhaService } from '../service/zezha-service';

@Component({
  selector: 'app-view-candidate-profile',
  templateUrl: './view-candidate-profile.component.html',
  styleUrls: ['./view-candidate-profile.component.css']
})
export class ViewCandidateProfileComponent implements OnInit {

  constructor(private service:ZezhaService,private router: Router) { }

  list!:any;
  name!:any;
  loginType!:any;
  legends!:any;
  heads!:any;
  images!:any;
  isLoading=true;

  ngOnInit(): void {
    if(sessionStorage.getItem("name")!=null){
      this.name = sessionStorage.getItem("name");
      this.loginType = sessionStorage.getItem("loginType");
      if(this.loginType=='legends'){
        this.legends = 'legends';
      }else{
        this.heads = 'heads';
      }
      this.service.displayLegends().subscribe(data=>{
        console.log(data);
        this.isLoading = false;
        this.list = data;
      });
    }else{
      this.router.navigate(['/login']);
    }
  }

}
