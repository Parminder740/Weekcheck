import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessSetComponent } from './bussiness-set.component';

describe('BussinessSetComponent', () => {
  let component: BussinessSetComponent;
  let fixture: ComponentFixture<BussinessSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
