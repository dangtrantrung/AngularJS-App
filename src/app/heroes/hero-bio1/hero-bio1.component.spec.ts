/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroBio1Component } from './hero-bio1.component';

describe('HeroBio1Component', () => {
  let component: HeroBio1Component;
  let fixture: ComponentFixture<HeroBio1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBio1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
