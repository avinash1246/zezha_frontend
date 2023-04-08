import { Component, OnInit } from '@angular/core';
import { ZezhaService } from '../service/zezha-service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(private service:ZezhaService) { }

  list!:any;

  ngOnInit(): void {
    this.service.displayJobs().subscribe(data=>{
      console.log(data);
      this.list = data;
    });
  }

  // contents = [
  //   { title: 'Title 1', description: 'Description 1' },
  //   { title: 'Title 2', description: 'Description 2' },
  //   { title: 'Title 3', description: 'Description 3' },
  //   { title: 'Title 4', description: 'Description 4' },
  //   { title: 'Title 5', description: 'Description 5' }
  // ];

}
