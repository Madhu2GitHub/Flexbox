import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { JustifyContentComponent } from './justify-content.component';

describe('JustifyContentComponent', () => {
  let component: JustifyContentComponent;
  let fixture: ComponentFixture<JustifyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustifyContentComponent ],
      imports :[RouterTestingModule],
      providers:[{
        provide: ActivatedRoute,
        useValue: {
          params: Observable.of({justify: 'space-around'})
        }
      }]
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
