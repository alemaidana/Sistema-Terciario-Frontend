import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserProfileComponent } from './single-user-profile.component';

describe('SingleUserProfileComponent', () => {
  let component: SingleUserProfileComponent;
  let fixture: ComponentFixture<SingleUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
