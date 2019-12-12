/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChiefComplaintComponent } from './chief-complaint.component';

describe('ChiefComplaintComponent', () => {
  let component: ChiefComplaintComponent;
  let fixture: ComponentFixture<ChiefComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiefComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiefComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
