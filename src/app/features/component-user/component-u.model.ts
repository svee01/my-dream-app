import { last } from "rxjs";

export enum Gender {
    male = "male",
    female = "female",
    unknown = "unknown",
    other = "other",
}

export class User {
    id: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    emailAddress: string | undefined;
    birthDate: Date | undefined;
    gender: Gender = Gender.unknown;

    constructor(id: string, firstName: string, lastName: string, emailAddress: string, birthDate: Date, gender: Gender) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.birthDate = birthDate;
        this.gender = gender;
    }
}