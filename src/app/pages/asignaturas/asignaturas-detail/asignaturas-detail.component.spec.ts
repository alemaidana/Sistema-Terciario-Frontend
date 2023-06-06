import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasDetailComponent } from './asignaturas-detail.component';

describe('AsignaturasDetailComponent', () => {
  let component: AsignaturasDetailComponent;
  let fixture: ComponentFixture<AsignaturasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturasDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
