import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec8Component } from './sec8.component';

describe('Sec8Component', () => {
  let component: Sec8Component;
  let fixture: ComponentFixture<Sec8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
