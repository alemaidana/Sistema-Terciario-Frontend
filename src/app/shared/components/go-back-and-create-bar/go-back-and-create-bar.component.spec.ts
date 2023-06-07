import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBackAndCreateBarComponent } from './go-back-and-create-bar.component';

describe('GoBackAndCreateBarComponent', () => {
  let component: GoBackAndCreateBarComponent;
  let fixture: ComponentFixture<GoBackAndCreateBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoBackAndCreateBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoBackAndCreateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
