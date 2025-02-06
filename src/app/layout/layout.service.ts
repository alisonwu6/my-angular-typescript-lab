import { Injectable } from '@angular/core';
import { NavItem } from './layout';
import { NAV_MENU } from './layout.config';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private menuItems: NavItem[] = NAV_MENU;

  getMenu(): NavItem[] {
    return this.menuItems;
  }
}
