import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec6Component } from './sec6.component';

describe('Sec6Component', () => {
  let component: Sec6Component;
  let fixture: ComponentFixture<Sec6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
