import { ComponentFixture, TestBed } from '@angular/core/testing';

import { patientdetailsComponent } from './patientdetails.component';

describe('StudentdetailsComponent', () => {
  let component: patientdetailsComponent;
  let fixture: ComponentFixture<patientdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ patientdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(patientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
