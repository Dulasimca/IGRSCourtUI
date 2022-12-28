import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseHearingDateComponent } from './case-hearing-date.component';

describe('CaseHearingDateComponent', () => {
  let component: CaseHearingDateComponent;
  let fixture: ComponentFixture<CaseHearingDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseHearingDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseHearingDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
