import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervezasCatalogComponent } from './cervezas-catalog.component';

describe('CervezasCatalogComponent', () => {
  let component: CervezasCatalogComponent;
  let fixture: ComponentFixture<CervezasCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CervezasCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CervezasCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
