import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeoffViewComponent } from './timeoff-view.component';

describe('TimeoffViewComponent', () => {
  let component: TimeoffViewComponent;
  let fixture: ComponentFixture<TimeoffViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeoffViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeoffViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
