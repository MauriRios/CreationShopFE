import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinAlcoholCatalogComponent } from './sin-alcohol-catalog.component';

describe('SinAlcoholCatalogComponent', () => {
  let component: SinAlcoholCatalogComponent;
  let fixture: ComponentFixture<SinAlcoholCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinAlcoholCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinAlcoholCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
