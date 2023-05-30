import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoAddAndEditComponent } from './alumno-add-and-edit.component';

describe('AlumnoAddAndEditComponent', () => {
  let component: AlumnoAddAndEditComponent;
  let fixture: ComponentFixture<AlumnoAddAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoAddAndEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoAddAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
