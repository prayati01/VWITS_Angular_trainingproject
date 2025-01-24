import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Cart } from "../model/cart.model";

@Component({
    selector:"cart-summary",
    imports: [CommonModule, RouterModule],
    templateUrl: "cartSummary.component.html"
})
export class CartSummaryComponent{

    constructor(public cart: Cart){}
}