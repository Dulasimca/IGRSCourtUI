import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlpMasterComponent } from './slp-master.component';

describe('SlpMasterComponent', () => {
  let component: SlpMasterComponent;
  let fixture: ComponentFixture<SlpMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlpMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlpMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
