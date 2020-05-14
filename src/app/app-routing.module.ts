import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/commom/home/home.component';
import {ProductListComponent} from './components/shoping-cart/product-list/product-list.component';
import {OrderComponent} from './components/shoping-cart/cart/order/order.component';

const routes: Routes = [
  {path:'',pathMatch: 'full',component:HomeComponent},
  {path:'menu',component:ProductListComponent},
  
  {path:'order',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
