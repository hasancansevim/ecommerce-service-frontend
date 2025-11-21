import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(public themeService: ThemeService) {}
}
