import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosRegularRecordComponent } from './alumnos-regular-record.component';

describe('AlumnosRegularRecordComponent', () => {
  let component: AlumnosRegularRecordComponent;
  let fixture: ComponentFixture<AlumnosRegularRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosRegularRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosRegularRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
