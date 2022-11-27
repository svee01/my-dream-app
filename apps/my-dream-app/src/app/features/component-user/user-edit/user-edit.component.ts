import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { last } from "rxjs";
import { User, Gender } from "../component-u.model";
import { ComponentUService } from "../component-u.service";

@Component({
    selector: "app-a-edit",
    templateUrl: "./user-edit.component.html",
    styleUrls: ["./user-edit.component.css"],
})
export class AEditComponent implements OnInit {
    componentId: string | null | undefined;
    componentExists: boolean = false;
    user: User | undefined;
    userName: string | undefined; // lokale kopie van username, voor page titel.

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: ComponentUService
    ) {}

    ngOnInit(): void {
        /**
         * We gebruiken de EditComponent om een bestaande record te wijzigen
         * én om een nieuwe record te maken.
         * Een bestaande record heeft een :id in de URL, bv '/users/1/edit'
         * Als die er dus is gaan we de user ophalen en bewerken.
         * Als er geen :id in de URL zit (via '/users/new') maken we een nieuwe record.
         */
        this.route.paramMap.subscribe((params) => {
            this.componentId = params.get("id");
            if (this.componentId) {
                // Bestaande user
                console.log("Bestaande component");
                this.componentExists = true;
                // Haal de bestaande user uit het array.
                // We maken hier een kopie van het oorspronkelijk object!
                this.user = {
                    ...this.userService.getUserById(this.componentId),
                };
                this.userName = this.user.firstName + " " + this.user.lastName;
            } else {
                // Nieuwe user
                console.log("Nieuwe component");
                this.componentExists = false;
                // Geen bestaande user, dus nieuw leeg object maken.
                this.user = {
                    id: undefined,
                    firstName: "",
                    lastName: "",
                    emailAddress: "",
                    birthDate: new Date(),
                    gender: Gender.unknown,
                };
            }
        });
    }

    onSubmit() {
        console.log("Submitting the form");
        // User toevoegen aan UserArray.
        if (this.componentExists) {
            // Update bestaande entry in arraylist
            this.userService.updateUser(this.user!);
            this.router.navigate([".."]);
        } else {
            // Create new entry
            this.userService.addUser(this.user!);
            this.router.navigate([".."]);
        }
    }
}