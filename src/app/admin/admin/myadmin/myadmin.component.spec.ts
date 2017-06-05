import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyadminComponent } from './myadmin.component';

describe('MyadminComponent', () => {
  let component: MyadminComponent;
  let fixture: ComponentFixture<MyadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
