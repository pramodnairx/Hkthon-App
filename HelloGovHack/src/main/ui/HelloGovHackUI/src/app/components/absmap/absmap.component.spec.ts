import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsmapComponent } from './absmap.component';

describe('AbsmapComponent', () => {
  let component: AbsmapComponent;
  let fixture: ComponentFixture<AbsmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
