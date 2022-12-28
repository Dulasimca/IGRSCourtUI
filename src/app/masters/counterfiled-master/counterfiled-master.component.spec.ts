import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterfiledMasterComponent } from './counterfiled-master.component';

describe('CounterfiledMasterComponent', () => {
  let component: CounterfiledMasterComponent;
  let fixture: ComponentFixture<CounterfiledMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterfiledMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterfiledMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
