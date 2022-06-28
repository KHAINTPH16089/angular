import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { FormValidateComponent } from './components/form-validate/form-validate.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HomeComponent } from './pages/client/home/home.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { ProductComponent } from './pages/client/product/product.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { AdminUserFormComponent } from './pages/admin/admin-user/admin-user-form/admin-user-form.component';
import { CheckoutComponent } from './pages/client/checkout/checkout.component';
import { AdminOrderListComponent } from './pages/admin/admin-order/admin-order-list/admin-order-list.component';
import { AdminOrderDetailComponent } from './pages/admin/admin-order/admin-order-detail/admin-order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormValidateComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    HomeComponent,
    AdminProductListComponent,
    AdminProductFormComponent,
    AdminProductDetailComponent,
    ProductDetailComponent,
    CartComponent,
    ProductComponent,
    SigninComponent,
    SignupComponent,
    AdminCategoryListComponent,
    AdminCategoryFormComponent,
    AdminUserListComponent,
    AdminUserFormComponent,
    CheckoutComponent,
    AdminOrderListComponent,
    AdminOrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
