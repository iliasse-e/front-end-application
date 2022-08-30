import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthentificationGuard } from './guards/authentification.guard';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const APP_ROUTES: Routes = [
  { path: "admin", component: AdminTemplateComponent, canActivate: [AuthentificationGuard], children: [
    { path: "products", component: ProductComponent },
  ] },
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
