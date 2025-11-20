import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Product } from '../../../shared/models/product';
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
  };
}
