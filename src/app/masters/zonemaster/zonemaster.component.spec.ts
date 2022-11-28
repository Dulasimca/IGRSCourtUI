import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonemasterComponent } from './zonemaster.component';

describe('ZonemasterComponent', () => {
  let component: ZonemasterComponent;
  let fixture: ComponentFixture<ZonemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonemasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
