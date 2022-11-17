import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawofficersOpinionRegisterComponent } from './lawofficers-opinion-register.component';

describe('LawofficersOpinionRegisterComponent', () => {
  let component: LawofficersOpinionRegisterComponent;
  let fixture: ComponentFixture<LawofficersOpinionRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawofficersOpinionRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawofficersOpinionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
