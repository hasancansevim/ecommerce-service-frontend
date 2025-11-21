import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../../../shared/models/category';
import { ListResponseModel } from '../../../shared/models/response-models/list-response-model';
import { SingleResponseModel } from '../../../shared/models/response-models/single-response-model';
import { ResponseModel } from '../../../shared/models/response-models/response-model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'http://localhost:8080/api/v1/categories';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }

  addCategory(category: Category): Observable<SingleResponseModel<Category>> {
    return this.httpClient.post<SingleResponseModel<Category>>(this.apiUrl, category);
  }

  deleteCategory(id: string) {
    let newUrl = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<ResponseModel>(newUrl);
  }
}
