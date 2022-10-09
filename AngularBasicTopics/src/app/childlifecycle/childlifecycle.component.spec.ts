import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildlifecycleComponent } from './childlifecycle.component';

describe('ChildlifecycleComponent', () => {
  let component: ChildlifecycleComponent;
  let fixture: ComponentFixture<ChildlifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildlifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildlifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
