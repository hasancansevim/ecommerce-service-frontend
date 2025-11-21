import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home-component';
import { AdminProductList } from './features/admin/admin-product-list/admin-product-list';
import { AdminProductForm } from './features/admin/admin-product-form/admin-product-form';
import { ProductDetail } from './features/products/product-detail/product-detail';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { ProductList } from './features/products/product-list/product-list';
import { AdminLayout } from './features/admin/admin-layout/admin-layout';
import { AdminDashboard } from './features/admin/admin-dashboard/admin-dashboard';
import { AdminUserList } from './features/admin/admin-user-list/admin-user-list';
import { AdminUserForm } from './features/admin/admin-user-form/admin-user-form';
import { AdminCategoryList } from './features/admin/admin-category-list/admin-category-list';
import { AdminStoreList } from './features/admin/admin-store-list/admin-store-list';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductList },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboard },
      { path: 'products', component: AdminProductList },
      { path: 'products/new', component: AdminProductForm },
      { path: 'products/edit/:id', component: AdminProductForm },
      { path: 'categories', component: AdminCategoryList },
      { path: 'stores', component: AdminStoreList },
      { path: 'users', component: AdminUserList },
      { path: 'users/new', component: AdminUserForm },
      { path: 'users/edit/:id', component: AdminUserForm },
    ],
  },
  { path: 'products/:id', component: ProductDetail },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
