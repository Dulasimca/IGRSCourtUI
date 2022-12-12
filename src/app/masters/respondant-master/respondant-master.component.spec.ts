import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondantMasterComponent } from './respondant-master.component';

describe('RespondantMasterComponent', () => {
  let component: RespondantMasterComponent;
  let fixture: ComponentFixture<RespondantMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondantMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespondantMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
