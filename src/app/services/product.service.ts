import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import  { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    return of([]);
  }
}
