import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskysCatalogComponent } from './whiskys-catalog.component';

describe('WhiskysCatalogComponent', () => {
  let component: WhiskysCatalogComponent;
  let fixture: ComponentFixture<WhiskysCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiskysCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiskysCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
