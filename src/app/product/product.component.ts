import { Component, OnInit } from '@angular/core';
import {IProduct} from "../model/interface.product";
import {ProductsService} from "../service/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product!: IProduct | undefined;
  designation!: string;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.designation = params?.["designation"];
      console.log(this.designation);
    })
    this.productsService.findByDesignation(this.designation).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (err) => {
        console.log(err.message())
    }
    })
  }

}
