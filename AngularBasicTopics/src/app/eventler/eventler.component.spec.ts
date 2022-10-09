import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlerComponent } from './eventler.component';

describe('EventlerComponent', () => {
  let component: EventlerComponent;
  let fixture: ComponentFixture<EventlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
