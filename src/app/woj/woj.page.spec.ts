import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WojPage } from './woj.page';

describe('WojPage', () => {
  let component: WojPage;
  let fixture: ComponentFixture<WojPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WojPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WojPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
