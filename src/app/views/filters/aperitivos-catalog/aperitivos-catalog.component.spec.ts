import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperitivosCatalogComponent } from './aperitivos-catalog.component';

describe('AperitivosCatalogComponent', () => {
  let component: AperitivosCatalogComponent;
  let fixture: ComponentFixture<AperitivosCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AperitivosCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AperitivosCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
