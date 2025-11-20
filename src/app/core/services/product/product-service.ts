import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../../../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:8080/api/v1/products';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<any[]>(this.apiUrl).pipe(
      map((products) =>
        products.map((product) => ({
          id: product.Id,
          name: product.Name,
          slug: product.Slug,
          description: product.Description,
          price: product.Price,
          basePrice: product.BasePrice,
          discount: product.Discount,
          imageUrl: product.ImageUrl,
          metaDescription: product.MetaDescription,
          stockQuantity: product.StockQuantity,
          isActive: product.IsActive,
          isFeatured: product.IsFeatured,
          categoryId: product.CategoryId,
          storeId: product.StoreId,
          createdAt: new Date(product.CreatedAt),
          updatedAt: new Date(product.UpdatedAt),
        }))
      )
    );
  }

  getProductById(id: number): Observable<Product> {
    let newUrl = this.apiUrl + '/' + id;

    return this.httpClient.get<any>(newUrl).pipe(
      map((product) => ({
        id: product.Id,
        name: product.Name,
        slug: product.Slug,
        description: product.Description,
        price: product.Price,
        basePrice: product.BasePrice,
        discount: product.Discount,
        imageUrl: product.ImageUrl,
        metaDescription: product.MetaDescription,
        stockQuantity: product.StockQuantity,
        isActive: product.IsActive,
        isFeatured: product.IsFeatured,
        categoryId: product.CategoryId,
        storeId: product.StoreId,
        createdAt: new Date(product.CreatedAt),
        updatedAt: new Date(product.UpdatedAt),
      }))
    );
  }
}
