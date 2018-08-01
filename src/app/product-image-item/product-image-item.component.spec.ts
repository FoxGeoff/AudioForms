import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageItemComponent } from './product-image-item.component';

describe('ProductImageItemComponent', () => {
  let component: ProductImageItemComponent;
  let fixture: ComponentFixture<ProductImageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductImageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
