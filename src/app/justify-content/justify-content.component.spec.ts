import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifyContentComponent } from './justify-content.component';

describe('JustifyContentComponent', () => {
  let component: JustifyContentComponent;
  let fixture: ComponentFixture<JustifyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustifyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustifyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
