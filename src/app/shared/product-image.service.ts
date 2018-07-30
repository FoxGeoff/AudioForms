import { Injectable } from '@angular/core';
import { ProductImage } from './productImage';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {

  getProducts(): ProductImage[] {
    return productImages;
  }

  getProductById(productId: number): ProductImage {
    return productImages.find(p => p.id === productId);
  }
}

const productImages = [
  {
    "id": 0,
    "fileName": "First-Product-Image"
  },
  {
    "id": 1,
    "fileName": "Second-Product-Image"
  }
]
