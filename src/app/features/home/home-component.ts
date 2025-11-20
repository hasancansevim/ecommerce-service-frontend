import { Component } from '@angular/core';
import { ProductCardComponent } from '../products/product-card/product-card-component';
import { Categories } from '../categories/categories';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, Categories],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {}
