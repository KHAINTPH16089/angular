import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/client/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { ProductComponent } from './pages/client/product/product.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { AdminUserFormComponent } from './pages/admin/admin-user/admin-user-form/admin-user-form.component';
import { CheckoutComponent } from './pages/client/checkout/checkout.component';
import { AdminOrderListComponent } from './pages/admin/admin-order/admin-order-list/admin-order-list.component';
import { AdminOrderDetailComponent } from './pages/admin/admin-order/admin-order-detail/admin-order-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'productDetail/:_id',
        component: ProductDetailComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      }
    ]
  },
  {
    path:'user',
    children:[
      {
        path:'signin',
        component: SigninComponent
      },
      {
        path:'signup',
        component: SignupComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard],
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductListComponent
          },
          {
            path: 'create',
            component: AdminProductFormComponent
          },
          {
            path: 'edit/:_id',
            component: AdminProductFormComponent
          },
          {
            path: ':_id',
            component: AdminProductDetailComponent
          }
        ]
      },
      {
        path: 'category',
        children: [
          {
            path: '',
            component: AdminCategoryListComponent
          },
          {
            path: 'create',
            component: AdminCategoryFormComponent
          },
          {
            path: 'edit/:_id',
            component: AdminCategoryFormComponent
          }
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            component: AdminUserListComponent
          },
          {
            path: 'create',
            component: AdminUserFormComponent
          },
          {
            path: 'edit/:_id',
            component: AdminUserFormComponent
          }
        ]
      },
      {
        path: 'order',
        children: [
          {
            path: '',
            component: AdminOrderListComponent
          },
          {
            path: 'detail/:_id',
            component: AdminOrderDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard]
})
export class AppRoutingModule { }
