import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobComponent } from './job/job.component';
import { LoginComponent } from './login/login.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { PostJobComponent } from './post-job/post-job.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CompaniesComponent } from './companies/companies.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { HowDoesItWorksComponent } from './how-does-it-works/how-does-it-works.component';
import { CreateResumeComponent } from './create-resume/create-resume.component';
import { ViewCandidateProfileComponent } from './view-candidate-profile/view-candidate-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'login',  pathMatch:'full'},
  { path:'login', component: LoginComponent},
  { path:'registration', component: RegistrationComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'updateProfile', component: UpdateProfileComponent},
  { path:'moreDetails', component: MoreDetailsComponent},
  { path:'postJob', component: PostJobComponent},
  { path:'job', component: JobComponent},
  { path:'applyJob', component: ApplyJobComponent},
  { path:'companies', component: CompaniesComponent},
  { path:'viewJobs', component: ViewJobsComponent},
  { path:'about', component: AboutComponent},
  { path:'career', component: CareerComponent},
  { path:'howDoesItWork', component: HowDoesItWorksComponent},
  { path:'createResume', component: CreateResumeComponent},
  { path:'viewProfile', component: ViewCandidateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
