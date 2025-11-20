import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Product } from '../../../shared/models/product';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
@Component({
  selector: 'app-admin-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-product-list.html',
  styleUrl: './admin-product-list.scss',
})
export class AdminProductList {
  product: Product = {
    id: 1,
    name: 'abc',
    basePrice: 100,
    price: 80,
    discount: 20,
    imageUrl: 'url',
    stockQuantity: 40,
    slug: 'abc',
    isActive: true,
    categoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    description: 'dnasdn',
    isFeatured: true,
    metaDescription: 'dnasldn',
    storeId: 5,
  };
}
