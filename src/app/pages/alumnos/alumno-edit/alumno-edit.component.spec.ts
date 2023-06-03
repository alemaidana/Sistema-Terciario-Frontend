import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoEditComponent } from './alumno-edit.component';

describe('AlumnoEditComponent', () => {
  let component: AlumnoEditComponent;
  let fixture: ComponentFixture<AlumnoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
