import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(public themeService: ThemeService) {}
}
