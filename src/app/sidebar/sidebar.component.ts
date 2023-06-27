import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ZezhaService } from '../service/zezha-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,private service:ZezhaService,private router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      "homeIcon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/home.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "profile",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/profile.svg")
    );
   }

   name!:any;
  ngOnInit(): void {
    this.name = sessionStorage.getItem("name");
  }

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  logout(){
    this.service.Logout().subscribe(data=>{
      console.log(data)
      this.router.navigate(['/login']);
      sessionStorage.removeItem("name");
      sessionStorage.clear();
    });
  }



}
