import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeboundJudgementsDirectionsComponent } from './timebound-judgements-directions.component';

describe('TimeboundJudgementsDirectionsComponent', () => {
  let component: TimeboundJudgementsDirectionsComponent;
  let fixture: ComponentFixture<TimeboundJudgementsDirectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeboundJudgementsDirectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeboundJudgementsDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
