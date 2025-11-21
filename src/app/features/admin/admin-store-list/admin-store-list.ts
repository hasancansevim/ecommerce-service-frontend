import { Component, OnInit } from '@angular/core';
import { Store } from '../../../shared/models/store';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StoreService } from '../../../core/services/store/store-service';
import { NotificationService } from '../../../core/services/notification/notification';

@Component({
  selector: 'app-admin-store-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-store-list.html',
  styleUrl: './admin-store-list.scss',
})
export class AdminStoreList implements OnInit {
  stores: Store[] = [];

  constructor(private storeService: StoreService, private notify: NotificationService) {}

  ngOnInit(): void {
    this.getStores();
  }

  getStores() {
    this.storeService.getStores().subscribe((response) => {
      this.stores = response.data;
    });
  }

  deleteStore(store: Store) {
    this.notify
      .confirm('Emin Misiniz?', `${store.name} adlı mağazayı silmek üzeresiniz!`)
      .then((isConfirmed) => {
        if (isConfirmed) {
          this.storeService.deleteStore(store.id.toString()).subscribe((response) => {
            this.notify.info(`${store.name} isimli mağaza silindi`);
          });
          this.getStores();
        }
      });
  }
}
