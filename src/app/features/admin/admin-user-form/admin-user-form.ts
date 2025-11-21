import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-user-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-user-form.html',
  styleUrl: './admin-user-form.scss',
})
export class AdminUserForm {
  userForm: FormGroup;
  isEditMode = true;
  saveUser() {}

  constructor(private formBuilder: FormBuilder) {}

  createUserForm() {
    this.userForm = this.formBuilder.group({});
  }
}
