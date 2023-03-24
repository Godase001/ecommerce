import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'seller',
    component:SellerComponent
  } ,
  {
    path:'card',
    component:CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
