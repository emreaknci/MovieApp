import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  constructor(private localStorage: LocalStorageService) { }
  ngOnInit(): void {
    this.isDarkMode = this.localStorage.isDarkMode;

  }
  isDarkMode = null;

  toggleDarkLight() {
    this.localStorage.toggleDarkMode()
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
