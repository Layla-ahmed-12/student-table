import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPopupFormComponent } from './student-popup-form.component';

describe('StudentPopupFormComponent', () => {
  let component: StudentPopupFormComponent;
  let fixture: ComponentFixture<StudentPopupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPopupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPopupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
