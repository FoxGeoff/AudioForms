import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductImageService } from '../shared/product-image.service';
import { ProductImage } from '../shared/productImage';

@Component({
  selector: 'app-product-image-detail',
  templateUrl: './product-image-detail.component.html',
  styleUrls: ['./product-image-detail.component.css']
})
export class ProductImageDetailComponent implements OnInit {
  productImage: ProductImage;

  constructor(private route: ActivatedRoute, private productImageService: ProductImageService) { }

  ngOnInit() {
    const prodId: number = parseInt(this.route.snapshot.params['productImageId'], 10);
    this.productImage = this.productImageService.getProductById(prodId);
  }

}
