import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../core/services/product/product-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.scss',
})
export class ProductCardComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  products: Product[] = [];
  getProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
