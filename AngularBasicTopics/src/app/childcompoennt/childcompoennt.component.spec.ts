import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcompoenntComponent } from './childcompoennt.component';

describe('ChildcompoenntComponent', () => {
  let component: ChildcompoenntComponent;
  let fixture: ComponentFixture<ChildcompoenntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildcompoenntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcompoenntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
