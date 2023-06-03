import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlumnoAddAndEditComponent } from './form-alumno-add-and-edit.component';

describe('FormAlumnoAddAndEditComponent', () => {
  let component: FormAlumnoAddAndEditComponent;
  let fixture: ComponentFixture<FormAlumnoAddAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlumnoAddAndEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAlumnoAddAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
