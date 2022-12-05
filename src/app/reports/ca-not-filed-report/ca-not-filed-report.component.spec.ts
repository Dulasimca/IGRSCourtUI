import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaNotFiledReportComponent } from './ca-not-filed-report.component';

describe('CaNotFiledReportComponent', () => {
  let component: CaNotFiledReportComponent;
  let fixture: ComponentFixture<CaNotFiledReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaNotFiledReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaNotFiledReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
