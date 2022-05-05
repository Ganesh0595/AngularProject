import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnvernComponent } from './learnvern.component';

describe('LearnvernComponent', () => {
  let component: LearnvernComponent;
  let fixture: ComponentFixture<LearnvernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnvernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnvernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
