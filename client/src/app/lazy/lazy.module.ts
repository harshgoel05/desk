import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student/student.component';
import { StudentService } from './../student.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,

  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,

  MatRippleModule,
  MatSelectModule,
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
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { ElementComponent } from './components/element/element.component';
import { CreatequizComponent } from './components/createquiz/createquiz.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StudentHomeComponent } from './components/StudentComponents/student-home/student-home.component';
import { StudentTestDetailsComponent } from './components/StudentComponents/student-test-details/student-test-details.component';
import { Nav1Component } from './components/nav/nav.component';
import { TestStartComponent } from './components/StudentComponents/test-start/test-start.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LazyComponent,ElementComponent,CreatequizComponent,StudentComponent, StudentTestDetailsComponent, Nav1Component ,StudentHomeComponent, TestStartComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatNativeDateModule,
    MatTableModule,
    DragDropModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[StudentService]
})
export class LazyModule { }
