import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContemptCasesHcReportComponent } from './contempt-cases-hc-report.component';

describe('ContemptCasesHcReportComponent', () => {
  let component: ContemptCasesHcReportComponent;
  let fixture: ComponentFixture<ContemptCasesHcReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContemptCasesHcReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContemptCasesHcReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
