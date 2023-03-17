import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private service:ZezhaService,private router: Router,private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) { 
      this.matIconRegistry.addSvgIcon(
        "profileCompletion",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/profileCompletion.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "jobs",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/jobs.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "companies",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/companies.svg")
      );
    }

  ngOnInit(): void {
    this.service.Dashboard().subscribe(data=>{
      
    });

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

  // Update the width and height properties of the card
  updateCardSize1(newWidth: number, newHeight: number) {
    this.cardWidth1 = newWidth;
    this.cardHeight1 = newHeight;
  }


}
