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
    base_price: 100,
    price: 80,
    discount: 20,
    image_url: 'url',
    stock_quantity: 40,
    slug: 'abc',
    is_active: true,
    category_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
    description: 'dnasdn',
    is_featured: true,
    meta_description: 'dnasldn',
    store_id: 5,
  };
}
