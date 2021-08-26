import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoomComponent } from './update-room.component';

describe('UpdateRoomComponent', () => {
  let component: UpdateRoomComponent;
  let fixture: ComponentFixture<UpdateRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
