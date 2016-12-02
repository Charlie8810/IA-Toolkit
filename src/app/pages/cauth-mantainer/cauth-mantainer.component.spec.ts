/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CauthMantainerComponent } from './cauth-mantainer.component';

describe('CauthMantainerComponent', () => {
  let component: CauthMantainerComponent;
  let fixture: ComponentFixture<CauthMantainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauthMantainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauthMantainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
