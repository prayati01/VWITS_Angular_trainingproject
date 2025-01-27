import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { provideRouter, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth.component";

let routes = RouterModule.forChild (
    [
        { path:"auth", component: AuthComponent},
        {path: "main", component: AdminComponent},
        {path: "**", redirectTo: "auth"}
    ]
) ;

//to add objects in js we put{}brackets 


@NgModule({
    declarations:[AuthComponent],
    imports:[FormsModule, CommonModule, AdminComponent, provideRouter(routes)],
    providers:[],
    exports:[]
})

export class AdminModule{

}