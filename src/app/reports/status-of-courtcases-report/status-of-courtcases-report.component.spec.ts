import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOfCourtcasesReportComponent } from './status-of-courtcases-report.component';

describe('StatusOfCourtcasesReportComponent', () => {
  let component: StatusOfCourtcasesReportComponent;
  let fixture: ComponentFixture<StatusOfCourtcasesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOfCourtcasesReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusOfCourtcasesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
