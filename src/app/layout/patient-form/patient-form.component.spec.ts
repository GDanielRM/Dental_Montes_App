import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { PatientFormComponent } from './patient-form.component';
import { PatientFormModule } from './patient-form.module';


describe('PatientFormComponent', () => {
    let component: PatientFormComponent;
    let fixture: ComponentFixture<PatientFormComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [PatientFormModule, BrowserAnimationsModule, RouterTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PatientFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => { 
        expect(component).toBeTruthy();
    });
});
