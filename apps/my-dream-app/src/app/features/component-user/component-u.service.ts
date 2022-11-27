import { Injectable } from "@angular/core";
import { Gender, User } from "./component-u.model";

@Injectable({
    providedIn: "root",
})
export class ComponentUService {
    users: User[] = [
        {
            id: "1",
            firstName: "Robin",
            lastName: "Schellius",
            emailAddress: "r.schellius@avans.nl",
            birthDate: new Date(),
            gender: Gender.male,
        },
        {
            id: "2",
            firstName: "Kees",
            lastName: "Jansen",
            emailAddress: "k.jansen@avans.nl",
            birthDate: new Date(),
            gender: Gender.unknown,
        },
        {
            id: "3",
            firstName: "Marieke",
            lastName: "van Dam",
            emailAddress: "m.vandam@avans.nl",
            birthDate: new Date(),
            gender: Gender.female,
        },
        {
            id: "4",
            firstName: "Sanne",
            lastName: "van Eck",
            emailAddress: "s.vaneck@avans.nl",
            birthDate: new Date(),
            gender: Gender.female,
        },
        {
            id: "5",
            firstName: "Mika",
            lastName: "van Dam",
            emailAddress: "m.vandam@avans.nl",
            birthDate: new Date(),
            gender: Gender.male,
        },
    ];

    constructor() {
        console.log("ComponentAService created");
    }

    getAllUsers(): User[] {
        return this.users;
    }

    getUserById(id: string): User {
        return this.users.filter((user: User) => user.id === id)[0];
    }

    addUser(newUser: User): void {
        this.users.push(newUser);
    }

    updateUser(updatedUser: User) {
        console.log("Updating user " + updatedUser.firstName);

        let updatedUsers = this.users.filter(
            (user) => user.id !== updatedUser.id
        );
        updatedUsers.push(updatedUser);
        this.users = updatedUsers;

        console.log(this.users);
    }

    deleteUser(id: string) {
        let user = this.users.find((user) => user.id == id);
        let index = this.users.indexOf(user!);

        console.log(user?.firstName);

        this.users.splice(index, 1);

        console.log(this.users);
    }
}