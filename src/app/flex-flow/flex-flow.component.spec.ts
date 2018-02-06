import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexFlowComponent } from './flex-flow.component';

describe('FlexFlowComponent', () => {
  let component: FlexFlowComponent;
  let fixture: ComponentFixture<FlexFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
