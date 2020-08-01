import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BMIComponentComponent } from './bmicomponent.component';

describe('BMIComponentComponent', () => {
  let component: BMIComponentComponent;
  let fixture: ComponentFixture<BMIComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BMIComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BMIComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
