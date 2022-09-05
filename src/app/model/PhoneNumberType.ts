export class PhoneNumberType {
    public id_phone_number_type: number = 0;
    public name: string = "";
 
    constructor() { }

    toJson() {
        return {
            id_phone_number_type: this.id_phone_number_type,
            name: this.name
        }
    }
}

export enum PhoneNumberTypeEnum {
    Personal = 1,
    Emergency_Contact = 2
}