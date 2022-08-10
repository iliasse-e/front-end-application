import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../model/interfaces';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products!: Product[];
  errorMsg!: string;
  searchFormGroup!: FormGroup;

  constructor(private productsService: ProductsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (err) => {
        this.errorMsg = err;
      }
    });

    this.searchFormGroup = this.formBuilder.group({
      keyword: this.formBuilder.control(null)
    });
  }

  handleDelete(product: Product): void {
    this.productsService.removeProduct(product.id).subscribe({
      next: (data: boolean) => {
        const index = this.products.indexOf(product)
        this.products.splice(index, 1)
      },
      error: (err) => {
        console.error(err)
      }
    });
  }

  handleSearchByKeyword(keyword: string): void {
    this.productsService.getByKeyword(keyword).subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (err) => {
        this.errorMsg = err;
      }
    })
  }

}
