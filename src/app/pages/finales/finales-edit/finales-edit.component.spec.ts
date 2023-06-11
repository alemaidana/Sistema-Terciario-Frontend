import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalesEditComponent } from './finales-edit.component';

describe('FinalesEditComponent', () => {
  let component: FinalesEditComponent;
  let fixture: ComponentFixture<FinalesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
