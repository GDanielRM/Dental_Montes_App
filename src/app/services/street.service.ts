import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseUrl, headers } from "../service/configuration";

@Injectable({
    providedIn: 'root'
})

export class StreetService {
    constructor(
        private _HTTP: HttpClient
    ){

    }

    GetStreets():Observable<any> {
        let url = BaseUrl + 'street/';
        return this._HTTP.get(url, { headers: headers });
    }
}