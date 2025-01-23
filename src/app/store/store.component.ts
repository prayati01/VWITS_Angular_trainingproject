import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";



@Component({
    selector: "vwits-store",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "store.component.html"
})
export class StoreComponent{

    myDate = new Date().getDate();
    constructor(private repository: ProductRepository){}

    //this "get products" is a property basically a getter method if we compare it with java
    //note it looks like a method i.e getProduct but notice, there is a space between "get" & "products" which made it a property.
    //by default these properties are public only

    get products(): Product[]{ 
        return this.repository.getProducts();    
    }

    get categories(): string[]{
        return this.repository.getCategories();
    }

}