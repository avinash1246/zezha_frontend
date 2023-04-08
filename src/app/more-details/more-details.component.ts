import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZezhaService } from '../service/zezha-service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {

  constructor(private service:ZezhaService, private route: ActivatedRoute) { }

  list!:any;
  mobileNo!: string;
  legendsDetails: any;
  color: string = 'palevioletred';
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.mobileNo = params['mobileNo'];
      this.service.getMoreDetails(this.mobileNo).subscribe((data) => {
        console.log(data);
        this.legendsDetails = data;
      });
    });
  }

}
