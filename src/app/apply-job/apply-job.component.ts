import { Component, OnInit } from '@angular/core';
import { ZezhaService } from '../service/zezha-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {

  constructor(private service:ZezhaService, private route: ActivatedRoute,private _snackBar: MatSnackBar,private router: Router) { }

  list!:any;
  id!: string;
  jobDetails: any;
  message!: string;
  isLoading=true;
  ngOnInit(): void {
    if(sessionStorage.getItem("name")!=null){
      this.route.queryParams.subscribe((params) => {
        this.id = params['id'];
        console.log(this.id)
        this.service.getMoreJobDetails(this.id).subscribe((data) => {
          this.isLoading = false;
          console.log(data);
          this.jobDetails = data;
          sessionStorage.setItem('jobId',this.jobDetails.id)
        });
      });
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  myClickFunction(event: any){
    //const id =sessionStorage.getItem('jobId');
    const id = this.route.snapshot.queryParams['id'];
    const username = sessionStorage.getItem('username');
    console.log(id);
    console.log(username);
    const applyJob = {
      id: id,
      username : username
    };
    console.log(applyJob);
    this.service.ApplyJob(applyJob).subscribe(data1=>{
      this.isLoading = false;
      console.log(data1);
      this.message = data1.message;
      this._snackBar.open(this.message, 'Dismiss');
    });
  }

}
