import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalesListComponent } from './finales-list.component';

describe('FinalesListComponent', () => {
  let component: FinalesListComponent;
  let fixture: ComponentFixture<FinalesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
