import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        "facebook",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/facebook.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "instagram",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/instagram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "twitter",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/twitter.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "linkedIn",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/linkedIn.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "youtube",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/youtube.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "playstore",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/playstore.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "appstore",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/appstore.svg")
      );
     }

  ngOnInit(): void {
  }

}
