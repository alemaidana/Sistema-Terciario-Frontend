import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesAddComponent } from './examenes-add.component';

describe('ExamenesAddComponent', () => {
  let component: ExamenesAddComponent;
  let fixture: ComponentFixture<ExamenesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
