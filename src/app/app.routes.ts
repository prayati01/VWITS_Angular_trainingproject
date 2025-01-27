import { Routes } from '@angular/router';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreComponent } from './store/store.component';
import { VwitsGuard } from './vwits.guard';

export const routes: Routes = [

    //when we are adding "components", it means we are hardecoding it 
    //that it will be done everytime the modules will be uploaded in 1st request 
    {path: "store", component:StoreComponent, canActivate:[VwitsGuard]},
    {path:"cart", component: CartDetailComponent, canActivate:[VwitsGuard]},
    {path: "checkout", component: CheckoutComponent, canActivate:[VwitsGuard]},
    //but this amdin module'll be required when the administrtor logs in so we wont hard code it in components
    //we add lazy module loading: i.e module will get loaded as & when required
    {path:"admin", loadChildren:()=> import("./admin/admin.module").then(m=>m.AdminModule)},
    {path: "**", redirectTo:"/store"}
];

