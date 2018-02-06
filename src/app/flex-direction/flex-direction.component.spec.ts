import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexDirectionComponent } from './flex-direction.component';

describe('FlexDirectionComponent', () => {
  let component: FlexDirectionComponent;
  let fixture: ComponentFixture<FlexDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
