import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersRespondentComponent } from './others-respondent.component';

describe('OthersRespondentComponent', () => {
  let component: OthersRespondentComponent;
  let fixture: ComponentFixture<OthersRespondentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersRespondentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersRespondentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
