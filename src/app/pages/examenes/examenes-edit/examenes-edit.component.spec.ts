import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesEditComponent } from './examenes-edit.component';

describe('ExamenesEditComponent', () => {
  let component: ExamenesEditComponent;
  let fixture: ComponentFixture<ExamenesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
