import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritappealstatusMasterComponent } from './writappealstatus-master.component';

describe('WritappealstatusMasterComponent', () => {
  let component: WritappealstatusMasterComponent;
  let fixture: ComponentFixture<WritappealstatusMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritappealstatusMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritappealstatusMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
