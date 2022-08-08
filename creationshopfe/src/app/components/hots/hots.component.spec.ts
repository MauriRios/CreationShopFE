import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotsComponent } from './hots.component';

describe('HotsComponent', () => {
  let component: HotsComponent;
  let fixture: ComponentFixture<HotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
