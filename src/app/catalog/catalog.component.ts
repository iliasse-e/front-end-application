import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Role } from '../enum/role';
import { PageProduct, Pagination } from '../model/interfaces';
import { LoginService } from '../service/login.service';
import { ProductsService } from '../service/products.service';
import {IProduct} from "../model/interface.product";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../shared/components/dialog/save-product/dialog.component";
import {Router} from "@angular/router";
import {DeleteProductComponent} from "../shared/components/dialog/delete-product/delete-product.component";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products!: IProduct[];
  pagination : Pagination = {
    currentPage: 0,
    size: 5,
    totalPages: 1
  }
  errorMsg!: string;
  searchFormGroup!: FormGroup;
  isSearching: boolean = false;
  isAdmin: boolean = this.loginService.hasRole(Role.ADMIN);

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.handleGetProductsPage();
    this.searchFormGroup = this.formBuilder.group({
      keyword: this.formBuilder.control(null)
    });
  }

  public handleGetProductsPage(): void {

    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = JSON.parse(data);
      },
      error: (err) => {
        this.errorMsg = err;
      }
    })
    // this.productsService.getProductsPage(this.pagination.currentPage, this.pagination.size).subscribe({
    //   next: (data: PageProduct) => {
    //     this.products = data.products;
    //     this.pagination = data.pagination;
    //   },
    //   error: (err) => {
    //     this.errorMsg = err;
    //   }
    // });
  }

  public handleDelete(product: IProduct): void {
    // if (this.isAdmin) {
    //   this.productsService.removeProduct(catalog.id).subscribe({
    //     next: (data: boolean) => {
    //       const index = this.products.indexOf(catalog);
    //       this.products.splice(index, 1);
    //     },
    //     error: (err) => {
    //       console.error(err);
    //     }
    //   });
    // }
  }

  public handleSearchByKeyword(keyword: string, page: number): void {
    // this.isSearching = true;
    // this.productsService.getByKeyword(keyword, page, this.pagination.size).subscribe({
    //   next: (data: PageProduct) => {
    //     this.products = data.products;
    //     this.pagination = data.pagination;
    //   },
    //   error: (err) => {
    //     this.errorMsg = err;
    //   }
    // })
  }

  public goToPage(index: number): void {
  //   console.log(index)
  //   this.pagination.currentPage = index;
  //   console.log(index, this.pagination.currentPage);
  //   if (this.isSearching === true) {
  //     this.handleSearchByKeyword(this.searchFormGroup.value.keyword, this.pagination.currentPage);
  //   }
  //   else this.handleGetProductsPage();
  }

  protected openSaveDialog() {
    this.dialog.open(DialogComponent, {
    });
  }

  protected openDeleteDialog(designation: string) {
    this.dialog.open(DeleteProductComponent, {
      data: {designation}
    });
  }

  protected navigateProduct(designation: string) {
    window.open(`http://localhost:4200/products/${designation}`, '_blank');
  }
}
