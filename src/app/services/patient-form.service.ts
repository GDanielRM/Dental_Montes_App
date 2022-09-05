import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Patient } from "../model/patient";
import { BaseUrl, headers } from "../service/configuration";

@Injectable({
    providedIn: 'root'
})

export class PatientFormService {
    patients: Patient;

    constructor(
        private _HTTP: HttpClient
    ) {

    }

    GetPatients(idPatient: string = ""): Observable<any> {
        let url = BaseUrl + 'patient/' + idPatient;
        return this._HTTP.get(url, { headers: headers });
    }

    SavePatient(patient: any): Observable<any> {
        let url = BaseUrl + 'patient/save/';
        return this._HTTP.put(url, patient, { headers: headers });
    }
}