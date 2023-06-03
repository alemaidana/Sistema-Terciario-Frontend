import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoAddComponent } from './alumno-add.component';

describe('AlumnoAddComponent', () => {
  let component: AlumnoAddComponent;
  let fixture: ComponentFixture<AlumnoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
