import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DynamicDataSource } from "./dynamic.dataSource";

@Injectable()
export class AuthService{

    constructor(private dataSource: DynamicDataSource){}

    autehnticate(username: string, password: string): Observable<boolean>{
        return this.dataSource.authenticate(username, password);

    }
    get autehnticated(): boolean{
        return this.dataSource.auth_token !=null;
    }

    clear(){
        this.dataSource.auth_token = undefined;
        sessionStorage["vwitsToken"] = undefined;
    }
}