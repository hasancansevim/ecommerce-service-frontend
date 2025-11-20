import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  quantity: number = 1;

  // Dummy Product
  product = {
    id: 101,
    name: 'Sony WH-1000XM5 Gürültü Engelleyici Kulaklık',
    description:
      'Sektör lideri gürültü engelleme özelliği, 8 mikrofonlu sistem ve eşsiz ses kalitesi ile müzik deneyiminizi zirveye taşıyın.',
    price: 8499.9,
    basePrice: 9500.0,
    discount: 15,
    stockQuantity: 5,
    imageUrl: 'https://placehold.co/600x600/png',
  };
}
