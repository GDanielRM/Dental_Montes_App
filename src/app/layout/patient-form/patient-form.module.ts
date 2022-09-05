import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from '../bs-component/components';
import { PageHeaderModule } from './../../shared';

import { PatientFormRoutingModule } from './patient-form-routing.module';
import { PatientFormComponent } from './patient-form.component';

@NgModule({
    imports: [
        CommonModule, 
        PatientFormRoutingModule, 
        PageHeaderModule, 
        NgbModule,
        FormsModule,
    ],
    declarations: [
        PatientFormComponent,
        DatePickerComponent,
    ]
})
export class PatientFormModule { }
