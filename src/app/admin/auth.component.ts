import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
    templateUrl: "auth.component.html",
    imports: [FormsModule,CommonModule]
})
export class AuthComponent{
    //two way data binding
    username?: string;
    password?: string;
    errorMessage?: string;

    constructor(private router: Router){ }

    authenticate(form: NgForm){
        if (form.valid){
            //perform your authentication process here
            this.router.navigateByUrl("/admin/main");
        } else{
            this.errorMessage = "Invalid Form Data!!";
        }
    }

}