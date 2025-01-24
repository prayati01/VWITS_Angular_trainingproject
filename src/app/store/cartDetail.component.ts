import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Cart } from "../model/cart.model";

@Component({
    templateUrl: "cartDetail.component.html",
    imports: [CommonModule, RouterModule]
})
export class CartDetailComponent  {

    constructor(public cart: Cart) { }

}