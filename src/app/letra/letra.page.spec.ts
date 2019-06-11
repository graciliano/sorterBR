import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraPage } from './letra.page';

describe('LetraPage', () => {
  let component: LetraPage;
  let fixture: ComponentFixture<LetraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
