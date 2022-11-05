import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinosCatalogComponent } from './vinos-catalog.component';

describe('VinosCatalogComponent', () => {
  let component: VinosCatalogComponent;
  let fixture: ComponentFixture<VinosCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinosCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinosCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
