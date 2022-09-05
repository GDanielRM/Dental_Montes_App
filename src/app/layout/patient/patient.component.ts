import { Component, OnInit } from '@angular/core';
import { Patient } from '../../model/patient';
import { Tools } from '../../provider/tools/tools';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.scss']
})

export class PatientComponent implements OnInit {
    public isCollapsed = false;

    patients: Patient;

    constructor(
        private _tools: Tools,
        private _router: Router,
        private _patientService: PatientService
    ) {
        this.GetPatients();
    }

    ngOnInit() { }

    GetPatients() {
        this._patientService.GetPatients().subscribe((patients: any) => {
            if (patients.status) {
                this.patients = patients.data;
            } else {
                console.log(patients.message);
            }
        }, error => {
            this._tools.ShowError(error);
        });
    }

    Edit(idPatient: number = 0) {
        this._router.navigate(['patient-form', idPatient]);
    }

    Cancel(idPatient: number = 0) {
        if (idPatient == 0) {
            alert('idPatient no definido');
            return;
        }

        this._patientService.Cancel(idPatient).subscribe((resp: any) => {
            if (resp.status) {
                this.GetPatients();
                alert('Paciente cancelado');
            } else {
                alert('ERROR!! ' + resp.message);
            }
        }, error => {
            this._tools.ShowError(error);
        });
    }

    Activate(idPatient: number = 0) {
        if (idPatient == 0) {
            alert('idPatient no definido');
            return;
        }

        this._patientService.Activate(idPatient).subscribe((resp: any) => {
            if (resp.status) {
                this.GetPatients();
            } else {
                alert('ERROR!!' + resp.message);
            }
        }, error => {
            this._tools.ShowError(error);
        });
    }

    Delete(idPatient: number = 0) {
        if (idPatient == 0) {
            alert('idPatient no definido');
            return;
        }

        this._patientService.Delete(idPatient).subscribe((resp: any) => {
            if (resp.status) {
                this.GetPatients();
            } else {
                alert('ERROR!! ' + resp.message);
            }
        }, error => {
            this._tools.ShowError(error);
        });
    }
}
