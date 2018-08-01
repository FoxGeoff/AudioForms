import { Component, OnInit } from '@angular/core';
import { ProductImage } from '../shared/productImage';
import { ProductImageService } from '../shared/product-image.service';

@Component({
  selector: 'app-product-image-item-home',
  templateUrl: './product-image-item-home.component.html',
  styleUrls: ['./product-image-item-home.component.css']
})
export class ProductImageItemHomeComponent implements OnInit {

  productImages: ProductImage[] = []
  constructor(private productImageService: ProductImageService) { }

  ngOnInit() {
    this.productImages = this.productImageService.getProducts();
  }

}
