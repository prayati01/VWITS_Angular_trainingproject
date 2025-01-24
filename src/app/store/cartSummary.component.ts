import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    selector:"cart-summary",
    imports: [CommonModule],
    templateUrl: "cartSummary.component.html"
})
export class CartSummaryComponent{

    constructor(public cart: Cart){}
}