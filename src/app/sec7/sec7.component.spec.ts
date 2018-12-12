import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec7Component } from './sec7.component';

describe('Sec7Component', () => {
  let component: Sec7Component;
  let fixture: ComponentFixture<Sec7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
