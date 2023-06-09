import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosNavBarComponent } from './alumnos-nav-bar.component';

describe('AlumnosNavBarComponent', () => {
  let component: AlumnosNavBarComponent;
  let fixture: ComponentFixture<AlumnosNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
