import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSearchOpen: boolean = true;
  isFilterOpen: boolean = true;

  toggleSearchInput(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }

  toggleFilterPanel(open: boolean): void {
    this.isFilterOpen = open;
  }
}
