import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFlexComponent } from './ng-flex.component';

describe('NgFlexComponent', () => {
  let component: NgFlexComponent;
  let fixture: ComponentFixture<NgFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
