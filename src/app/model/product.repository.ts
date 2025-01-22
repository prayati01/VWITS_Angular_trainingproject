import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {

    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource:StaticDataSource)
    {
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category ?? "(None)")
                                .filter((c, index, array) => array.indexOf(c) == index)
                                .sort();
        });
    }


    //get method to return a list of products
    getProducts(category?:string):Product[]{
        return this.products.filter(p =>category == undefined || category==p.category);
        //if the category asked by user i not found then it will reutrn undefined or if found then will return that category
    }

    //to return a single product only if it is present in our product list
    getProduct(id:number) : Product | undefined{
        return this.products.find(p=>p.id == id);//if found that product then return it

    }

    getCategories(): string[]{ //string[] means that the return type of this get method is string array
        return this.categories;
    }
}