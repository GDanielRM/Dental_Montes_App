import { City } from "./city";
import { Neightborhood } from "./neightborhood";
import { PhoneNumber } from "./phoneNumber";
import { Status } from "./status";
import { Street } from "./street";

export class Person {
    public id_person: number = 0;
    public first_name: string = "";
    public middle_name: string = "";
    public last_name: string = "";
    public second_last_name: string = "";
    public date_of_birth: string;
    public email: string = "";
    public city: City = new City;
    public neighborhood: Neightborhood = new Neightborhood;
    public street: Street = new Street;
    public house_number: string = "";
    public phone_number_personal: PhoneNumber = new PhoneNumber;
    public phone_number_emergency: PhoneNumber = new PhoneNumber;
    public status: Status = new Status;
    public creation_date: Date;
    public cancel_date: Date;

    constructor() { }

    toJson() {
        return {
            id_person: this.id_person,
            first_name: this.first_name,
            middle_name: this.middle_name,
            last_name: this.last_name,
            second_last_name: this.second_last_name,
            date_of_birth: this.date_of_birth,
            email: this.email,
            city: this.city.toJson(),
            neighborhood: this.neighborhood.toJson(),
            street: this.street.toJson(),
            house_number: this.house_number,
            phone_number_personal: this.phone_number_personal.toJson(),
            phone_number_emergency: this.phone_number_emergency.toJson(),
            status: this.status.toJson(),
            creation_date: this.creation_date,
            cancel_date: this.cancel_date,
        }
    }
}