import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexGrowComponent } from './flex-grow.component';

describe('FlexGrowComponent', () => {
  let component: FlexGrowComponent;
  let fixture: ComponentFixture<FlexGrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexGrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexGrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
