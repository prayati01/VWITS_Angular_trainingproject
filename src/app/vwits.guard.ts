import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { StoreComponent } from "./store/store.component";

@Injectable()
export class VwitsGuard{

    constructor(private router: Router) { }

    private firstNavigation = true;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(this.firstNavigation){
            this.firstNavigation = false;
            if(route.component != StoreComponent){
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }

}