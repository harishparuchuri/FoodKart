import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {ProductService} from './services/product.service'

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/commom/home/home.component';
import { HeaderComponent } from './components/commom/header/header.component';
import { SliderComponent } from './components/commom/slider/slider.component';
import { FooterComponent } from './components/commom/footer/footer.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { ProductListComponent } from './components/shoping-cart/product-list/product-list.component';
import { CartComponent } from './components/shoping-cart/cart/cart.component';
import { CartItemComponent } from './components/shoping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shoping-cart/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    ShopingCartComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,  
    MatCardModule,
    MatGridListModule,
    HttpClientModule
    
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
