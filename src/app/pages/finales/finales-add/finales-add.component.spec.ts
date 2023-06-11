import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalesAddComponent } from './finales-add.component';

describe('FinalesAddComponent', () => {
  let component: FinalesAddComponent;
  let fixture: ComponentFixture<FinalesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
