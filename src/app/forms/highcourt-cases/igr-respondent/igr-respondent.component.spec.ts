import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgrRespondentComponent } from './igr-respondent.component';

describe('IgrRespondentComponent', () => {
  let component: IgrRespondentComponent;
  let fixture: ComponentFixture<IgrRespondentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgrRespondentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgrRespondentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
