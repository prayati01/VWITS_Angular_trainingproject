import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { Cart } from "./cart.model";
import { DynamicDataSource } from "./dynamic.dataSource";
import { Order } from "./order.model";
import { OrderRespository } from "./order.repository";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

//to add objects in js we put{}brackets 

@NgModule({
    declarations:[],
    providers:[ProductRepository, Cart, Order, OrderRespository,
        {provide:StaticDataSource, useClass:DynamicDataSource}, DynamicDataSource, AuthService
     ],//add all class names who has @Injectable() decorator
    exports:[]
})

export class ModelModule{

}