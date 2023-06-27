import { Component, OnInit } from '@angular/core';
import { ZezhaService } from '../service/zezha-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor( private service:ZezhaService, private route: ActivatedRoute,private _snackBar: MatSnackBar,private router: Router) { }

  list!:any;
  id!: string;
  message!: string;
  isLoading=true;

  ngOnInit(): void {
    if(sessionStorage.getItem("name")!=null){
      this.service.displayJobs().subscribe(data=>{
        console.log(data);
        this.isLoading = false;
        this.list = data;
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
