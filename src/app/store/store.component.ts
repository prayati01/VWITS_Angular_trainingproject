import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { CartSummaryComponent } from "./cartSummary.component";



@Component({
    selector: "vwits-store",
    standalone: true,
    imports: [CommonModule, CartSummaryComponent],
    templateUrl: "store.component.html",
})
export class StoreComponent{

    selectedCatergory: string | undefined;
    productsPerPage = 3;
    selectedPage = 1;


    //myDate = new Date();   ----to add the date 
    constructor(private repository: ProductRepository, private cart: Cart){}

    //this "get products" is a property basically a getter method if we compare it with java
    //note it looks like a method i.e getProduct but notice, there is a space between "get" & "products" which made it a property.
    //by default these properties are public only

    get products(): Product[]{ 
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        //return this.repository.getProducts();  
        return this.repository.getProducts(this.selectedCatergory) //to display specific products on clicking specific category
                    .slice(pageIndex, pageIndex + this.productsPerPage); 
                    //slicing so that pg will display only 3 products per pg but we didnt hard code it rather used this this.productsPerPage
    }

    get categories(): string[]{
        return this.repository.getCategories();
    }

    //Its's an event handler
    changeCategory(newCategory?: string) {
        this.selectedCatergory = newCategory;
        this.changePage(1);
    }

    //two event handlers for drop down &
    changePage(newPage: number){
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number){ //for no. of products to be shown on page
        this.productsPerPage = Number(newSize);//typecasting
    }

    get pageNumbers():number[]{
    return Array(Math.ceil(this.repository.getProducts(this.selectedCatergory)
                .length / this.productsPerPage)).fill(0).map((x, i)=>i+1);
    }

    addProductToCart(product: Product){
        this.cart.addLine(product);
    }
    
}