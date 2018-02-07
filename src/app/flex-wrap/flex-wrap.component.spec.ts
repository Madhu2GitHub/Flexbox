import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FlexWrapComponent } from './flex-wrap.component';

describe('FlexWrapComponent', () => {
  let component: FlexWrapComponent;
  let fixture: ComponentFixture<FlexWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexWrapComponent ],
      imports :[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
