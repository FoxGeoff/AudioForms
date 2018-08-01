import { Component, OnInit, Input } from '@angular/core';
import { ProductImage } from '../shared/productImage';

@Component({
  selector: 'app-product-image-item',
  templateUrl: './product-image-item.component.html',
  styleUrls: ['./product-image-item.component.css']
})
export class ProductImageItemComponent implements OnInit {
  @Input() productImage: ProductImage;

  constructor() { }

  ngOnInit() {
  }

}
