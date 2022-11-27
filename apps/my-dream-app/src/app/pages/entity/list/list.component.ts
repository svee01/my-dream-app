import { Component, OnDestroy, OnInit } from "@angular/core";
import { Movie } from "../entity.model";
import { EntityService } from "../entity.service";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit, OnDestroy {
    movies: Movie[] | undefined;

    constructor(private service: EntityService) {}

    ngOnInit(): void {
        // haal de users/entities via de service op
        this.movies = this.service.getAllMovies();
        console.log(this.movies.length + " movies found.");
    }

    ngOnDestroy(): void {
        console.log("ListComponent.ngOnDestroy");
    }
}