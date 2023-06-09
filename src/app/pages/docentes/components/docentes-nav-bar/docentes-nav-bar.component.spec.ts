import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesNavBarComponent } from './docentes-nav-bar.component';

describe('DocentesNavBarComponent', () => {
  let component: DocentesNavBarComponent;
  let fixture: ComponentFixture<DocentesNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocentesNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentesNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
