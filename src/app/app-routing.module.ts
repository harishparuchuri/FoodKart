import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/commom/home/home.component';
import {ProductListComponent} from './components/shoping-cart/product-list/product-list.component';
import {CartComponent} from './components/shoping-cart/cart/cart.component';


const routes: Routes = [
  {path:'',pathMatch: 'full',component:HomeComponent},
  {path:'menu',component:ProductListComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
