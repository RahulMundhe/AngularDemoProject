import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayComponenetComponent } from './array-componenet.component';

describe('ArrayComponenetComponent', () => {
  let component: ArrayComponenetComponent;
  let fixture: ComponentFixture<ArrayComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
