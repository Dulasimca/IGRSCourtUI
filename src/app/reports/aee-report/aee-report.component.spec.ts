import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeeReportComponent } from './aee-report.component';

describe('AeeReportComponent', () => {
  let component: AeeReportComponent;
  let fixture: ComponentFixture<AeeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeeReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
