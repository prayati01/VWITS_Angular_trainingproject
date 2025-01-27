import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DynamicDataSource } from "./dynamic.dataSource";
import { Order } from "./order.model";


@Injectable({
    providedIn: 'root', // or add it in module providers
  })
export class OrderRespository{

    private orders: Order[] =[];

    constructor(private dataSource: DynamicDataSource){ }

    getOrders() : Order[]{
        return this.orders;
    }
    saveOrder(order: Order): Observable<Order>{
        return this.dataSource.saveOrder(order);
    }
}