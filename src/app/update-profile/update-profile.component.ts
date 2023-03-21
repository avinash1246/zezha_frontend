import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdateProfile } from '../model/updateProfile';
import { ZezhaService } from '../service/zezha-service';
import { bulkdatas } from '../utils/bulkdatas';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  //[x: string]: any;

  myClass!: bulkdatas;
  formGroup: any;
  selectedState: any;
  fb: any;
  formGroups: any;
  editform1:UpdateProfile=new UpdateProfile();

  constructor(private service:ZezhaService,private router: Router,public dialog: MatDialog,
    private http: HttpClient) {  }
  isLinear = false;
  listval:any;
  selectedType: string = '';
  states!:any;
  cities!:any;
  ugdegrees!:any;
  pgdegrees!:any;
  citiesList!:any;
  state!:any;
  //cities!:any;
  selectedCities!:any;
  editformlist: any;
  value: any;
  step = 0;

  imageFile!: File;
  pdfFile!: File;
  imageUrl!: string;
  pdfUrl!: string;

  uploadFile(formData: FormData) {
    console.log('hii')
    console.log(formData)
    return this.http.post('/api/upload', formData);
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file: File | null = fileInput?.files?.[0] || null;
    if (file) {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      // send formData to your server using HttpClient
      console.log('formData--');
      console.log(formData)
    }
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit(): void {
    this.myClass = new bulkdatas();
    this.service.ExistingDetail().subscribe(data=>{
      console.log(data.workStatus);
      const dobParts = data.dob.split('-');
      const dobISO = `${dobParts[2]}-${dobParts[1]}-${dobParts[0]}`;
      this.firstFormGroup.get('firstName')?.patchValue(data.firstName);
      this.firstFormGroup.get('lastName')?.patchValue(data.lastName);
      this.firstFormGroup.get('mobileNo')?.patchValue(data.mobileNo);
      this.firstFormGroup.get('email')?.patchValue(data.email);
      this.firstFormGroup.get('dob')?.patchValue(dobISO);
      this.firstFormGroup.get('gender')?.patchValue(data.gender);
      this.firstFormGroup.get('workStatus')?.patchValue(data.workStatus);
      if(data.workStatus=== 'experienced'){
        this.selectedType ='experienced'
      }else{
        this.selectedType ='fresher'
      }
    });
  }

  callMyClass(): void {
    this.myClass.doSomething();
    this.states = this.myClass.states;
    this.cities = this.myClass.cities;
    console.log(this.cities);
    this.ugdegrees = this.myClass.ugdegrees;
    console.log(this.ugdegrees);
    this.pgdegrees = this.myClass.pgdegrees;
  }

  onStateSelected() {
    const stateselect = this.secondFormGroup.get('cur_state')?.value;
    console.log(stateselect);
    const assamState = this.cities.find((city: { name: any; }) => city.name === stateselect);
    this.citiesList = assamState.cities
    console.log(this.citiesList);
  }

  copyAddress() {
    const curAddress = this.secondFormGroup.get('cur_address')?.value;
    const curState = this.secondFormGroup.get('cur_state')?.value;
    const curCity = this.secondFormGroup.get('cur_city')?.value;
    const curPincode = this.secondFormGroup.get('cur_pincode')?.value;
    this.secondFormGroup.get('per_address')?.patchValue(curAddress);
    this.secondFormGroup.get('per_state')?.patchValue(curState);
    this.secondFormGroup.get('per_city')?.patchValue(curCity);
    this.secondFormGroup.get('per_pincode')?.patchValue(curPincode);
  }

  handleSelectionChange(event: any) {
    if (event.value === 'experienced') {
      this.selectedType ='experienced'
    }else{
      this.selectedType ='fresher'
    }
  }
  

  firstFormGroup:FormGroup=new FormGroup({
    firstName: new FormControl('Avinash'),
    lastName: new FormControl(''),
    mobileNo: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    workStatus: new FormControl(''),
    employment_type: new FormControl(''),
    industry_type: new FormControl(''),
    expected_salary: new FormControl(''),
    current_salary: new FormControl('')
  })

  secondFormGroup:FormGroup=new FormGroup({
    cur_address: new FormControl(''),
    cur_state: new FormControl(''),
    cur_city: new FormControl(''),
    cur_pincode: new FormControl(''),
    per_address: new FormControl(''),
    per_state: new FormControl(''),
    per_city: new FormControl(''),
    per_pincode: new FormControl(''),
    same_address:new FormControl('')
  })

  thirdFormGroup:FormGroup=new FormGroup({
    tenth_school: new FormControl(''),
    tenth_board: new FormControl(''),
    tenth_medium: new FormControl(''),
    tenth_marks: new FormControl(''),
    tenth_from: new FormControl(''),
    tenth_to: new FormControl(''),
    
    twelth_name: new FormControl(''),
    twelth_board: new FormControl(''),
    twelth_medium: new FormControl(''),
    twelth_mark: new FormControl(''),
    twelth_from: new FormControl(''),
    twelth_to: new FormControl(''),

    ug_college: new FormControl(''),
    ug_degree: new FormControl(''),
    ug_dept: new FormControl(''),
    ug_mark: new FormControl(''),
    ug_from: new FormControl(''),
    ug_to: new FormControl(''),

    pg_college: new FormControl(''),
    pg_dept: new FormControl(''),
    pg_marks: new FormControl(''),
    pg_degree: new FormControl(''),
    pg_to: new FormControl(''),
    pg_from: new FormControl(''),

    phd_college: new FormControl(''),
    phd_dept: new FormControl(''),
    phd_marks: new FormControl(''),
    phd_degree: new FormControl(''),
    phd_to: new FormControl(''),
    phd_from: new FormControl(''),
  })

  forthFormGroup:FormGroup=new FormGroup({
    cur_office: new FormControl(''),
    cur_profile: new FormControl(''),
    cur_tech: new FormControl(''),
    cur_working: new FormControl(''),
    notice_period: new FormControl(''),
    cur_from: new FormControl(''),
    cur_to: new FormControl(''),

    emp1_office: new FormControl(''),
    emp1_profile: new FormControl(''),
    emp1_tech: new FormControl(''),
    emp1_from: new FormControl(''),
    emp1_to: new FormControl(''),

    emp2_office: new FormControl(''),
    emp2_profile: new FormControl(''),
    emp2_tech: new FormControl(''),
    emp2_from: new FormControl(''),
    emp2_to: new FormControl(''),

    emp3_office: new FormControl(''),
    emp3_prof: new FormControl(''),
    emp3_tech: new FormControl(''),
    emp3_from: new FormControl(''),
    emp3_to: new FormControl(''),

    emp4_office: new FormControl(''),
    emp4_prof: new FormControl(''),
    emp4_tech: new FormControl(''),
    emp4_from: new FormControl(''),
    emp4_to: new FormControl('')
  })

  fifthFormGroup:FormGroup=new FormGroup({
    proj_title: new FormControl(''),
    proj_desc: new FormControl('')
  })

  editForm(editform1:any){
    this.editform1= new UpdateProfile();
    this.editform1.firstName=this.firstFormGroup.get('firstName')?.value;
    this.editform1.lastName=this.firstFormGroup.get('lastName')?.value;
    this.editform1.mobileNo=this.firstFormGroup.get('mobileNo')?.value;
    this.editform1.email=this.firstFormGroup.get('email')?.value;
    this.editform1.dob=this.firstFormGroup.get('dob')?.value;
    this.editform1.gender=this.firstFormGroup.get('gender')?.value;
    this.editform1.workStatus=this.firstFormGroup.get('workStatus')?.value;
    this.editform1.employment_type=this.firstFormGroup.get('employment_type')?.value;
    this.editform1.industry_type=this.firstFormGroup.get('industry_type')?.value;
    this.editform1.expected_salary=this.firstFormGroup.get('expected_salary')?.value;
    this.editform1.current_salary=this.firstFormGroup.get('current_salary')?.value;
    this.editformlist=this.editform1;
    sessionStorage.setItem('edititem',JSON.stringify(this.editformlist));
  }

  editForm1(editform1:any){
    this.editform1= new UpdateProfile();
    const parsedValue =sessionStorage.getItem('edititem');
    if (parsedValue !== null) {
      const value = JSON.parse(parsedValue);
      this.editform1.firstName = value.firstName;
      this.editform1.lastName = value.lastName;
      this.editform1.mobileNo = value.mobileNo;
      this.editform1.email = value.email;
      this.editform1.dob = value.dob;
      this.editform1.gender = value.gender;
      this.editform1.workStatus = value.workStatus;
      this.editform1.employment_type = value.employment_type;
      this.editform1.industry_type = value.industry_type;
      this.editform1.expected_salary = value.expected_salary;
      this.editform1.current_salary = value.current_salary;
    }
    this.editformlist = this.value
    this.editform1.cur_address=this.secondFormGroup.get('cur_address')?.value;
    this.editform1.cur_state=this.secondFormGroup.get('cur_state')?.value;
    this.editform1.cur_city=this.secondFormGroup.get('cur_city')?.value;
    this.editform1.cur_pincode=this.secondFormGroup.get('cur_pincode')?.value;
    this.editform1.per_address=this.secondFormGroup.get('per_address')?.value;
    this.editform1.per_state=this.secondFormGroup.get('per_state')?.value;
    this.editform1.per_city=this.secondFormGroup.get('per_city')?.value;
    this.editform1.per_pincode=this.secondFormGroup.get('per_pincode')?.value;
    this.editformlist=this.editform1;
    sessionStorage.setItem('edititem1',JSON.stringify(this.editformlist));
  }

  editForm2(editform1:any){
    this.editform1= new UpdateProfile();
    const parsedValue =sessionStorage.getItem('edititem1');
    if (parsedValue !== null) {
      const value = JSON.parse(parsedValue);
      this.editform1.firstName = value.firstName;
      this.editform1.lastName = value.lastName;
      this.editform1.mobileNo = value.mobileNo;
      this.editform1.email = value.email;
      this.editform1.dob = value.dob;
      this.editform1.gender = value.gender;
      this.editform1.workStatus = value.workStatus;
      this.editform1.employment_type = value.employment_type;
      this.editform1.industry_type = value.industry_type;
      this.editform1.expected_salary = value.expected_salary;
      this.editform1.current_salary = value.current_salary;
      this.editform1.cur_address=value.cur_address;
      this.editform1.cur_state=value.cur_state;
      this.editform1.cur_city=value.cur_city;
      this.editform1.cur_pincode=value.cur_pincode;
      this.editform1.per_address=value.per_address;
      this.editform1.per_state=value.per_state;
      this.editform1.per_city=value.per_city;
      this.editform1.per_pincode=value.per_pincode;
    }
    this.editform1.tenth_school=this.thirdFormGroup.get('tenth_school')?.value;
    this.editform1.tenth_board=this.thirdFormGroup.get('tenth_board')?.value;
    this.editform1.tenth_medium=this.thirdFormGroup.get('tenth_medium')?.value;
    this.editform1.tenth_marks=this.thirdFormGroup.get('tenth_marks')?.value;
    this.editform1.tenth_from=this.thirdFormGroup.get('tenth_from')?.value;
    this.editform1.tenth_to=this.thirdFormGroup.get('tenth_to')?.value;
    this.editform1.twelth_name=this.thirdFormGroup.get('twelth_name')?.value;
    this.editform1.twelth_board=this.thirdFormGroup.get('twelth_board')?.value;
    this.editform1.twelth_medium=this.thirdFormGroup.get('twelth_medium')?.value;
    this.editform1.twelth_mark=this.thirdFormGroup.get('twelth_mark')?.value;
    this.editform1.twelth_from=this.thirdFormGroup.get('twelth_from')?.value;
    this.editform1.twelth_to=this.thirdFormGroup.get('twelth_to')?.value;
    this.editform1.ug_college=this.thirdFormGroup.get('ug_college')?.value;
    this.editform1.ug_degree=this.thirdFormGroup.get('ug_degree')?.value;
    this.editform1.ug_dept=this.thirdFormGroup.get('ug_dept')?.value;
    this.editform1.ug_mark=this.thirdFormGroup.get('ug_mark')?.value;
    this.editform1.ug_from=this.thirdFormGroup.get('ug_from')?.value;
    this.editform1.ug_to=this.thirdFormGroup.get('ug_to')?.value;
    this.editform1.pg_college=this.thirdFormGroup.get('pg_college')?.value;
    this.editform1.pg_dept=this.thirdFormGroup.get('pg_dept')?.value;
    this.editform1.pg_marks=this.thirdFormGroup.get('pg_marks')?.value;
    this.editform1.pg_degree=this.thirdFormGroup.get('pg_degree')?.value;
    this.editform1.pg_to=this.thirdFormGroup.get('pg_to')?.value;
    this.editform1.pg_from=this.thirdFormGroup.get('pg_from')?.value;
    this.editform1.phd_college=this.thirdFormGroup.get('phd_college')?.value;
    this.editform1.phd_dept=this.thirdFormGroup.get('phd_dept')?.value;
    this.editform1.phd_marks=this.thirdFormGroup.get('phd_marks')?.value;
    this.editform1.phd_degree=this.thirdFormGroup.get('phd_degree')?.value;
    this.editform1.phd_to=this.thirdFormGroup.get('phd_to')?.value;
    this.editform1.phd_from=this.thirdFormGroup.get('phd_from')?.value;
    this.editformlist=this.editform1;
    sessionStorage.setItem('edititem2',JSON.stringify(this.editformlist));
  }

  editForm3(editform1:any){
    this.editform1= new UpdateProfile();
    const parsedValue =sessionStorage.getItem('edititem2');
    if (parsedValue !== null) {
      const value = JSON.parse(parsedValue);
      this.editform1.firstName = value.firstName;
      this.editform1.lastName = value.lastName;
      this.editform1.mobileNo = value.mobileNo;
      this.editform1.email = value.email;
      this.editform1.dob = value.dob;
      this.editform1.gender = value.gender;
      this.editform1.workStatus = value.workStatus;
      this.editform1.employment_type = value.employment_type;
      this.editform1.industry_type = value.industry_type;
      this.editform1.expected_salary = value.expected_salary;
      this.editform1.current_salary = value.current_salary;
      this.editform1.cur_address=value.cur_address;
      this.editform1.cur_state=value.cur_state;
      this.editform1.cur_city=value.cur_city;
      this.editform1.cur_pincode=value.cur_pincode;
      this.editform1.per_address=value.per_address;
      this.editform1.per_state=value.per_state;
      this.editform1.per_city=value.per_city;
      this.editform1.per_pincode=value.per_pincode;
      this.editform1.tenth_school=value.tenth_school;
      this.editform1.tenth_board=value.tenth_board;
      this.editform1.tenth_medium=value.tenth_medium;
      this.editform1.tenth_marks=value.tenth_marks;
      this.editform1.tenth_from=value.tenth_from;
      this.editform1.tenth_to=value.per_ptenth_toincode;
      this.editform1.twelth_name=value.twelth_name;
      this.editform1.twelth_board=value.twelth_board;
      this.editform1.twelth_medium=value.twelth_medium;
      this.editform1.twelth_mark=value.twelth_mark;
      this.editform1.twelth_from=value.twelth_from;
      this.editform1.twelth_to=value.twelth_to;
      this.editform1.ug_college=value.ug_college;
      this.editform1.ug_degree=value.ug_degree;
      this.editform1.ug_dept=value.ug_dept;
      this.editform1.ug_mark=value.ug_mark;
      this.editform1.ug_from=value.ug_from;
      this.editform1.ug_to=value.ug_to;
      this.editform1.pg_college=value.pg_college;
      this.editform1.pg_dept=value.pg_dept;
      this.editform1.pg_marks=value.pg_marks;
      this.editform1.pg_degree=value.pg_degree;
      this.editform1.pg_to=value.pg_to;
      this.editform1.pg_from=value.pg_from;
      this.editform1.phd_college=value.phd_college;
      this.editform1.phd_dept=value.phd_dept;
      this.editform1.phd_marks=value.phd_marks;
      this.editform1.phd_degree=value.phd_degree;
      this.editform1.phd_to=value.phd_to;
      this.editform1.phd_from=value.phd_from;
    }
    this.editform1.cur_office=this.forthFormGroup.get('cur_office')?.value;
    this.editform1.cur_profile=this.forthFormGroup.get('cur_profile')?.value;
    this.editform1.cur_tech=this.forthFormGroup.get('cur_tech')?.value;
    this.editform1.cur_working=this.forthFormGroup.get('cur_working')?.value;
    this.editform1.notice_period=this.forthFormGroup.get('notice_period')?.value;
    this.editform1.cur_from=this.forthFormGroup.get('cur_from')?.value;
    this.editform1.emp1_office=this.forthFormGroup.get('emp1_office')?.value;
    this.editform1.emp1_profile=this.forthFormGroup.get('emp1_profile')?.value;
    this.editform1.emp1_tech=this.forthFormGroup.get('emp1_tech')?.value;
    this.editform1.emp1_from=this.forthFormGroup.get('emp1_from')?.value;
    this.editform1.emp1_to=this.forthFormGroup.get('emp1_to')?.value;
    this.editform1.emp2_office=this.forthFormGroup.get('emp2_office')?.value;
    this.editform1.emp2_profile=this.forthFormGroup.get('emp2_profile')?.value;
    this.editform1.emp2_tech=this.forthFormGroup.get('emp2_tech')?.value;
    this.editform1.emp2_from=this.forthFormGroup.get('emp2_from')?.value;
    this.editform1.emp2_to=this.forthFormGroup.get('emp2_to')?.value;
    this.editform1.emp3_office=this.forthFormGroup.get('emp3_office')?.value;
    this.editform1.emp3_prof=this.forthFormGroup.get('emp3_prof')?.value;
    this.editform1.emp3_tech=this.forthFormGroup.get('emp3_tech')?.value;
    this.editform1.emp3_from=this.forthFormGroup.get('emp3_from')?.value;
    this.editform1.emp3_to=this.forthFormGroup.get('emp3_to')?.value;
    this.editform1.emp4_office=this.forthFormGroup.get('emp4_office')?.value;
    this.editform1.emp4_prof=this.forthFormGroup.get('emp4_prof')?.value;
    this.editform1.emp4_tech=this.forthFormGroup.get('emp4_tech')?.value;
    this.editform1.emp4_from=this.forthFormGroup.get('emp4_from')?.value;
    this.editform1.emp4_to=this.forthFormGroup.get('emp4_to')?.value;
    this.editformlist=this.editform1;
    sessionStorage.setItem('edititem3',JSON.stringify(this.editformlist));
  }

  editForm4(editform1:any){
    this.editform1= new UpdateProfile();
    const parsedValue =sessionStorage.getItem('edititem3');
    if (parsedValue !== null) {
      const value = JSON.parse(parsedValue);
      this.editform1.firstName = value.firstName;
      this.editform1.lastName = value.lastName;
      this.editform1.mobileNo = value.mobileNo;
      this.editform1.email = value.email;
      this.editform1.dob = value.dob;
      this.editform1.gender = value.gender;
      this.editform1.workStatus = value.workStatus;
      this.editform1.employment_type = value.employment_type;
      this.editform1.industry_type = value.industry_type;
      this.editform1.expected_salary = value.expected_salary;
      this.editform1.current_salary = value.current_salary;
      this.editform1.cur_address=value.cur_address;
      this.editform1.cur_state=value.cur_state;
      this.editform1.cur_city=value.cur_city;
      this.editform1.cur_pincode=value.cur_pincode;
      this.editform1.per_address=value.per_address;
      this.editform1.per_state=value.per_state;
      this.editform1.per_city=value.per_city;
      this.editform1.per_pincode=value.per_pincode;
      this.editform1.tenth_school=value.tenth_school;
      this.editform1.tenth_board=value.tenth_board;
      this.editform1.tenth_medium=value.tenth_medium;
      this.editform1.tenth_marks=value.tenth_marks;
      this.editform1.tenth_from=value.tenth_from;
      this.editform1.tenth_to=value.per_ptenth_toincode;
      this.editform1.twelth_name=value.twelth_name;
      this.editform1.twelth_board=value.twelth_board;
      this.editform1.twelth_medium=value.twelth_medium;
      this.editform1.twelth_mark=value.twelth_mark;
      this.editform1.twelth_from=value.twelth_from;
      this.editform1.twelth_to=value.twelth_to;
      this.editform1.ug_college=value.ug_college;
      this.editform1.ug_degree=value.ug_degree;
      this.editform1.ug_dept=value.ug_dept;
      this.editform1.ug_mark=value.ug_mark;
      this.editform1.ug_from=value.ug_from;
      this.editform1.ug_to=value.ug_to;
      this.editform1.pg_college=value.pg_college;
      this.editform1.pg_dept=value.pg_dept;
      this.editform1.pg_marks=value.pg_marks;
      this.editform1.pg_degree=value.pg_degree;
      this.editform1.pg_to=value.pg_to;
      this.editform1.pg_from=value.pg_from;
      this.editform1.phd_college=value.phd_college;
      this.editform1.phd_dept=value.phd_dept;
      this.editform1.phd_marks=value.phd_marks;
      this.editform1.phd_degree=value.phd_degree;
      this.editform1.phd_to=value.phd_to;
      this.editform1.phd_from=value.phd_from;

      this.editform1.cur_office=value.cur_office;
      this.editform1.cur_profile=value.cur_profile;
      this.editform1.cur_tech=value.cur_tech;
      this.editform1.cur_working=value.cur_working;
      this.editform1.notice_period=value.notice_period;
      this.editform1.cur_from=value.cur_from;
      this.editform1.emp1_office=value.emp1_office;
      this.editform1.emp1_profile=value.emp1_profile;
      this.editform1.emp1_tech=value.emp1_tech;
      this.editform1.emp1_from=value.emp1_from;
      this.editform1.emp1_to=value.emp1_to;
      this.editform1.emp2_office=value.emp2_office;
      this.editform1.emp2_profile=value.emp2_profile;
      this.editform1.emp2_tech=value.emp2_tech;
      this.editform1.emp2_from=value.emp2_from;
      this.editform1.emp2_to=value.emp2_to;
      this.editform1.emp3_office=value.emp3_office;
      this.editform1.emp3_prof=value.emp3_prof;
      this.editform1.emp3_tech=value.emp3_tech;
      this.editform1.emp3_from=value.emp3_from;
      this.editform1.emp3_to=value.emp3_to;
      this.editform1.emp4_office=value.emp4_office;
      this.editform1.emp4_prof=value.emp4_prof;
      this.editform1.emp4_tech=value.emp4_tech;
      this.editform1.emp4_from=value.emp4_from;
      this.editform1.emp4_to=value.emp4_to;
    }
    this.editform1.proj_title=this.fifthFormGroup.get('proj_title')?.value;
    this.editform1.proj_desc=this.fifthFormGroup.get('proj_desc')?.value;
    this.editformlist=this.editform1;
    sessionStorage.setItem('edititem4',JSON.stringify(this.editformlist));
    this.editProduct();
  }
    
  

  editProduct(){
    this.value=sessionStorage.getItem('edititem4');
    console.log(JSON.stringify(this.value))
    this.service.UpdateProfile(JSON.parse(this.value)).subscribe(data=>{
      console.log(data);
    })
  }

}
