import { Component, OnDestroy, OnInit } from "@angular/core";
import { User } from "../component-u.model";
import { ComponentUService } from "../component-u.service";

@Component({
    selector: "app-u-list",
    templateUrl: "./user-list.component.html",
    styleUrls: ["./user-list.component.css"],
})
export class UListComponent implements OnInit, OnDestroy {
    users: User[] | undefined;

    constructor(private uService: ComponentUService) {}

    ngOnInit(): void {
        // haal de users/entities via de service op
        this.users = this.uService.getAllUsers();
        console.log(this.users.length + " users found.");
    }

    ngOnDestroy(): void {
        console.log("UListComponent.ngOnDestroy");
    }
}