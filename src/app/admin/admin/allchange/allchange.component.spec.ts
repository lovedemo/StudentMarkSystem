import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllchangeComponent } from './allchange.component';

describe('AllchangeComponent', () => {
  let component: AllchangeComponent;
  let fixture: ComponentFixture<AllchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
