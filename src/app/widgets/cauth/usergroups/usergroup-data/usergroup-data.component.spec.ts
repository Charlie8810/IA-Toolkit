/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsergroupDataComponent } from './usergroup-data.component';

describe('UsergroupDataComponent', () => {
  let component: UsergroupDataComponent;
  let fixture: ComponentFixture<UsergroupDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsergroupDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergroupDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
