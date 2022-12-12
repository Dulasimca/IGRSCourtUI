import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgementMasterComponent } from './judgement-master.component';

describe('JudgementMasterComponent', () => {
  let component: JudgementMasterComponent;
  let fixture: ComponentFixture<JudgementMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgementMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgementMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
