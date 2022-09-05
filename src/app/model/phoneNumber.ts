import { PhoneNumberType } from "./PhoneNumberType";
import { Status } from "./status";

export class PhoneNumber {
    public id_phoneNumber: number = 0;
    public type: PhoneNumberType = new PhoneNumberType;
    public name: string = "";
    public phone_number: string = "";
    public status: Status = new Status;
    public cancel_date: Date;

    constructor() { }

    toJson() {
        return {
            id_phoneNumber: this.id_phoneNumber,
            type: this.type,
            name: this.name,
            phone_number: this.phone_number,
            status: this.status.toJson(),
            cancel_date: this.cancel_date
        }
    }
}