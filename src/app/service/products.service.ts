import { Injectable } from '@angular/core';
import { PageProduct } from '../model/interfaces';
import * as UUID from "uuid";
import { Observable, of, throwError } from 'rxjs';
import {IProduct} from "../model/interface.product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {  }

  public getProducts(): Observable<IProduct[] | any> {
    return this.httpClient.get("http://localhost:8080/products", {responseType: "text"});
  }

  public findByDesignation(designation: string): Observable<IProduct[] | any> {
    return this.httpClient.get(`http://localhost:8080/products/${designation}`);
  }

  public saveProduct(product: IProduct): Observable<IProduct | any> {
    return this.httpClient.post("http://localhost:8080/products", product);
  }

  public updateProduct(product: IProduct, designation: string): Observable<IProduct | any> {
    return this.httpClient.put(`http://localhost:8080/products/${designation}`, product);
  }

  public deleteProduct(designation: string): Observable<IProduct | any> {
    return this.httpClient.delete(`http://localhost:8080/products/${designation}`);
  }

  // private products: Product[] = [
  //   {
  //     id: UUID.v4(),
  //     name: "iPhone 13",
  //     price: 698,
  //     promotion: true
  //   },
  //   {
  //     id: UUID.v4(),
  //     name: "TV UHD",
  //     price: 1298,
  //     promotion: false
  //   },
  //   {
  //     id: UUID.v4(),
  //     name: "Baladeur K-7",
  //     price: 159,
  //     promotion: false
  //   }
  // ]
  //
  // public getAllProducts(): Observable<Array<Product>> {
  //   const random = Math.random()
  //   if (random < 0.1) return throwError(() => new Error("internet connexion problem"))
  //   return of(this.products);
  // }
  //
  // public getProductsPage(pageNumber: number, pageSize: number): Observable<PageProduct> {
  //   const totalPages = ~~(this.products.length / pageSize);
  //   const selectedProductsPage = this.products.slice(pageNumber*pageSize, pageNumber*pageSize+pageSize);
  //   const result: PageProduct = {
  //     products: selectedProductsPage,
  //     pagination: {
  //       currentPage: pageNumber,
  //       size: pageSize,
  //       totalPages: totalPages
  //     }
  //   }
  //   return of(result);
  // }
  //
  // public getByKeyword(keyword: string, pageNumber: number, pageSize: number): Observable<PageProduct> {
  //   let selectedProductsPage = this.products.filter(p => p.name.includes(keyword))
  //   const totalPages = ~~(selectedProductsPage.length / pageSize);
  //   selectedProductsPage = selectedProductsPage.slice(pageNumber*pageSize, pageNumber*pageSize+pageSize);
  //
  //   const result: PageProduct = {
  //     products: selectedProductsPage,
  //     pagination: {
  //       currentPage: pageNumber,
  //       size: pageSize,
  //       totalPages: totalPages
  //     }
  //   }
  //   return of(result);
  // }
  //
  // public removeProduct(id: string): Observable<boolean> {
  //   this.products = this.products.filter(p => p.id !== id)
  //   return of(true)
  // }
  //
  // constructor() {
  //   for (let i=0; i<17; i++) {
  //     this.products.push({
  //       id: UUID.v4(),
  //       name: "iMac 27''",
  //       price: 1459,
  //       promotion: true
  //     })
  //   }
  // }
}
