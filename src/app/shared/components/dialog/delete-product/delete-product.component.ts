import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IProduct} from "../../../../model/interface.product";
import {ProductsService} from "../../../../service/products.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  errorMessage!: string;
  productDesignation!: string;

  constructor(
    private productService: ProductsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected dialogRef: MatDialogRef<DeleteProductComponent>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.productDesignation = this.data.designation;
  }

  protected delete(designation: string) {
    // fix the delete method : by id and not by designation
    this.productService.deleteProduct(designation).subscribe({
      next: (data) => {
        this.dialogRef.close();
        this.snackBar.open("Product deleted", "cancel", {
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
