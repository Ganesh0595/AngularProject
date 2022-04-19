import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionCComponent } from './interaction-c.component';

describe('InteractionCComponent', () => {
  let component: InteractionCComponent;
  let fixture: ComponentFixture<InteractionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
