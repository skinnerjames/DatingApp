/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiagFormulationComponent } from './diag-formulation.component';

describe('DiagFormulationComponent', () => {
  let component: DiagFormulationComponent;
  let fixture: ComponentFixture<DiagFormulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagFormulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagFormulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
