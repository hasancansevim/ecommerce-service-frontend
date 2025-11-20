import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-product-form',
  standalone: true,
  imports: [],
  templateUrl: './admin-product-form.html',
  styleUrl: './admin-product-form.scss',
})
export class AdminProductForm {
  isEditMode = true;
}
