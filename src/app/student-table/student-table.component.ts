import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StudentPopupFormComponent } from '../student-popup-form/student-popup-form.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent {
  students = [];
  
  selectedStudents: any[] = [];

  constructor(private modalService: BsModalService) {}
  ngOnInit() {
    const storedStudents = JSON.parse(localStorage.getItem('students') || '[]');
    if (storedStudents.length > 0) {
      this.students = storedStudents;
    } else {
      this.students = [
        { name: 'John Doe', email: 'john@example.com', age: 20, dob: '2003-01-01', gender: 'Male' },
        { name: 'Jane Smith', email: 'jane@example.com', age: 22, dob: '2001-03-05', gender: 'Female' },
        { name: 'Mark Smith', email: 'Mark@example.com', age: 22, dob: '2001-03-05', gender: 'Male' },
        { name: 'William John', email: 'Will@example.com', age: 24, dob: '2000-05-09', gender: 'Male' },
        { name: 'Jane Smith', email: 'jane@example.com', age: 22, dob: '2001-03-05', gender: 'Female' },
        { name: 'Jane Smith', email: 'jane@example.com', age: 22, dob: '2001-03-05', gender: 'Female' },
        { name: 'Jane Smith', email: 'jane@example.com', age: 22, dob: '2001-03-05', gender: 'Female' }
      ];
    }
  }

  AddPopup() {
    const modalRef: BsModalRef = this.modalService.show(StudentPopupFormComponent);
  modalRef.content.onSave.subscribe((newStudent: any) => {
    this.students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(this.students));
    console.log(newStudent);
    });
  }

  EditPopup(student: any) {
    const modalRef: BsModalRef = this.modalService.show(StudentPopupFormComponent, {
      initialState: { mode: 'edit', student }
    });
    modalRef.content.onSave.subscribe((updatedStudent: any) => {
      const index = this.students.indexOf(student);
      this.students[index] = updatedStudent;
      localStorage.setItem('students', JSON.stringify(this.students));
    });
  }

  deleteSelectedStudents() {
    this.students = this.students.filter(student => !this.selectedStudents.includes(student));
    localStorage.setItem('students', JSON.stringify(this.students));
    this.selectedStudents = [];
  }
  toggleSelectAll(event: any) {
    if (event.target.checked) {
      this.selectedStudents = [...this.students];
    } else {
      this.selectedStudents = []; 
    }
  }
  toggleSelectStudent(student: any, event: any) {
    if (event.target.checked) {
      this.selectedStudents.push(student);
    } else {
      this.selectedStudents = this.selectedStudents.filter(s => s !== student);
    }
  }
}

