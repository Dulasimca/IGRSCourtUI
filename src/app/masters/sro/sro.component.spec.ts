import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SroComponent } from './sro.component';

describe('SroComponent', () => {
  let component: SroComponent;
  let fixture: ComponentFixture<SroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
