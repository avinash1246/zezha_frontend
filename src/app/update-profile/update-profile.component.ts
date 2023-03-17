import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { ZezhaService } from '../service/zezha-service';
import { bulkdatas } from '../utils/bulkdatas';

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

  constructor(private service:ZezhaService,private router: Router,public dialog: MatDialog) { }
  isLinear = false;
  listval:any;
  selectedType: string = '';
  states!:any;
  cities!:any;
  citiesList!:any;
  state!:any;
  //cities!:any;
  selectedCities!:any;

  step = 0;

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
    //this.state = this.state;
  }

  onStateSelected() {
    //const selectedStateObj = this.cities.find((state: { name: any; }) => state.name === this.selectedState);
    //console.log(selectedStateObj);
    alert('city')
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
    college: new FormControl(''),
    graduate: new FormControl(''),
    degree: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
    location: new FormControl(''),
    stream: new FormControl(''),
    ugMarks: new FormControl('')
  })


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: { name: '', email: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addForm(): void {
    // Create a new form group and add it to the array
    const formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
    });
    this.formGroups.push(formGroup);
  }

  deleteForm(formGroup: FormGroup): void {
    // Remove the specified form group from the array
    const index = this.formGroups.indexOf(formGroup);
    this.formGroups.splice(index, 1);
  }
}
