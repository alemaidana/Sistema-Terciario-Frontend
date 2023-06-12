import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesDetailComponent } from './examenes-detail.component';

describe('ExamenesDetailComponent', () => {
  let component: ExamenesDetailComponent;
  let fixture: ComponentFixture<ExamenesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
