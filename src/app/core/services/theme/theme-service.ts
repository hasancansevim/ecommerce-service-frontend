import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme == 'dark') {
        this.enableDarkMode();
      }
    }
  }

  isDarkMode() {
    return this.darkMode;
  }

  toggleTheme() {
    if (this.darkMode) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  private enableDarkMode() {
    this.darkMode = true;
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  private disableDarkMode() {
    this.darkMode = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
