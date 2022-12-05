import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupremeCourtCasesReportComponent } from './supreme-court-cases-report.component';

describe('SupremeCourtCasesReportComponent', () => {
  let component: SupremeCourtCasesReportComponent;
  let fixture: ComponentFixture<SupremeCourtCasesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupremeCourtCasesReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupremeCourtCasesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
