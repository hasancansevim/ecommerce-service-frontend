import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home-component';
import { AdminProductList } from './features/admin/admin-product-list/admin-product-list';
import { AdminProductForm } from './features/admin/admin-product-form/admin-product-form';
import { ProductDetail } from './features/products/product-detail/product-detail';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    children: [
      { path: 'products', component: AdminProductList },
      { path: 'products/new', component: AdminProductForm },
      { path: 'products/edit/:id', component: AdminProductForm },
    ],
  },
  { path: 'products/:id', component: ProductDetail },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
