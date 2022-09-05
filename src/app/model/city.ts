import { Status } from "./status";

export class City {
    public id_city: number = 0;
    public name: string = "";
    public status: Status = new Status;
    public creation_date: Date;
    public cancel_date: Date;

    constructor() { }

    toJson() {
        return {
            id_city: this.id_city,
            name: this.name,
            status: this.status.toJson(),
            creation_date: this.creation_date,
            cancel_date: this.cancel_date,
        }
    }
}