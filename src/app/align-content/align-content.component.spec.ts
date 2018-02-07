import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlignContentComponent } from './align-content.component';
import {ActivatedRoute} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
describe('AlignContentComponent', () => {
  let component: AlignContentComponent;
  let fixture: ComponentFixture<AlignContentComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignContentComponent ],
      imports :[RouterTestingModule],
      providers:[{
        provide: ActivatedRoute,
        useValue: {
          params: Observable.of({align: 'space-between'})
        }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
