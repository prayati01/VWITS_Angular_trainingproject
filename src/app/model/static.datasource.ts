import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Product } from "./product.model";

@Injectable()

export class StaticDataSource{
    private products: Product[] = [
        new Product(1, "Product1", "Category 1", "Product 1 (Category1)", 123),
        new Product(2, "Product2", "Category 1", "Product 2 (Category1)", 123),
        new Product(3, "Product3", "Category 1", "Product 3 (Category1)", 123),
        new Product(4, "Product4", "Category 1", "Product 4 (Category1)", 123),
        new Product(5, "Product5", "Category 1", "Product 5 (Category1)", 123),
        new Product(6, "Product6", "Category 2", "Product 6 (Category2)", 123),
        new Product(7, "Product7", "Category 2", "Product 7 (Category2)", 123),
        new Product(8, "Product8", "Category 2", "Product 8 (Category2)", 123),
        new Product(9, "Product9", "Category 2", "Product 9 (Category2)", 123),
        new Product(10, "Product10", "Category 2", "Product 10 (Category2)", 123),
        new Product(11, "Product11", "Category 3", "Product 11 (Category3)", 123),
        new Product(12, "Product12", "Category 3", "Product 12 (Category3)", 123),
        new Product(13, "Product13", "Category 3", "Product 13(Category3)", 123),
        new Product(14, "Product14", "Category 3", "Product 14 (Category3)", 123),
        new Product(15, "Product15", "Category 3", "Product 15 (Category3)", 123),
    ];
    getProducts() : Observable<Product[]>{
        return from([this.products]);
    }
}