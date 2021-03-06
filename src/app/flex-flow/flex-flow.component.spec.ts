import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { FlexFlowComponent } from './flex-flow.component';

describe('FlexFlowComponent', () => {
  let component: FlexFlowComponent;
  let fixture: ComponentFixture<FlexFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexFlowComponent ],
      imports :[RouterTestingModule],
      providers:[{
        provide: ActivatedRoute,
        useValue: {
          params: Observable.of({wrap: 'wrap-reverse',direction:'row'})
        }
      }]
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
