import { Injectable } from '@angular/core';
import { Product } from '../model/interfaces';
import * as uuid from "uuid";
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      id: uuid.v4(),
      name: "iPhone 13",
      price: 698,
      promotion: true
    },
    {
      id: uuid.v4(),
      name: "TV UHD",
      price: 1298,
      promotion: true
    },
    {
      id: uuid.v4(),
      name: "iMac 27''",
      price: 1459,
      promotion: true
    }
  ]

  public getAllProducts(): Observable<Array<Product>> {
    const random = Math.random()
    if (random < 0.1) return throwError(() => new Error("internet connexion problem"))
    return of(this.products);
  }

  public getByKeyword(keyword: string): Observable<Array<Product>> {
    const result = this.products.filter(p => p.name.includes(keyword))
    return of(result);
  }

  public removeProduct(id: string): Observable<boolean> {
    this.products = this.products.filter(p => p.id !== id)
    return of(true)
  }
  
  constructor() { }
}
