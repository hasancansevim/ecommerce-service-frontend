import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../../shared/models/category';
import { CategoryService } from '../../../core/services/category/category-service';
import { NotificationService } from '../../../core/services/notification/notification';

@Component({
  selector: 'app-admin-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-category-list.html',
  styleUrl: './admin-category-list.scss',
})
export class AdminCategoryList implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private notify: NotificationService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }
  deleteCategory(category: Category) {
    this.notify
      .confirm(
        'Kategoriyi Silmek İstediğinize Emin Misiniz?',
        `${category.name} adlı kategoriyi silmek üzeresiniz`
      )
      .then((isConfirmed) => {
        if (isConfirmed) {
          this.categoryService.deleteCategory(category.id.toString()).subscribe((response) => {
            this.notify.info(`${category.name} adlı kategori silindi.`);
          });
          this.getCategories();
        }
      });
  }
}
