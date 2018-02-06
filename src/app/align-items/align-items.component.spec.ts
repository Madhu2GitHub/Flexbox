import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignItemsComponent } from './align-items.component';

describe('AlignItemsComponent', () => {
  let component: AlignItemsComponent;
  let fixture: ComponentFixture<AlignItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
