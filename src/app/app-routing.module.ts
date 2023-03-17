import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'login',  pathMatch:'full'},
  { path:'login', component: LoginComponent},
  { path:'registration', component: RegistrationComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'updateProfile', component: UpdateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
