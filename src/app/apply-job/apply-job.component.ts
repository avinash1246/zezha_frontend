import { Component, OnInit } from '@angular/core';
import { ZezhaService } from '../service/zezha-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {

  constructor(private service:ZezhaService, private route: ActivatedRoute) { }

  list!:any;
  id!: string;
  jobDetails: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id)
      this.service.getMoreJobDetails(this.id).subscribe((data) => {
        console.log(data);
        this.jobDetails = data;
      });
    });
  }

}
