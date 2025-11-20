import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../../../shared/models/product';
import { ListResponseModel } from '../../../shared/models/response-models/list-response-model';
import { SingleResponseModel } from '../../../shared/models/response-models/single-response-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:8080/api/v1/products';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }

  getProductById(id: number): Observable<SingleResponseModel<Product>> {
    let newUrl = this.apiUrl + '/' + id;

    return this.httpClient.get<SingleResponseModel<Product>>(newUrl);
  }

  addProduct(product: Product): Observable<SingleResponseModel<Product>> {
    return this.httpClient.post<SingleResponseModel<Product>>(this.apiUrl, product);
  }
}
