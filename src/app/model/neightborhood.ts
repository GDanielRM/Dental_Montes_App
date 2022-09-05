import { Status } from "./status";

export class Neightborhood {
    id_neighborhood: number = 0;
    name: string = "";
    status: Status = new Status;
    creation_date: Date;
    cancel_date: Date;

    constructor() { }

    toJson() {
        return {
            id_neighborhood: this.id_neighborhood,
            name: this.name,
            status: this.status.toJson(),
            creation_date: this.creation_date,
            cancel_date: this.cancel_date,
        }
    }
}