import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component'
import { RestaurantService } from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { CarrinhoComponent } from './restaurant-detail/carrinho/carrinho.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { Carrinho } from './restaurant-detail/carrinho/carrinho.service';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { InputcustomComponent } from './shared/inputcustom/inputcustom.component';
import { PaymentComponent } from './shared/payment/payment.component'
import { MatTooltipModule } from '@angular/material'
import { MatButtonModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './order/src/app/order/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantItemComponent,
    RestaurantDetailComponent,
    MenuComponent,
    CarrinhoComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputcustomComponent,
    PaymentComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    MatTooltipModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [RestaurantService,Carrinho],
  bootstrap: [AppComponent]
})
export class AppModule { }
