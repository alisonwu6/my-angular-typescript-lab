import { Component, Injectable, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { NavItem } from './layout';
import { LayoutService } from './layout.service';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    NgFor,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  menuItems: NavItem[] = [];
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isDarkMode = false;

  constructor(private layoutService: LayoutService) {
    this.menuItems = this.layoutService.getMenu();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
