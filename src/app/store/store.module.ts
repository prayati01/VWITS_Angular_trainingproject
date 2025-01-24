import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../model/model.module";


//to add objects in js we put{}brackets 


@NgModule({
    declarations:[], //add all class names who had @Component() decorator
    imports:[ModelModule,CommonModule, RouterModule, FormsModule], // add all module class names on which this modeule depends
    providers:[],
    exports:[] //add all names which will be used by some other module
})

export class StoreModule{

}


//browser module is a part of angular which is added by npm at start as browser to browser functionality changes i.e how browser deals with ui part so angular adds it remove problem 
//we added Common module in "imports" bcoz browser module is already added in app module 