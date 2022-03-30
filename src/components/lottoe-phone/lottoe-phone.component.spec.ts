import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoePhoneComponent } from './lottoe-phone.component';

describe('LottoePhoneComponent', () => {
  let component: LottoePhoneComponent;
  let fixture: ComponentFixture<LottoePhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottoePhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
