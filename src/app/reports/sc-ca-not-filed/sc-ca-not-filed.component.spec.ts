import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScCaNotFiledComponent } from './sc-ca-not-filed.component';

describe('ScCaNotFiledComponent', () => {
  let component: ScCaNotFiledComponent;
  let fixture: ComponentFixture<ScCaNotFiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScCaNotFiledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScCaNotFiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
