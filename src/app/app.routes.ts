import { Routes } from '@angular/router';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreComponent } from './store/store.component';

export const routes: Routes = [
    {path: "store", component:StoreComponent},
    {path:"cart", component: CartDetailComponent},
    {path: "checkout", component: CheckoutComponent}
];

