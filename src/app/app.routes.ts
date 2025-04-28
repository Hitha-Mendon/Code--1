// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InputComponent } from './input/input.component';
import { ProductsComponent } from './products/products.component';

import { LoginComponent } from './login/login.component';
import { InvestmentFormComponent } from './investment-form/investment-form.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'landing', component: LandingPageComponent },
    { path: 'input', component: InvestmentFormComponent },
    {path:'products', component:ProductsComponent}
  ];
