import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesExamVoucherComponent } from './examenes-exam-voucher.component';

describe('ExamenesExamVoucherComponent', () => {
  let component: ExamenesExamVoucherComponent;
  let fixture: ComponentFixture<ExamenesExamVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesExamVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenesExamVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
