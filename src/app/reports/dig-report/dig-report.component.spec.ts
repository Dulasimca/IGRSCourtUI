import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIGReportComponent } from './dig-report.component';

describe('DIGReportComponent', () => {
  let component: DIGReportComponent;
  let fixture: ComponentFixture<DIGReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIGReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DIGReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
