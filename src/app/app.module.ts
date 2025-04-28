// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InputComponent } from './input/input.component';
// import { ProductsListComponent } from './products-list/products-list.component';
// import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { InvestmentFormComponent } from './investment-form/investment-form.component';
// import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes=[
  {path: '',component:LoginComponent}
]
@NgModule({
  declarations: [
    
  ],
  imports: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    InputComponent,
    ProductsComponent,
    FormsModule,
    InvestmentFormComponent,
    // NavbarComponent,
    // ProductsListComponent,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {}
