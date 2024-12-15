import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { CartComponent } from './component/cart/cart.component';
import { NotificationComponent } from './component/notification/notification.component';
import { CouponsComponent } from './component/coupons/coupons.component';
import { MyprofileComponent } from './component/myprofile/myprofile.component';
import { OrdersComponent } from './component/orders/orders.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'navigation',
    component:NavigationComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'notification',
    component:NotificationComponent
  },
  {
    path:'coupons',
    component:CouponsComponent
  },
  {
    path:'myprofile',
    component:MyprofileComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  }
  ,
  {
    path:'home',
    component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
