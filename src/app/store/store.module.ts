import { NgModule } from "@angular/core";
import { StoreComponent } from "./store.component";


//to add objects in js we put{}brackets 


@NgModule({
    declarations:[StoreComponent], //add alll class names who had @Component() decorator
    imports:[],
    providers:[],
    exports:[] //add all names which will be used by some other module
})

export class StoreModule{

}