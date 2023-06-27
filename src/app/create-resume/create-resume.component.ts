import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZezhaService } from '../service/zezha-service';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css']
})
export class CreateResumeComponent implements OnInit {

  constructor(private service:ZezhaService,private router: Router) { }
  list!:any;
  mobileNo!: string;
  legendsDetails: any;
  color: string = 'palevioletred';
  isLoading=true;

  ngOnInit(): void {
    if(sessionStorage.getItem("name")!=null){
      var addProcess={
        "username":sessionStorage.getItem('username')
      }
      var json = JSON.stringify(addProcess);
      this.service.CheckDataForResume(JSON.parse(json)).subscribe(data=>{
        console.log(data);
        this.isLoading = false;
        if (data.message === 'update profile not completed') {
          this.router.navigate(['/updateProfile']);
        }else{
          this.service.getMoreDetails(data.mobileNo).subscribe((data) => {
            this.isLoading = false;
            console.log(data);
            this.legendsDetails = data;
          });
        }
      })
    }else{
      this.router.navigate(['/login']);
    }
  }


// saveAsPDF() {
//   const element = document.getElementById('card-container');

//   if (element) {
//     const opt = {
//       margin: 10,
//       filename: 'template.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//     };

//     html2pdf().set(opt).from(element).save();
//   }
// }

}


