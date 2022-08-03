import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRecordValidatorComponent } from './single-record-validator.component';

describe('SingleRecordValidatorComponent', () => {
  let component: SingleRecordValidatorComponent;
  let fixture: ComponentFixture<SingleRecordValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRecordValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRecordValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
