import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navItems;
  constructor(private navService: NavService) {
    // Certifica-se de que a propriedade é inicializada no construtor
    this.navItems = this.navService.getNavItems();
  }
}
