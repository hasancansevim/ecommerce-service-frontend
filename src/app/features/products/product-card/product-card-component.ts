import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.scss',
})
export class ProductCardComponent {
  product: Product = {
    id: 1,
    name: 'Ürün Adı',
    price: 80,
    basePrice: 100,
    discount: 20,
    imageUrl: 'https://picsum.photos/200/300',
    stockQuantity: 40,
    slug: 'abc',
    isActive: true,
  };
}
