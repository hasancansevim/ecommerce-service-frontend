import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Store } from '../../../shared/models/store';
import { ListResponseModel } from '../../../shared/models/response-models/list-response-model';
import { ResponseModel } from '../../../shared/models/response-models/response-model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  apiUrl = 'http://localhost:8080/api/v1/stores';

  constructor(private httpClient: HttpClient) {}

  getStores(): Observable<ListResponseModel<Store>> {
    return this.httpClient.get<ListResponseModel<Store>>(this.apiUrl);
  }

  deleteStore(id: string) {
    let newUrl = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<ResponseModel>(newUrl);
  }
}
