import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseUrl, headers } from "../service/configuration";

@Injectable({
    providedIn: 'root'
})

export class CityService {
    constructor(
        private _HTTP: HttpClient
    ){

    }

    GetCities():Observable<any> {
        let url = BaseUrl + 'city/';
        return this._HTTP.get(url, { headers: headers });
    }
}