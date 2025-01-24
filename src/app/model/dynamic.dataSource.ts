import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const PROTOCOL ="http";
const PORT =5005;

@Injectable({providedIn: 'root',})
export class DynamicDataSource{
    baseUrl : string;

    constructor(private http:HttpClient){
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
}