import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesGridComponent } from './docentes-grid.component';

describe('DocentesGridComponent', () => {
  let component: DocentesGridComponent;
  let fixture: ComponentFixture<DocentesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocentesGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
