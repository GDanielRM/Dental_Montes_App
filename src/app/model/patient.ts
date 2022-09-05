import { Person } from "./person";
import { Status } from "./status";

export class Patient {
    public id_patient: number = 0;
    public person: Person = new Person;
    public status: Status = new Status;
    public cancel_date: Date;

    constructor() { }

    toJson() {
        return {
            id_patient: this.id_patient,
            person: this.person.toJson(),
            status: this.status.toJson(),
            cancel_date: this.cancel_date
        }
    }
}