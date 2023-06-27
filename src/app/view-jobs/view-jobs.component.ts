import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ZezhaService } from '../service/zezha-service';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {

  list!:any;
  id!: string;
  message!: string;
  jobDetails: any;
  isLoading=true;

  constructor( private service:ZezhaService, private route: ActivatedRoute,private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("name")!=null){
      this.route.queryParams.subscribe((params) => {
        const applyJob = {
          jobPostedBy: params['email']
        };
        if(params['email']!=undefined){
          console.log(applyJob)
          this.service.DisplayJobsOnCompany(applyJob).subscribe((data) => {
            console.log(data);
            this.isLoading = false;
            if(data.length === 0){
              this._snackBar.open('No Jobs Available', 'Dismiss');
            }else{
              this.router.navigate(['/viewJobs']);
              this.jobDetails = data;
            }
          });
        }
  
      });
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  myClickFunction(event: any, jobId: any){
    const id =jobId;
    const username = sessionStorage.getItem('username');
    console.log(id);
    console.log(username);
    const applyJob = {
      id: id,
      username : username
    };
    console.log(applyJob);
    this.service.ApplyJob(applyJob).subscribe(data1=>{
      console.log(data1);
      this.isLoading = false;
      this.message = data1.message;
      this._snackBar.open(this.message, 'Dismiss');
    });
  }

}
