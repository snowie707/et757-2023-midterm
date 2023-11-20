import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private apiUrl = 'https://vbbm14yl19.execute-api.us-east-1.amazonaws.com/prod/bean_products';

  constructor(private http: HttpClient) {}

  getCoffeeData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
