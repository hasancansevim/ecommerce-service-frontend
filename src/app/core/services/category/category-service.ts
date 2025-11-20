import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../../../shared/models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'http://localhost:8080/api/v1/categories';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<any[]>(this.apiUrl).pipe(
      map((categories) =>
        categories.map((category) => ({
          id: category.Id,
          name: category.Name,
          description: category.Description,
          isActive: category.IsActive,
        }))
      )
    );
  }
}
