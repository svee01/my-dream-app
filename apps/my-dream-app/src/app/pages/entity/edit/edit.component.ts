import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { last } from "rxjs";
import { Movie } from "../entity.model";
import { EntityService } from "../entity.service";

@Component({
    selector: "app-edit",
    templateUrl: "./edit.component.html",
    styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
    componentId: string | null | undefined;
    componentExists: boolean = false;
    movie: Movie | undefined;
    movieTitle: string | undefined; // lokale kopie van username, voor page titel.

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private movieService: EntityService
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
            this.componentId = params.get("_id");
            if (this.componentId) {
                // Bestaande user
                console.log("Bestaande component");
                this.componentExists = true;
                // Haal de bestaande user uit het array.
                // We maken hier een kopie van het oorspronkelijk object!
                this.movie = {
                    ...this.movieService.getMovieById(this.componentId),
                };
                this.movieTitle = this.movie.title;
            } else {
                // Nieuwe user
                console.log("Nieuwe component");
                this.componentExists = false;
                // Geen bestaande user, dus nieuw leeg object maken.
                this.movie = {
                    _id: undefined,
                    title: "",
                    year: undefined,
                    rated: "",
                    released: new Date(),
                    runtime: undefined,
                };
            }
        });
    }

    onSubmit() {
        console.log("Submitting the form");
        // User toevoegen aan UserArray.
        if (this.componentExists) {
            // Update bestaande entry in arraylist
            this.movieService.updateMovie(this.movie!);
            this.router.navigate([".."]);
        } else {
            // Create new entry
            this.movieService.addMovie(this.movie!);
            this.router.navigate([".."]);
        }
    }
}