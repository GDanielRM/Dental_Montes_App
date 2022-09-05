export class Status {
    id_status: number = 0;
    name: string = "";

    constructor() { }

    toJson() {
        return {
            id_status: this.id_status,
            name: this.name
        }
    }
}