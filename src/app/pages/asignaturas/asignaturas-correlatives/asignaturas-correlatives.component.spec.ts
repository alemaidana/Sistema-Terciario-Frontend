import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasCorrelativesComponent } from './asignaturas-correlatives.component';

describe('AsignaturasCorrelativesComponent', () => {
  let component: AsignaturasCorrelativesComponent;
  let fixture: ComponentFixture<AsignaturasCorrelativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturasCorrelativesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturasCorrelativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
