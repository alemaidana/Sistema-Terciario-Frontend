import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalesDetailComponent } from './finales-detail.component';

describe('FinalesDetailComponent', () => {
  let component: FinalesDetailComponent;
  let fixture: ComponentFixture<FinalesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
