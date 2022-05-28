import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftRolesComponent } from './shift-roles.component';

describe('ShiftRolesComponent', () => {
  let component: ShiftRolesComponent;
  let fixture: ComponentFixture<ShiftRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
