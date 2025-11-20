import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../products/product-card/product-card-component';
import { Categories } from '../categories/categories';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/services/product/product-service';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, Categories, CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
    });
  }
}
