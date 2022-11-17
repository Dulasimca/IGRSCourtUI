import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritAppealsComponent } from './writ-appeals.component';

describe('WritAppealsComponent', () => {
  let component: WritAppealsComponent;
  let fixture: ComponentFixture<WritAppealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritAppealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritAppealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
