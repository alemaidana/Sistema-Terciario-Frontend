import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteDetailComponent } from './docente-detail.component';

describe('DocenteDetailComponent', () => {
  let component: DocenteDetailComponent;
  let fixture: ComponentFixture<DocenteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
