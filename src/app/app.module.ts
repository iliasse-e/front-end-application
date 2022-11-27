import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatalogComponent } from './catalog/catalog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/module/material/material.module";
import {MatButtonModule} from "@angular/material/button";
import { DialogComponent } from './shared/components/dialog/save-product/dialog.component';
import {ProductComponent} from "./product/product.component";
import { DeleteProductComponent } from './shared/components/dialog/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    LoginComponent,
    ProductComponent,
    AdminTemplateComponent,
    DialogComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
