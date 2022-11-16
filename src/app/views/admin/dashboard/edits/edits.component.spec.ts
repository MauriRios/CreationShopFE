import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsComponent } from './edits.component';

describe('EditsComponent', () => {
  let component: EditsComponent;
  let fixture: ComponentFixture<EditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
