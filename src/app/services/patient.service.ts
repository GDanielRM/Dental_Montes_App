import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseUrl, headers } from "../service/configuration";

@Injectable({
    providedIn: 'root'
})

export class PatientService {
    constructor(
        private _HTTP: HttpClient
    ) { }

    GetPatients(): Observable<any> {
        let url = BaseUrl + 'patient/';
        return this._HTTP.get(url, { headers: headers });
    }

    Cancel(idPatient: number = 0): Observable<any> {
        let url = BaseUrl + 'patient/disable?id=' + idPatient;
        return this._HTTP.patch(url, { headers: headers });
    }

    Activate(idPatient: number = 0): Observable<any> {
        let url = BaseUrl + 'patient/enable?id=' + idPatient;
        return this._HTTP.patch(url, { headers: headers });
    }

    Delete(idPatient: number = 0): Observable<any> {
        let url = BaseUrl + 'patient/delete?id=' + idPatient;
        return this._HTTP.patch(url, { headers: headers });
    }
}