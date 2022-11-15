import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentRespondentComponent } from './government-respondent.component';

describe('GovernmentRespondentComponent', () => {
  let component: GovernmentRespondentComponent;
  let fixture: ComponentFixture<GovernmentRespondentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentRespondentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentRespondentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
