import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Store } from '../../../shared/models/store';
import { Category } from '../../../shared/models/category';
import { StoreService } from '../../../core/services/store/store-service';
import { CategoryService } from '../../../core/services/category/category-service';
import { ProductService } from '../../../core/services/product/product-service';

@Component({
  selector: 'app-admin-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-product-form.html',
  styleUrl: './admin-product-form.scss',
})
export class AdminProductForm implements OnInit {
  productAddForm: FormGroup;
  stores: Store[] = [];
  categories: Category[] = [];
  isEditMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private storeService: StoreService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
    this.getCategories();
    this.getStores();
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

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      slug: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      basePrice: [0, [Validators.required, Validators.min(0)]],
      discount: [0, [Validators.min(0), Validators.max(100)]],
      imageUrl: ['', Validators.required],
      metaDescription: ['', Validators.maxLength(160)],
      stockQuantity: [0, [Validators.required, Validators.min(0)]],
      isActive: [true, Validators.required],
      isFeatured: [false],
      categoryId: ['', Validators.required],
      storeId: ['', Validators.required],
    });
  }

  addProduct() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      productModel.discount = this.calculateDiscount(productModel.price, productModel.basePrice);
      productModel.storeId = Number(productModel.storeId);
      productModel.categoryId = Number(productModel.categoryId);
      this.productService.addProduct(productModel).subscribe(
        (response) => {
          console.log('Ürün Eklendi');
        },
        (errorResponse) => {
          console.log('Bir Hata Oluştu :', errorResponse);
          console.log('ProductModel : ', productModel);
        }
      );
    }
  }

  calculateDiscount(price: number, basePrice: number): number {
    if (basePrice > price && basePrice > 0) {
      return Math.round(((basePrice - price) / basePrice) * 100);
    }
    return 0;
  }
}
