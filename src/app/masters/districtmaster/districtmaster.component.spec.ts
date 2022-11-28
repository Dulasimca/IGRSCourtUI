import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictmasterComponent } from './districtmaster.component';

describe('DistrictmasterComponent', () => {
  let component: DistrictmasterComponent;
  let fixture: ComponentFixture<DistrictmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
