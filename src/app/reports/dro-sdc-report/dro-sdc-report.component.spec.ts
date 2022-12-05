import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroSdcReportComponent } from './dro-sdc-report.component';

describe('DroSdcReportComponent', () => {
  let component: DroSdcReportComponent;
  let fixture: ComponentFixture<DroSdcReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroSdcReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroSdcReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
