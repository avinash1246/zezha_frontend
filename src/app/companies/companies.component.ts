import { Component, OnInit } from '@angular/core';
import { ZezhaService } from '../service/zezha-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  constructor(private service:ZezhaService,private router: Router) { }

  list!:any;

  ngOnInit(): void {
    if(sessionStorage.getItem("name")!=null){
      this.service.displayCompanies().subscribe(data=>{
        console.log(data);
        this.list = data;
      });
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}
