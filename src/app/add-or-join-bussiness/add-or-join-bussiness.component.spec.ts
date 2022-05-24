import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrJoinBussinessComponent } from './add-or-join-bussiness.component';

describe('AddOrJoinBussinessComponent', () => {
  let component: AddOrJoinBussinessComponent;
  let fixture: ComponentFixture<AddOrJoinBussinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrJoinBussinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrJoinBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
