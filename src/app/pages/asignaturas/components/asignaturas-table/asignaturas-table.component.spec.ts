import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasTableComponent } from './asignaturas-table.component';

describe('AsignaturasTableComponent', () => {
  let component: AsignaturasTableComponent;
  let fixture: ComponentFixture<AsignaturasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturasTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
