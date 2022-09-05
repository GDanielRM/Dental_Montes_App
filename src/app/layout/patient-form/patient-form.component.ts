import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { City } from '../../model/city';
import { PatientFormService } from '../../services/patient-form.service';
import { CityService } from '../../services/city.service';
import { NeighborhoodService } from '../../services/neighborhood.service';
import { Tools } from '../../provider/tools/tools';
import { StreetService } from '../../services/street.service';
import { Patient } from '../../model/patient';

@Component({
    selector: 'app-patient-form',
    templateUrl: './patient-form.component.html',
    styleUrls: ['./patient-form.component.scss']
})

export class PatientFormComponent implements OnInit {
    idPatient = this._activateRoute.snapshot.paramMap.get('id');
    idPerson:any;

    model: any;

    cities: City;
    neighborhoods: any;
    streets: any;

    firstName: string = "";
    middleName: string = "";
    lastName: string = "";
    secondLastName: string = "";
    birthDate: any;
    opcCity: number = 0;
    opcNeighborhood: number = 0;
    opcStreet: number = 0;
    houseNumber: string = "";
    personalPhone: string = "";
    emergencyContactName: string = "";
    emergencyContactPhoneNumber: string = "";
    email: string = "";

    constructor(
        private _activateRoute: ActivatedRoute,
        private _tools: Tools,
        private _patientFormService: PatientFormService,
        private _cityService: CityService,
        private _neighborhoodService: NeighborhoodService,
        private _streetService: StreetService
    ) {
        this.GetCities();
        this.GetNeighborhoods();
        this.GetStreets();

        if (this.idPatient != ':id') {
            this.GetPatients(this.idPatient);
        }
    }

    ngOnInit() { }

    GetPatients(idPatient: string = "") {
        this._patientFormService.GetPatients(idPatient).subscribe(patients => {
            if (patients.status) {
                this.firstName = patients.data[0].person.first_name;
                this.middleName = patients.data[0].person.middle_name;
                this.lastName = patients.data[0].person.last_name;
                this.secondLastName = patients.data[0].person.second_last_name;
                this.birthDate = new Date(patients.data[0].person.date_of_birth).toISOString().split('T')[0];
                this.opcCity = patients.data[0].person.city.id_city;
                this.opcNeighborhood = patients.data[0].person.neighborhood.id_neighborhood;
                this.opcStreet = patients.data[0].person.street.id_street;
                this.houseNumber = patients.data[0].person.house_number;
                this.email = patients.data[0].person.email;
                this.personalPhone = patients.data[0].person.phone_number_personal.phone_number;
                this.emergencyContactName = patients.data[0].person.phone_number_emergency.name;
                this.emergencyContactPhoneNumber = patients.data[0].person.phone_number_emergency.phone_number;
            } else {
                alert('Error! => ' + patients.message);
            }
        }, error => {
            this._tools.ShowError(error);
        });
    }

    SavePatient(idPatient: any) {
        if (!this._tools.isNum(idPatient)) {
            idPatient = 0
        } else {
            idPatient = Number(idPatient);
        }

        const patient = new Patient();
        patient.id_patient = idPatient;
        patient.person.email = this.email;
        patient.person.first_name = this.firstName;
        patient.person.middle_name = this.middleName;
        patient.person.last_name = this.lastName;
        patient.person.second_last_name = this.secondLastName;
        patient.person.date_of_birth = this.birthDate;
        patient.person.city.id_city = Number(this.opcCity);
        patient.person.neighborhood.id_neighborhood = Number(this.opcNeighborhood);
        patient.person.street.id_street = Number(this.opcStreet);
        patient.person.house_number = this.houseNumber;
        patient.person.phone_number_personal.phone_number = this.personalPhone;
        patient.person.phone_number_emergency.name = this.emergencyContactName;
        patient.person.phone_number_emergency.phone_number = this.emergencyContactPhoneNumber;

        this._patientFormService.SavePatient(patient.toJson()).subscribe((resp: any) => {
            if (resp.status) {
                alert('Listo!' + resp.message);
            } else {
                alert('Error!' + resp.message);
            }
        }, error => {
            this._tools.ShowError(error);
        });
    }

    GetCities() {
        this._cityService.GetCities().subscribe(cities => {
            if (cities.status) {
                this.cities = cities.data;
            } else {
                alert('ERROR!! ' + cities.message);
            }
        }, error => {
            this._tools.ShowError(error);
        });
    }

    GetNeighborhoods() {
        this._neighborhoodService.GetNeighborhoods().subscribe(neighborhoods => {
            if (neighborhoods.status) {
                this.neighborhoods = neighborhoods.data;
            } else {
                alert('ERROR!! ' + neighborhoods.message);
            }
        }, error => {
            this._tools.ShowError(error);
        });
    }

    GetStreets() {
        this._streetService.GetStreets().subscribe((resp: any) => {
            if (resp.status) {
                this.streets = resp.data;
            } else {
                alert('ERROR!! ' + resp.message);
            }
        }, error => {
            this._tools.ShowError(error);
        });
    }
}