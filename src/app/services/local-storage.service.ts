import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  isDarkMode = JSON.parse(localStorage.getItem('isDarkMode') || 'false');
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('isDarkMode', this.isDarkMode);
  }
}
