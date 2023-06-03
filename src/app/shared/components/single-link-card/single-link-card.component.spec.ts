import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLinkCardComponent } from './single-link-card.component';

describe('SingleLinkCardComponent', () => {
  let component: SingleLinkCardComponent;
  let fixture: ComponentFixture<SingleLinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLinkCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleLinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
