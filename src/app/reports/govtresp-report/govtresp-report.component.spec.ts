import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtrespReportComponent } from './govtresp-report.component';

describe('GovtrespReportComponent', () => {
  let component: GovtrespReportComponent;
  let fixture: ComponentFixture<GovtrespReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovtrespReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovtrespReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
