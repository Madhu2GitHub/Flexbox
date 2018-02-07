import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { FlexWrapComponent } from './flex-wrap.component';

describe('FlexWrapComponent', () => {
  let component: FlexWrapComponent;
  let fixture: ComponentFixture<FlexWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexWrapComponent ],
      imports :[RouterTestingModule],
      providers:[{
        provide: ActivatedRoute,
        useValue: {
          params: Observable.of({wrap: 'wrap'})
        }
      }]
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
