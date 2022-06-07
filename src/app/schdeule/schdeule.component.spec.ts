import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchdeuleComponent } from './schdeule.component';

describe('SchdeuleComponent', () => {
  let component: SchdeuleComponent;
  let fixture: ComponentFixture<SchdeuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchdeuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchdeuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
