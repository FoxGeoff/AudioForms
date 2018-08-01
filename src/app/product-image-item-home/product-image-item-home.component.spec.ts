import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageItemHomeComponent } from './product-image-item-home.component';

describe('ProductImageItemHomeComponent', () => {
  let component: ProductImageItemHomeComponent;
  let fixture: ComponentFixture<ProductImageItemHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductImageItemHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImageItemHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
