import { NgModule } from '@angular/core';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";

const MATERIALS = [
    MatDialogModule,
  MatSnackBarModule,
]

@NgModule({
  declarations: [],
  imports: MATERIALS,
  exports: MATERIALS
})
export class MaterialModule { }
