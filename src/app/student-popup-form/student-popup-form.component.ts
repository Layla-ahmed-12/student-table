import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-student-popup',
  templateUrl: './student-popup-form.component.html',
  styleUrls: ['./student-popup-form.component.scss']
})
export class StudentPopupFormComponent implements OnInit {
  @Input() student: any = { name: '', email: '', age: null, dob: '', gender: '' };
  @Input() mode: string;
  onSave = new EventEmitter<any>();
  studentForm: FormGroup;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.studentForm = new FormGroup({
      name: new FormControl(this.student.name, Validators.required),
      email: new FormControl(this.student.email, [Validators.required, Validators.email]),
      age: new FormControl({ value: this.student.age, disabled: true }),
      dob: new FormControl(this.student.dob, Validators.required),       
      gender: new FormControl(this.student.gender, Validators.required) 
    });

    if (this.mode === 'edit') {
      this.calculateAge(); 
    }
    this.studentForm.get('dob').valueChanges.subscribe(() => {
      this.calculateAge(); 
    });
  }

 
  save() {
    if (this.studentForm.valid) {
      this.studentForm.get('age').enable();

      this.onSave.emit(this.studentForm.value);

      this.bsModalRef.hide();
    }
  }

  calculateAge() {
    const dob = this.studentForm.get('dob').value; 
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
    
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }


      this.studentForm.get('age').setValue(age);
    }
  }


  get name() {
    return this.studentForm.get('name');
  }


  get email() {
    return this.studentForm.get('email');
  }

  get dob() {
    return this.studentForm.get('dob');
  }

  get gender() {
    return this.studentForm.get('gender');
  }
}
