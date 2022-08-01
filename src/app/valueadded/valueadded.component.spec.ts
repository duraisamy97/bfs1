import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueaddedComponent } from './valueadded.component';

describe('ValueaddedComponent', () => {
  let component: ValueaddedComponent;
  let fixture: ComponentFixture<ValueaddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueaddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
