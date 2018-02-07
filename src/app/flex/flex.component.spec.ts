import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FlexComponent } from './flex.component';

describe('FlexComponent', () => {
  let component: FlexComponent;
  let fixture: ComponentFixture<FlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexComponent ],
      imports :[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
