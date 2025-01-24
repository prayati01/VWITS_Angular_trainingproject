import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
import { StaticDataSource } from "./static.datasource";


@Injectable({
    providedIn: 'root', // or add it in module providers
  })
export class OrderRespository{

    private orders: Order[] =[];

    constructor(private dataSource: StaticDataSource){ }

    getOrders() : Order[]{
        return this.orders;
    }
    saveOrder(order: Order): Observable<Order>{
        return this.dataSource.saveOrder(order);
    }
}