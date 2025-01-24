import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

//to add objects in js we put{}brackets 

@NgModule({
    declarations:[],
    imports:[],
    providers:[StaticDataSource, ProductRepository, Cart ],//add all class names who has @Injectable() decorator
    exports:[]
})

export class ModelModule{

}