import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasAddComponent } from './asignaturas-add.component';

describe('AsignaturasAddComponent', () => {
  let component: AsignaturasAddComponent;
  let fixture: ComponentFixture<AsignaturasAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturasAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
