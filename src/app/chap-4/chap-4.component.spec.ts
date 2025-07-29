import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap4Component } from './chap-4.component';

describe('Chap4Component', () => {
  let component: Chap4Component;
  let fixture: ComponentFixture<Chap4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chap4Component]
    });
    fixture = TestBed.createComponent(Chap4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
