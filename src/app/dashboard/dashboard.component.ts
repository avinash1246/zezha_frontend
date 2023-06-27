import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ZezhaService } from '../service/zezha-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoading=true;
  constructor(private service:ZezhaService,private router: Router,private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) { 
      this.matIconRegistry.addSvgIcon(
        "jobs",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/jobs.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "companies",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/companies.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "profileCompletion",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/profileCompletion.svg")
      );
    }
    

    list!:any;
    name!:any;
    loginType!:any;
    legends!:any;
    heads!:any;
    images!:any;

    carouselItems = [
      'https://picsum.photos/id/1019/1000/500',
      'https://picsum.photos/id/1018/1000/500',
      'https://picsum.photos/id/1015/1000/500'
    ];

    
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
        this.isLoading = false;
        console.log(data);
        this.list = data;
      });
    }else{
      this.router.navigate(['/login']);
    }
  }

  cardWidth = 200;
  cardHeight = 116;

  // Update the width and height properties of the card
  updateCardSize(newWidth: number, newHeight: number) {
    this.cardWidth = newWidth;
    this.cardHeight = newHeight;
  }

  cardWidth1 = 200;
  cardHeight1 = 116;
  cardHeight2 = 41;

  // Update the width and height properties of the card
  updateCardSize1(newWidth: number, newHeight: number) {
    this.cardWidth1 = newWidth;
    this.cardHeight1 = newHeight;
  }


}
