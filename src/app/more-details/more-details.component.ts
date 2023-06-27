import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZezhaService } from '../service/zezha-service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {

  constructor(private service:ZezhaService, private route: ActivatedRoute,private router: Router) { }

  list!:any;
  mobileNo!: string;
  legendsDetails: any;
  isLoading=true;
  color: string = 'palevioletred';
  ngOnInit(): void {
    if(sessionStorage.getItem("name")!=null){
      this.route.queryParams.subscribe((params) => {
        this.mobileNo = params['mobileNo'];
        this.service.getMoreDetails(this.mobileNo).subscribe((data) => {
          console.log(data);
          this.isLoading = false;
          this.legendsDetails = data;
        });
      });
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}
