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

    selectedCatergory: string | undefined;
    productsPerPage = 3;
    selectedPage = 1;


    //myDate = new Date();   ----to add the date 
    constructor(private repository: ProductRepository){}

    //this "get products" is a property basically a getter method if we compare it with java
    //note it looks like a method i.e getProduct but notice, there is a space between "get" & "products" which made it a property.
    //by default these properties are public only

    get products(): Product[]{ 
        //return this.repository.getProducts();  
        return this.repository.getProducts(this.selectedCatergory); //to display specific products on clicking specific category
        
          
    }

    get categories(): string[]{
        return this.repository.getCategories();
    }

    //Its's an event handler
    changeCategory(newCategory?: string) {
        this.selectedCatergory = newCategory;
    }

    //two event handlers for drop down &
    changePage(newPage: number){
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number){ //for no. of products to be shown on page
        this.productsPerPage = Number(newSize);//typecasting
    }

}