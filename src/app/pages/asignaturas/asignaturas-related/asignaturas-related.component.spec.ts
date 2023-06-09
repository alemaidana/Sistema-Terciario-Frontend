import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasRelatedComponent } from './asignaturas-related.component';

describe('AsignaturasRelatedComponent', () => {
  let component: AsignaturasRelatedComponent;
  let fixture: ComponentFixture<AsignaturasRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturasRelatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturasRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
