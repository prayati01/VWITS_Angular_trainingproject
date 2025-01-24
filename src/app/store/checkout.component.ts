import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Order } from "../model/order.model";
import { OrderRespository } from "../model/order.repository";

@Component({
    templateUrl: "checkout.component.html",
    imports:[CommonModule, FormsModule, RouterModule],
    styleUrls:["checkout.component.css"]

})
export class CheckoutComponent  {

    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(public order: Order, public repository: OrderRespository){}

    submitOrder(form :NgForm){
        this.submitted= true;
        if(form.valid){
            this.repository.saveOrder(this.order).subscribe(order=>{
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}