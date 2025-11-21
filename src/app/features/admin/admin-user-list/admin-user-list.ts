import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-user-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-user-list.html',
  styleUrl: './admin-user-list.scss',
})
export class AdminUserList {
  users: any[] = [
    {
      name: '',
      id: 1,
      email: 'ssbdkjasd@gmail.com',
      role: 'admin',
    },
    {
      name: '',
      id: 1,
      email: 'ssbdkjasd@gmail.com',
      role: 'admin',
    },
  ];

  deleteUser(user: any) {}
}
