import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasetypeComponent } from './casetype.component';

describe('CasetypeComponent', () => {
  let component: CasetypeComponent;
  let fixture: ComponentFixture<CasetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasetypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
