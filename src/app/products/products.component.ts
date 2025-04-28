// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   imports: [],
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.css'
// })

import { CommonModule } from '@angular/common';
import { Component, NgModule, NgModuleRef } from '@angular/core';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports:[CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  providers: [NgModel, NgModelGroup]
})
export class ProductsComponent {
  constructor(private router: Router) {}
  products = [
    { name: 'Growth Equity Fund', type: 'Equity', return: '12%', description: 'Focused on long-term capital appreciation by investing in high-growth companies.' },
    { name: 'Fixed Income Secure Plan', type: 'Fixed Income', return: '6.5%', description: 'Provides stable returns by investing in government and corporate bonds.' },
    { name: 'Real Estate Investment Trust', type: 'Real Estate', return: '8%', description: 'Invests in commercial and residential real estate projects across urban areas.' },
    { name: 'Gold & Commodities Basket', type: 'Commodities', return: '7%', description: 'Diversified commodity exposure including gold, oil, and metals for hedging inflation.' },
    { name: 'Ultra-Liquid Fund', type: 'Cash & Cash Equivalents', return: '4%', description: 'Designed for short-term liquidity needs with low risk and easy access.' }
  ];

  getBadgeClass(type: string) {
    switch (type) {
      case 'Equity': return 'bg-success';
      case 'Fixed Income': return 'bg-primary';
      case 'Real Estate': return 'bg-warning text-dark';
      case 'Commodities': return 'bg-secondary';
      case 'Cash & Cash Equivalents': return 'bg-info text-dark';
      default: return 'bg-secondary';
    }
  }
  logout() {
    // Optional: Clear any stored session data here
    this.router.navigate(['']); // navigate to login page
  }
  home() {
    // Optional: Clear any stored session data here
    this.router.navigate(['/landing']); // navigate to login page
  }
}





