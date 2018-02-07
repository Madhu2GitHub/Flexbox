import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FlexDirectionComponent } from './flex-direction.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ActivatedRoute} from '@angular/router';

describe('FlexDirectionComponent', () => {
  let component: FlexDirectionComponent;
  let fixture: ComponentFixture<FlexDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexDirectionComponent ],
      imports :[RouterTestingModule],
      providers:[{
        provide: ActivatedRoute,
        useValue: {
          params: Observable.of({direction: 'row-reverse'})
        }
      }]
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
