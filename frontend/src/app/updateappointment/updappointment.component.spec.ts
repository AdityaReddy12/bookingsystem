import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateappointmentComponent } from './updappointment.component';

describe('UpdatestudentComponent', () => {
  let component: UpdateappointmentComponent;
  let fixture: ComponentFixture<UpdateappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateappointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
