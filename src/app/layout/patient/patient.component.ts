import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.scss'],
    animations: [routerTransition()]
})
export class PatientComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
