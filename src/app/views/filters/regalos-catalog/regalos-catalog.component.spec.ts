import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegalosCatalogComponent } from './regalos-catalog.component';

describe('RegalosCatalogComponent', () => {
  let component: RegalosCatalogComponent;
  let fixture: ComponentFixture<RegalosCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegalosCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegalosCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
