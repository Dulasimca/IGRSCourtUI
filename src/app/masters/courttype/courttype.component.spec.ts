import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourttypeComponent } from './courttype.component';

describe('CourttypeComponent', () => {
  let component: CourttypeComponent;
  let fixture: ComponentFixture<CourttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourttypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
