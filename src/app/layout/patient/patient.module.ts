import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from './../../shared';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';

@NgModule({
    imports: [CommonModule, PatientRoutingModule, PageHeaderModule],
    declarations: [PatientComponent]
})
export class PatientModule { }
