import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Store } from '../../../shared/models/store';
import { Category } from '../../../shared/models/category';
import { StoreService } from '../../../core/services/store/store-service';
import { CategoryService } from '../../../core/services/category/category-service';
import { ProductService } from '../../../core/services/product/product-service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-admin-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './admin-product-form.html',
  styleUrl: './admin-product-form.scss',
})
export class AdminProductForm implements OnInit {
  productForm: FormGroup;
  updateProductForm: FormGroup;
  stores: Store[] = [];
  categories: Category[] = [];
  isEditMode = false;
  productId: string | null = null;
  updatedProduct!: Product;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private storeService: StoreService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {
    this.productForm = this.createProductForm();
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.isEditMode = !!this.productId;

    this.loadData();

    if (this.isEditMode) {
      this.loadProductData(this.productId);
    }
  }

  createProductForm(): FormGroup {
    return this.formBuilder.group({
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

  saveProduct(): void {
    if (this.productForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    const formData = this.prepareFormData();

    if (this.isEditMode) {
      this.updateProduct(this.productId, formData);
    } else {
      this.addProduct(formData);
    }
  }

  addProduct(formData: any): void {
    console.log(typeof formData);
    console.log(formData);
    // service Product tipi bekliyor
    this.productService.addProduct(formData).subscribe({
      next: (response) => {
        console.log('Response : ', response);
      },
      error: (errorResponse) => {
        console.log('Error Response : ', errorResponse);
      },
    });
  }

  updateProduct(productId: any, formData: any) {
    console.log(typeof productId);
    console.log(typeof formData);
    this.productService.updateProduct(formData, productId).subscribe({
      next: (response) => {
        console.log('Response : ', response);
      },
      error: (errorResponse) => {
        console.log('Error Response : ', errorResponse);
      },
    });
  }

  prepareFormData(): any {
    const formValue = this.productForm.value;
    return {
      name: formValue.name,
      slug: formValue.slug,
      description: formValue.description,
      price: Number(formValue.price),
      basePrice: Number(formValue.basePrice),
      discount: this.calculateDiscount(formValue.price, formValue.basePrice),
      imageUrl: formValue.imageUrl,
      metaDescription: formValue.metaDescription,
      stockQuantity: Number(formValue.stockQuantity),
      isActive: Boolean(formValue.isActive),
      isFeatured: Boolean(formValue.isFeatured),
      categoryId: Number(formValue.categoryId),
      storeId: Number(formValue.storeId),
    };
  }

  markFormGroupTouched(): void {
    Object.keys(this.productForm.controls).forEach((key) => {
      const control = this.productForm.get(key);
      control?.markAsTouched();
    });
  }

  loadData() {
    this.getCategories();
    this.getStores();
  }

  loadProductData(id: any): void {
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (response) => {
          const product = response.data;

          this.productForm.patchValue({
            name: product.name,
            slug: product.slug,
            description: product.description,
            price: product.price,
            basePrice: product.base_price,
            discount: product.discount || this.calculateDiscount(product.price, product.base_price),
            imageUrl: product.image_url,
            metaDescription: product.meta_description,
            stockQuantity: product.stock_quantity,
            isActive: product.is_active,
            isFeatured: product.is_featured,
            categoryId: product.category_id,
            storeId: product.store_id,
          });
        },
        error: (errorResponse) => {
          console.log(errorResponse);
        },
      });
    }
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }
  getStores() {
    this.storeService.getStores().subscribe((response) => {
      this.stores = response.data;
    });
  }

  calculateDiscount(price: number, basePrice: number): number {
    return 1;
  }
}
