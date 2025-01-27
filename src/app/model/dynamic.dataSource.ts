import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Order } from "./order.model";
import { Product } from "./product.model";

const PROTOCOL ="http";
const PORT =5005;

@Injectable({providedIn: 'root',})
export class DynamicDataSource{
    baseUrl : string;
    auth_token?:string;

    constructor(private http:HttpClient){
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl + "products");
    }

    saveOrder(order: Order):Observable<Order>{
        return this.http.post<Order>(this.baseUrl + "orders", order);
    }

    authenticate(user:string, pass: string): Observable<boolean>{
        return this.http.post<any>(this.baseUrl + "login", {
            name: user, password:pass}).pipe(map(response => {
                this.auth_token = response.success ? response.token : null;
                sessionStorage["vwitsToken"] = this.auth_token;
                return response.success;
            }));
    }
}