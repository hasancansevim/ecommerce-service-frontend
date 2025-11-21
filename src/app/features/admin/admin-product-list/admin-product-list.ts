import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../core/services/product/product-service';
import { NotificationService } from '../../../core/services/notification/notification';
@Component({
  selector: 'app-admin-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-product-list.html',
  styleUrl: './admin-product-list.scss',
})
export class AdminProductList implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private notifiy: NotificationService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
    });
  }

  deleteProduct(productId: number, productName: string) {
    this.notifiy
      .confirm(
        'Silmek İstediğinize Emin Misiniz ?',
        `${productName} ürünü kalıcı olarak silinecek.`
      )
      .then((isConfirmed) => {
        if (isConfirmed) {
          this.productService.deleteProduct(productId.toString()).subscribe({
            next: (response) => {
              this.notifiy.info(`${productName} adlı ürün silindi`);
              this.getProducts();
            },
            error: (errorResponse) => {
              this.notifiy.error(errorResponse.message);
            },
          });
        }
      });
  }
}
