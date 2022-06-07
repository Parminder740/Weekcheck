import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeoffCreateComponent } from './timeoff-create.component';

describe('TimeoffCreateComponent', () => {
  let component: TimeoffCreateComponent;
  let fixture: ComponentFixture<TimeoffCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeoffCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeoffCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
