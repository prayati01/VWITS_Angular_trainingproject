import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable({
    providedIn: 'root', // or add it in module providers
  })
export class Order{

    public id?: number;
    public name?: string;
    public address?: string;
    public city?: string;
    public state?: string;
    public zip?: string;  //declared zip as string coz usually the world uses string as zip code except India
    public country?: string;
    public shipped?: boolean = false;

    constructor(public cart: Cart){ }

    clear(){
        this.id = undefined;
        this.name = this.address = this.city = undefined;
        this.state = this.zip = this.country = undefined;
        this.shipped = false;
        this.cart.clear();
    }
}