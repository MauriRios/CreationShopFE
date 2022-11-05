import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestiladosCatalogComponent } from './destilados-catalog.component';

describe('DestiladosCatalogComponent', () => {
  let component: DestiladosCatalogComponent;
  let fixture: ComponentFixture<DestiladosCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestiladosCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestiladosCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
