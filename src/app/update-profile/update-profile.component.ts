import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdateProfile } from '../model/updateProfile';
import { ZezhaService } from '../service/zezha-service';
import { bulkdatas } from '../utils/bulkdatas';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})


export class UpdateProfileComponent implements OnInit {
  myClass!: bulkdatas;
  formGroup: any;
  selectedState: any;
  fb: any;
  formGroups: any;
  editform1:UpdateProfile=new UpdateProfile();
  file: File | undefined;
  isLoading=true;

  constructor(private _snackBar: MatSnackBar,private service:ZezhaService,private router: Router,public dialog: MatDialog,
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
  selectedCities!:any;
  editformlist: any;
  value: any;
  value1: any;
  step = 0;
  imageFile!: File;
  pdfFile!: File;
  imageUrl!: string;
  pdfUrl!: string;

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
    if(sessionStorage.getItem("name")!=null){
      this.myClass = new bulkdatas();
      var activeObj3 = {
        "username" : sessionStorage.getItem('username')
      }
      var json = JSON.stringify(activeObj3);
      this.service.ExistingDetail(JSON.parse(json)).subscribe(data=>{
        this.isLoading = false;
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

      this.service.ExistingData(JSON.parse(json)).subscribe(data=>{
        this.isLoading = false;
        console.log(data);
        this.firstFormGroup.get('employment_type')?.patchValue(data.employment_type);
        this.firstFormGroup.get('industry_type')?.patchValue(data.industry_type);
        this.firstFormGroup.get('expected_salary')?.patchValue(data.expected_salary);
        this.firstFormGroup.get('current_salary')?.patchValue(data.current_salary);
        this.firstFormGroup.get('preferredLocation')?.patchValue(data.preferredLocation);

        this.secondFormGroup.get('cur_address')?.patchValue(data.cur_address);
        this.secondFormGroup.get('cur_state')?.patchValue(data.cur_state);
        this.secondFormGroup.get('cur_city')?.patchValue(data.cur_city);
        this.secondFormGroup.get('cur_pincode')?.patchValue(data.cur_pincode);
        this.secondFormGroup.get('per_address')?.patchValue(data.per_address);
        this.secondFormGroup.get('per_state')?.patchValue(data.per_state);
        this.secondFormGroup.get('per_city')?.patchValue(data.per_city);
        this.secondFormGroup.get('per_pincode')?.patchValue(data.per_pincode);

        const eduDetails = JSON.parse(data.educationDetails);
        this.thirdFormGroup.get('tenth_school')?.patchValue(eduDetails["Class X Details"]["schoolName"]);
        this.thirdFormGroup.get('tenth_board')?.patchValue(eduDetails["Class X Details"]["board"]);
        this.thirdFormGroup.get('tenth_medium')?.patchValue(eduDetails["Class X Details"]["medium"]);
        this.thirdFormGroup.get('tenth_marks')?.patchValue(eduDetails["Class X Details"]["marks"]);
        this.thirdFormGroup.get('tenth_from')?.patchValue(eduDetails["Class X Details"]["from"]);
        this.thirdFormGroup.get('tenth_to')?.patchValue(eduDetails["Class X Details"]["to"]);
        this.thirdFormGroup.get('twelth_name')?.patchValue(eduDetails["Class XII Details"]["schoolName"]);
        this.thirdFormGroup.get('twelth_board')?.patchValue(eduDetails["Class XII Details"]["board"]);
        this.thirdFormGroup.get('twelth_medium')?.patchValue(eduDetails["Class XII Details"]["medium"]);
        this.thirdFormGroup.get('twelth_mark')?.patchValue(eduDetails["Class XII Details"]["marks"]);
        this.thirdFormGroup.get('twelth_from')?.patchValue(eduDetails["Class XII Details"]["from"]);
        this.thirdFormGroup.get('twelth_to')?.patchValue(eduDetails["Class XII Details"]["to"]);
        this.thirdFormGroup.get('ug_college')?.patchValue(eduDetails["UG Details"]["collegeName"]);
        this.thirdFormGroup.get('ug_degree')?.patchValue(eduDetails["UG Details"]["degree"]);
        this.thirdFormGroup.get('ug_dept')?.patchValue(eduDetails["UG Details"]["department"]);
        this.thirdFormGroup.get('ug_mark')?.patchValue(eduDetails["UG Details"]["marks"]);
        this.thirdFormGroup.get('ug_from')?.patchValue(eduDetails["UG Details"]["from"]);
        this.thirdFormGroup.get('ug_to')?.patchValue(eduDetails["UG Details"]["to"]);
        this.thirdFormGroup.get('pg_college')?.patchValue(eduDetails["PG Details"]["collegeName"]);
        this.thirdFormGroup.get('pg_degree')?.patchValue(eduDetails["PG Details"]["degree"]);
        this.thirdFormGroup.get('pg_dept')?.patchValue(eduDetails["PG Details"]["department"]);
        this.thirdFormGroup.get('pg_mark')?.patchValue(eduDetails["PG Details"]["marks"]);
        this.thirdFormGroup.get('pg_from')?.patchValue(eduDetails["PG Details"]["from"]);
        this.thirdFormGroup.get('pg_to')?.patchValue(eduDetails["PG Details"]["to"]);
        this.thirdFormGroup.get('phd_college')?.patchValue(eduDetails["PHD Details"]["collegeName"]);
        this.thirdFormGroup.get('phd_degree')?.patchValue(eduDetails["PHD Details"]["degree"]);
        this.thirdFormGroup.get('phd_dept')?.patchValue(eduDetails["PHD Details"]["department"]);
        this.thirdFormGroup.get('phd_marks')?.patchValue(eduDetails["PHD Details"]["marks"]);
        this.thirdFormGroup.get('phd_from')?.patchValue(eduDetails["PHD Details"]["from"]);
        this.thirdFormGroup.get('phd_to')?.patchValue(eduDetails["PHD Details"]["to"]);

        const empDetails = JSON.parse(data.experienceDetails);
        this.forthFormGroup.get('cur_office')?.patchValue(empDetails["Current Employment Details"]["currentCompanyName"]);
        this.forthFormGroup.get('cur_profile')?.patchValue(empDetails["Current Employment Details"]["currentDesignation"]);
        this.forthFormGroup.get('cur_tech')?.patchValue(empDetails["Current Employment Details"]["tech used"]);
        this.forthFormGroup.get('cur_working')?.patchValue(empDetails["Current Employment Details"]["cur_working_status"]);
        this.forthFormGroup.get('notice_period')?.patchValue(empDetails["Current Employment Details"]["Notice Period"]);
        this.forthFormGroup.get('cur_from')?.patchValue(empDetails["Current Employment Details"]["working from"]);
        this.forthFormGroup.get('cur_to')?.patchValue(empDetails["Current Employment Details"]["working to"]);
        this.forthFormGroup.get('emp1_office')?.patchValue(empDetails["Employment1 Details"]["currentCompanyName"]);
        this.forthFormGroup.get('emp1_profile')?.patchValue(empDetails["Employment1 Details"]["currentDesignation"]);
        this.forthFormGroup.get('emp1_tech')?.patchValue(empDetails["Employment1 Details"]["tech used"]);
        this.forthFormGroup.get('emp1_from')?.patchValue(empDetails["Employment1 Details"]["working from"]);
        this.forthFormGroup.get('emp1_to')?.patchValue(empDetails["Employment1 Details"]["working till"]);
        this.forthFormGroup.get('emp2_office')?.patchValue(empDetails["Employment2 Details"]["currentCompanyName"]);
        this.forthFormGroup.get('emp2_profile')?.patchValue(empDetails["Employment2 Details"]["currentDesignation"]);
        this.forthFormGroup.get('emp2_tech')?.patchValue(empDetails["Employment2 Details"]["tech used"]);
        this.forthFormGroup.get('emp2_from')?.patchValue(empDetails["Employment2 Details"]["working from"]);
        this.forthFormGroup.get('emp2_to')?.patchValue(empDetails["Employment2 Details"]["working till"]);
        this.forthFormGroup.get('emp3_office')?.patchValue(empDetails["Employment3 Details"]["currentCompanyName"]);
        this.forthFormGroup.get('emp3_profile')?.patchValue(empDetails["Employment3 Details"]["currentDesignation"]);
        this.forthFormGroup.get('emp3_tech')?.patchValue(empDetails["Employment3 Details"]["tech used"]);
        this.forthFormGroup.get('emp3_from')?.patchValue(empDetails["Employment3 Details"]["working from"]);
        this.forthFormGroup.get('emp3_to')?.patchValue(empDetails["Employment3 Details"]["working till"]);
        this.forthFormGroup.get('emp4_office')?.patchValue(empDetails["Employment4 Details"]["currentCompanyName"]);
        this.forthFormGroup.get('emp4_profile')?.patchValue(empDetails["Employment4 Details"]["currentDesignation"]);
        this.forthFormGroup.get('emp4_tech')?.patchValue(empDetails["Employment4 Details"]["tech used"]);
        this.forthFormGroup.get('emp4_from')?.patchValue(empDetails["Employment4 Details"]["working from"]);
        this.forthFormGroup.get('emp4_to')?.patchValue(empDetails["Employment4 Details"]["working till"]);

        const projDetails = JSON.parse(data.projectDetails);
        this.fifthFormGroup.get('proj_title')?.patchValue(projDetails["projectTitle"]);
        this.fifthFormGroup.get('proj_desc')?.patchValue(projDetails["projectDescription"]);

        this.sixthFormGroup.get('about_yourself')?.patchValue(data.aboutYourself);
        
      });
    }
    else{
      this.router.navigate(['/login']);
    }
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
  

  firstFormGroup:UntypedFormGroup=new UntypedFormGroup({
    firstName: new UntypedFormControl('Avinash'),
    lastName: new UntypedFormControl(''),
    mobileNo: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    dob: new UntypedFormControl(''),
    gender: new UntypedFormControl(''),
    workStatus: new UntypedFormControl(''),
    employment_type: new UntypedFormControl(''),
    industry_type: new UntypedFormControl(''),
    expected_salary: new UntypedFormControl(''),
    current_salary: new UntypedFormControl(''),
    preferredLocation: new UntypedFormControl('')
  })

  secondFormGroup:UntypedFormGroup=new UntypedFormGroup({
    cur_address: new UntypedFormControl(''),
    cur_state: new UntypedFormControl(''),
    cur_city: new UntypedFormControl(''),
    cur_pincode: new UntypedFormControl(''),
    per_address: new UntypedFormControl(''),
    per_state: new UntypedFormControl(''),
    per_city: new UntypedFormControl(''),
    per_pincode: new UntypedFormControl(''),
    same_address:new UntypedFormControl('')
  })

  thirdFormGroup:UntypedFormGroup=new UntypedFormGroup({
    tenth_school: new UntypedFormControl(''),
    tenth_board: new UntypedFormControl(''),
    tenth_medium: new UntypedFormControl(''),
    tenth_marks: new UntypedFormControl(''),
    tenth_from: new UntypedFormControl(''),
    tenth_to: new UntypedFormControl(''),
    
    twelth_name: new UntypedFormControl(''),
    twelth_board: new UntypedFormControl(''),
    twelth_medium: new UntypedFormControl(''),
    twelth_mark: new UntypedFormControl(''),
    twelth_from: new UntypedFormControl(''),
    twelth_to: new UntypedFormControl(''),

    ug_college: new UntypedFormControl(''),
    ug_degree: new UntypedFormControl(''),
    ug_dept: new UntypedFormControl(''),
    ug_mark: new UntypedFormControl(''),
    ug_from: new UntypedFormControl(''),
    ug_to: new UntypedFormControl(''),

    pg_college: new UntypedFormControl(''),
    pg_dept: new UntypedFormControl(''),
    pg_marks: new UntypedFormControl(''),
    pg_degree: new UntypedFormControl(''),
    pg_to: new UntypedFormControl(''),
    pg_from: new UntypedFormControl(''),

    phd_college: new UntypedFormControl(''),
    phd_dept: new UntypedFormControl(''),
    phd_marks: new UntypedFormControl(''),
    phd_degree: new UntypedFormControl(''),
    phd_to: new UntypedFormControl(''),
    phd_from: new UntypedFormControl(''),
  })

  forthFormGroup:UntypedFormGroup=new UntypedFormGroup({
    cur_office: new UntypedFormControl(''),
    cur_profile: new UntypedFormControl(''),
    cur_tech: new UntypedFormControl(''),
    cur_working: new UntypedFormControl(''),
    notice_period: new UntypedFormControl(''),
    cur_from: new UntypedFormControl(''),
    cur_to: new UntypedFormControl(''),

    emp1_office: new UntypedFormControl(''),
    emp1_profile: new UntypedFormControl(''),
    emp1_tech: new UntypedFormControl(''),
    emp1_from: new UntypedFormControl(''),
    emp1_to: new UntypedFormControl(''),

    emp2_office: new UntypedFormControl(''),
    emp2_profile: new UntypedFormControl(''),
    emp2_tech: new UntypedFormControl(''),
    emp2_from: new UntypedFormControl(''),
    emp2_to: new UntypedFormControl(''),

    emp3_office: new UntypedFormControl(''),
    emp3_prof: new UntypedFormControl(''),
    emp3_tech: new UntypedFormControl(''),
    emp3_from: new UntypedFormControl(''),
    emp3_to: new UntypedFormControl(''),

    emp4_office: new UntypedFormControl(''),
    emp4_prof: new UntypedFormControl(''),
    emp4_tech: new UntypedFormControl(''),
    emp4_from: new UntypedFormControl(''),
    emp4_to: new UntypedFormControl('')
  })

  fifthFormGroup:UntypedFormGroup=new UntypedFormGroup({
    proj_title: new UntypedFormControl(''),
    proj_desc: new UntypedFormControl('')
  })

  sixthFormGroup:UntypedFormGroup=new UntypedFormGroup({
    about_yourself: new UntypedFormControl('')
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
    this.editform1.preferredLocation= this.firstFormGroup.get('preferredLocation')?.value;
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
      this.editform1.preferredLocation = value.preferredLocation;
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
      this.editform1.preferredLocation = value.preferredLocation;
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
    this.editform1.pg_mark=this.thirdFormGroup.get('pg_marks')?.value;
    this.editform1.pg_degree=this.thirdFormGroup.get('pg_degree')?.value;
    this.editform1.pg_to=this.thirdFormGroup.get('pg_to')?.value;
    this.editform1.pg_from=this.thirdFormGroup.get('pg_from')?.value;
    this.editform1.phd_college=this.thirdFormGroup.get('phd_college')?.value;
    this.editform1.phd_dept=this.thirdFormGroup.get('phd_dept')?.value;
    this.editform1.phd_mark=this.thirdFormGroup.get('phd_marks')?.value;
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
      this.editform1.pg_mark=value.pg_marks;
      this.editform1.pg_degree=value.pg_degree;
      this.editform1.pg_to=value.pg_to;
      this.editform1.pg_from=value.pg_from;
      this.editform1.phd_college=value.phd_college;
      this.editform1.phd_dept=value.phd_dept;
      this.editform1.phd_mark=value.phd_marks;
      this.editform1.phd_degree=value.phd_degree;
      this.editform1.phd_to=value.phd_to;
      this.editform1.phd_from=value.phd_from;
      this.editform1.preferredLocation = value.preferredLocation;
    }
    this.editform1.cur_office=this.forthFormGroup.get('cur_office')?.value;
    this.editform1.cur_profile=this.forthFormGroup.get('cur_profile')?.value;
    this.editform1.cur_tech=this.forthFormGroup.get('cur_tech')?.value;
    this.editform1.cur_working=this.forthFormGroup.get('cur_working')?.value;
    this.editform1.notice_period=this.forthFormGroup.get('notice_period')?.value;
    this.editform1.cur_from=this.forthFormGroup.get('cur_from')?.value;
    this.editform1.cur_to=this.forthFormGroup.get('cur_to')?.value;
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
      this.editform1.pg_mark=value.pg_marks;
      this.editform1.pg_degree=value.pg_degree;
      this.editform1.pg_to=value.pg_to;
      this.editform1.pg_from=value.pg_from;
      this.editform1.phd_college=value.phd_college;
      this.editform1.phd_dept=value.phd_dept;
      this.editform1.phd_mark=value.phd_marks;
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
      this.editform1.preferredLocation = value.preferredLocation;
    }
    this.editform1.proj_title=this.fifthFormGroup.get('proj_title')?.value;
    this.editform1.proj_desc=this.fifthFormGroup.get('proj_desc')?.value;
    this.editformlist=this.editform1;
    sessionStorage.setItem('edititem4',JSON.stringify(this.editformlist));
    //this.editProduct();
  }

  editForm5(editform1:any){
    const data = this.fruits;
    const names = data.map((obj) => obj.name);
    const result = names.join(", ");
    console.log(result);
    this.editform1= new UpdateProfile();
    const parsedValue =sessionStorage.getItem('edititem4');
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
      this.editform1.pg_mark=value.pg_marks;
      this.editform1.pg_degree=value.pg_degree;
      this.editform1.pg_to=value.pg_to;
      this.editform1.pg_from=value.pg_from;
      this.editform1.phd_college=value.phd_college;
      this.editform1.phd_dept=value.phd_dept;
      this.editform1.phd_mark=value.phd_marks;
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
      this.editform1.preferredLocation = value.preferredLocation;
      this.editform1.proj_title=value.proj_title;
      this.editform1.proj_desc=value.proj_desc;
    }
    this.editform1.skillDetails = result;
    this.editform1.aboutYourself = this.sixthFormGroup.get('about_yourself')?.value;
    this.editformlist=this.editform1;
    sessionStorage.setItem('edititem5',JSON.stringify(this.editformlist));
    this.editProduct();
    
  }

  editProduct(){
    this.value=sessionStorage.getItem('edititem5');
    console.log(JSON.stringify(this.value))
    this.service.UpdateProfile(JSON.parse(this.value)).subscribe(data=>{
      console.log(data);
      this.isLoading = false;
    })
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    // {name: 'Lemon'},
    // {name: 'Lime'},
    // {name: 'Apple'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  // onFileSelected(event: any) {
  //   this.file = event.target.files[0];
  // }

  onFileSelected(event: any) {
    var name:any;
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    if(sessionStorage.getItem('username')!=null){
      name =sessionStorage.getItem('username');
    }
    formData.append('myString', name);
    this.uploadImage(formData);
  }

  uploadImage(formData: FormData) {
    this.http.post('http://localhost:8081/zezha/uploadImageFile', formData).subscribe((response: any) => {
      console.log(response); // Handle the response from the server
    });
  }

  onFileSelected1(event: any) {
    var name:any;
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('resume', file);
    if(sessionStorage.getItem('username')!=null){
      name =sessionStorage.getItem('username');
      formData.append('myString', name);
    }
    this.uploadImage1(formData);
  }

  uploadImage1(formData: FormData) {
    this.http.post('http://localhost:8081/zezha/uploadResumeFile', formData).subscribe((response: any) => {
      console.log(response); // Handle the response from the server
    });
  }

  onUpload() {
    if (this.file) {
      this.service.uploadFile(this.file).subscribe(
        response => console.log(response),
        error => console.log(error)
      );
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


}
