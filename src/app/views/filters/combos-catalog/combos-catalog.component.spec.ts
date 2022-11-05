import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosCatalogComponent } from './combos-catalog.component';

describe('CombosCatalogComponent', () => {
  let component: CombosCatalogComponent;
  let fixture: ComponentFixture<CombosCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombosCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombosCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
