import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card-component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../core/services/product/product-service';
import { CategoryService } from '../../../core/services/category/category-service';
import { StoreService } from '../../../core/services/store/store-service';
import { Store } from '../../../shared/models/store';
import { Category } from '../../../shared/models/category';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  products: Product[];
  stores: Store[];
  categories: Category[];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private storeService: StoreService
  ) {}

  ngOnInit() {
    this.getProducts();
    this.getCategories();
    this.getStores();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
    });
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

  getStores(): void {
    this.storeService.getStores().subscribe((response) => {
      this.stores = response.data;
    });
  }
}
