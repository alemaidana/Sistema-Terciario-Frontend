import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteEditComponent } from './docente-edit.component';

describe('DocenteEditComponent', () => {
  let component: DocenteEditComponent;
  let fixture: ComponentFixture<DocenteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
