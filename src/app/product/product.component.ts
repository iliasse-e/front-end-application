import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Role } from '../enum/role';
import { PageProduct, Pagination, Product } from '../model/interfaces';
import { LoginService } from '../service/login.service';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products!: Product[];
  pagination : Pagination = {
    currentPage: 0,
    size: 5,
    totalPages: 1
  }
  errorMsg!: string;
  searchFormGroup!: FormGroup;
  isSearching: boolean = false;
  isAdmin: boolean = this.loginService.hasRole(Role.ADMIN);

  constructor(private productsService: ProductsService, private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.handleGetProductsPage();
    this.searchFormGroup = this.formBuilder.group({
      keyword: this.formBuilder.control(null)
    });
  }
  
  public handleGetProductsPage(): void {
    this.productsService.getProductsPage(this.pagination.currentPage, this.pagination.size).subscribe({
      next: (data: PageProduct) => {
        this.products = data.products;
        this.pagination = data.pagination;
      },
      error: (err) => {
        this.errorMsg = err;
      }
    });
  }

  public handleDelete(product: Product): void {
    if (this.isAdmin) {
      this.productsService.removeProduct(product.id).subscribe({
        next: (data: boolean) => {
          const index = this.products.indexOf(product);
          this.products.splice(index, 1);
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  public handleSearchByKeyword(keyword: string, page: number): void {
    this.isSearching = true;
    this.productsService.getByKeyword(keyword, page, this.pagination.size).subscribe({
      next: (data: PageProduct) => {
        this.products = data.products;
        this.pagination = data.pagination;
      },
      error: (err) => {
        this.errorMsg = err;
      }
    })
  }

  public goToPage(index: number): void {
    console.log(index)
    this.pagination.currentPage = index;
    console.log(index, this.pagination.currentPage);
    if (this.isSearching === true) {
      this.handleSearchByKeyword(this.searchFormGroup.value.keyword, this.pagination.currentPage);
    }
    else this.handleGetProductsPage();
  }

}
