import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Http modules

// Services
import { AuthService } from './Authtools/auth.service';

import { FacultyComponent } from './faculty/faculty.component';
import { WebrtcService } from './webrtc.service';
import { StudentwindowComponent } from './studentwindow/studentwindow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { LandingComponent } from './components/landing/landing.component';
import { NavComponent } from './components/nav/nav.component';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TeachersArenaComponent } from './components/teacher-dashboard-elements/teachers-arena/teachers-arena.component';
import { TeacherClassesComponent } from './components/teacher-dashboard-elements/teacher-classes/teacher-classes.component';
import { TeachersClassDetailsComponent } from './components/teacher-dashboard-elements/teachers-class-details/teachers-class-details.component';
import {
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TeacherdashService } from './components/teacher-dashboard-elements/teacherdash.service'; // import {MatTableModule} from '@angular/material/table';

import { environment } from './../environments/environment';

import { TeacherResponsesComponent } from './components/teacher-dashboard-elements/teacher-responses/teacher-responses.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorService } from './http.interceptor';
import { MatInputModule } from '@angular/material/input';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddClassPopComponent } from './components/teacher-dashboard-elements/add-class-pop/add-class-pop.component';

@NgModule({
  declarations: [
    AppComponent,
    FacultyComponent,
    StudentwindowComponent,
    LandingComponent,
    NavComponent,
    TeacherLoginComponent,
    StudentLoginComponent,
    RegistrationComponent,
    TeachersArenaComponent,
    TeacherClassesComponent,
    TeachersClassDetailsComponent,
    TeacherResponsesComponent,
    AddClassPopComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    MatGridListModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,

    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,

    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,

    MatRippleModule,

    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    HttpClientModule,
  ],
  providers: [
    WebrtcService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    TeacherdashService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
