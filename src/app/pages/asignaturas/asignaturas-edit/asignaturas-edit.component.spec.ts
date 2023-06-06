import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasEditComponent } from './asignaturas-edit.component';

describe('AsignaturasEditComponent', () => {
  let component: AsignaturasEditComponent;
  let fixture: ComponentFixture<AsignaturasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturasEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
