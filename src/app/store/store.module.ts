import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";


//to add objects in js we put{}brackets 


@NgModule({
    declarations:[StoreComponent], //add alll class names who had @Component() decorator
    imports:[ModelModule,BrowserModule], // add all module class names on which this modeule depends
    providers:[],
    exports:[StoreComponent] //add all names which will be used by some other module
})

export class StoreModule{

}