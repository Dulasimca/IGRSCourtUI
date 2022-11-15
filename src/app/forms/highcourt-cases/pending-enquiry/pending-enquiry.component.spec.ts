import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingEnquiryComponent } from './pending-enquiry.component';

describe('PendingEnquiryComponent', () => {
  let component: PendingEnquiryComponent;
  let fixture: ComponentFixture<PendingEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingEnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
