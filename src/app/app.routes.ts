import { Routes } from '@angular/router';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreComponent } from './store/store.component';
import { VwitsGuard } from './vwits.guard';

export const routes: Routes = [
    {path: "store", component:StoreComponent, canActivate:[VwitsGuard]},
    {path:"cart", component: CartDetailComponent, canActivate:[VwitsGuard]},
    {path: "checkout", component: CheckoutComponent, canActivate:[VwitsGuard]},
    {path: "**", redirectTo:"/store"}
];

