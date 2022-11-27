import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {IProduct} from "../../../../model/interface.product";
import {ProductsService} from "../../../../service/products.service";
import {MatDialogRef} from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-save-product',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  newProductFormGroup!: FormGroup;
  newProduct!: IProduct;
  errorMessage!: any;
  control!: FormControl;

  constructor(
    private productService: ProductsService,
    private dialogRef: MatDialogRef<DialogComponent>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.newProductFormGroup = new FormGroup({
      designation: new FormControl(null),
      price: new FormControl(null),
      quantity: new FormControl(null),
      dimensions: new FormControl(null),
      category: new FormControl(null),
    })
  }

  submitNewProduct(product: IProduct) {
    this.productService.saveProduct(product).subscribe({
      next: (data) => {
        this.dialogRef.close();
        this.snackBar.open("Product saved", "cancel", {
          duration: 2000
        });
      },
      error: (err) => {
        this.errorMessage = err.message;
        console.log(err)
      }
    })

  }
}
