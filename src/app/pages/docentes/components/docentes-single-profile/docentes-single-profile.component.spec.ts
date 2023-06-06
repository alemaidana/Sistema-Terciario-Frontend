import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesSingleProfileComponent } from './docentes-single-profile.component';

describe('DocentesSingleProfileComponent', () => {
  let component: DocentesSingleProfileComponent;
  let fixture: ComponentFixture<DocentesSingleProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocentesSingleProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentesSingleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
