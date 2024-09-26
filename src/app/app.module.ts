import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgSelectModule } from '@ng-select/ng-select';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentPopupFormComponent } from './student-popup-form/student-popup-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    StudentPopupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgSelectModule, 
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [BsModalService, BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
