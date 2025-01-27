import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";


@Component({
    templateUrl: "auth.component.html",
    imports: [FormsModule,CommonModule]
})
export class AuthComponent{
    //two way data binding
    username?: string;
    password?: string;
    errorMessage?: string;

    constructor(private router: Router, private auth:AuthService){ }

    authenticate(form: NgForm){
        if (form.valid){
            this.auth.autehnticate(this.username?? "", this.password?? "")
                        .subscribe(response =>{
                            if(response){
                                this.router.navigateByUrl("/admin/main");
                            } else{
                                this.errorMessage = "Authentication Failed - 401";
                            }
                        });
        } else{
            this.errorMessage = "Invalid Form Data!!";
        }
    }

}