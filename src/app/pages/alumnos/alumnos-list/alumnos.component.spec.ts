import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosListComponent } from './alumnos.component';

describe('AlumnosComponent', () => {
  let component: AlumnosListComponent;
  let fixture: ComponentFixture<AlumnosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
