import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FooterComponent } from './footer/footer.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import { CdkTableModule } from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MoreDetailsComponent } from './more-details/more-details.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostJobComponent } from './post-job/post-job.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { JobComponent } from './job/job.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { CompaniesComponent } from './companies/companies.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    SidebarComponent,
    UpdateProfileComponent,
    DialogBoxComponent,
    FooterComponent,
    MoreDetailsComponent,
    PostJobComponent,
    JobComponent,
    ApplyJobComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    CdkStepperModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatChipsModule,
    CdkTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
