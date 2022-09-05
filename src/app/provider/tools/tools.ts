import { Injectable } from "@angular/core";
import { AlertController } from '@ionic/angular';



@Injectable()
export class Tools {
    constructor(
        private _AlertController: AlertController
    ) {

    }

    ShowError(error: any) {
        var error = error.error;
        var error2 = error.message;
        if (error.type != undefined) {
            error = error2
        }

        alert('ERROR ' + 'Ha ocurrido un error<br>' + error)
    }

    isNum(val){
        return !isNaN(val)
    }
}