import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainprayermasterComponent } from './mainprayermaster.component';

describe('MainprayermasterComponent', () => {
  let component: MainprayermasterComponent;
  let fixture: ComponentFixture<MainprayermasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainprayermasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainprayermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
