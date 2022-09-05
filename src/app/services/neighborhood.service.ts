import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseUrl, headers } from "../service/configuration";

@Injectable({
    providedIn: 'root'
})

export class NeighborhoodService {
    constructor(
        private _HTTP: HttpClient
    ){

    }

    GetNeighborhoods():Observable<any> {
        let url = BaseUrl + 'neighborhood/';
        return this._HTTP.get(url, { headers: headers });
    }
}