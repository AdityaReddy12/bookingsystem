import { ComponentFixture, TestBed } from '@angular/core/testing';

import { patientlistComponent } from './patientlist.component';

describe('StudentlistComponent', () => {
  let component: patientlistComponent;
  let fixture: ComponentFixture<patientlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ patientlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(patientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
