import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupremecourtCaseDetailsComponent } from './supremecourt-case-details.component';

describe('SupremecourtCaseDetailsComponent', () => {
  let component: SupremecourtCaseDetailsComponent;
  let fixture: ComponentFixture<SupremecourtCaseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupremecourtCaseDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupremecourtCaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
